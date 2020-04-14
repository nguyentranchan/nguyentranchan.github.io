import React from 'react'
import { Logo } from '../Logo'
import { SideBar } from './sidebar'

interface HeaderProps {
  siteTitle?: string
}
interface ItemProps {
  className?: string
  text: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>) => void
}

interface HeaderState {
  open: boolean
}

const DesktopMenuItem = (props: ItemProps) => {
  const { className = '', text } = props
  return (
    <a
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
  handleMenuClick = () => {
    this.setState(prvState => ({
      open: !prvState.open,
    }))
  }
  public render() {
    return (
      <header className="container-lg fixed top-0 right-0 left-0 bg-transparent z-10">
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-18 md:h-16 lg:16">
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
              <DesktopMenuItem text="Products" />
              <DesktopMenuItem text="Our Company" />
              <DesktopMenuItem text="Career" />
              <DesktopMenuItem text="Contact" />
            </div>
          </div>
          <SideBar isOpen={this.state.open} onClose={this.handleMenuClick} />
        </nav>
      </header>
    )
  }
}

export default Header
