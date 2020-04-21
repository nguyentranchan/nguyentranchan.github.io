import React from 'react'
import { Logo } from '../Logo'
import { SideBar } from './sidebar'

interface HeaderProps {
  siteTitle?: string
}
interface ItemProps {
  className?: string
  text: string
  href?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>) => void
}

interface HeaderState {
  open: boolean
}

const DesktopMenuItem = (props: ItemProps) => {
  const { className = '', text, href } = props
  return (
    <a
      href={href}
      onClick={props.onClick}
      className={
        'h-16 text-white hover:menu-h-white--hover px-4 flex items-center text-center cursor-pointer' + className
      }
    >
      {text}
    </a>
  )
}

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props)

    this.state = {
      open: false,
    }
  }
  componentDidMount() {
    const hash = window.location.hash || ''
    const el = document.getElementById(hash.replace('#', ''))
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
  handleMenuClick = (event: any) => {
    event.persist()
    event.preventDefault()
    this.setState(prvState => ({
      open: !prvState.open,
    }))
  }
  onClickMenuItem = (menu: string) => (event: any) => {
    event.persist()
    event.preventDefault()
    const el = document.getElementById(menu)
    if (window.location.pathname.includes('career')) {
      return (window.location.href = window.location.origin + '/#' + menu)
    }
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  public render() {
    return (
      <header className="sticky top-0 right-0 left-0 bg-gblue z-20 flex justify-center">
        <nav className="flex flex-auto items-center justify-between px-6 md:px-16 lg:px-18 md:h-16 lg:16 container">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Logo fill="white" textColor="text-white" />
          </div>
          <div className="block lg:hidden md:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-white hover:border-white outline-none"
              onClick={this.handleMenuClick}
            >
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`menu-list w-full flex-grow lg:flex lg:justify-end lg:w-auto md:flex md:justify-end md:w-auto z-10 bg-transparent lg:block hidden`}
          >
            <div className="text-sm md:inline-flex lg:inline-flex">
              <DesktopMenuItem text="Products" href="#products" onClick={this.onClickMenuItem('products')} />
              <DesktopMenuItem text="About Us" href="#about-us" onClick={this.onClickMenuItem('about-us')} />
              <DesktopMenuItem text="Career" href="#career" onClick={this.onClickMenuItem('career')} />
              <DesktopMenuItem text="Contact" href="#footer" onClick={this.onClickMenuItem('footer')} />
            </div>
          </div>
          <SideBar isOpen={this.state.open} onClose={this.handleMenuClick} />
        </nav>
      </header>
    )
  }
}

export default Header
