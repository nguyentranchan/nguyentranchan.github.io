import React from 'react'
import { Logo } from '../Logo'
// import { Link } from 'gatsby';

interface HeaderProps {
  siteTitle?: string
}
interface ItemProps {
  className?: string
  text: string
}
const DesktopMenuItem = (props: ItemProps) => {
  const { className = '', text } = props
  return (
    <a
      className={
        'h-20 text-blue-700 hover:text-white hover:bg-blue-700 px-4 flex items-center text-center cursor-pointer' +
        className
      }
    >
      {text}
    </a>
  )
}

class Header extends React.PureComponent<HeaderProps, {}> {
  public render() {
    // const { siteTitle } = this.props;

    return (
      <header className="container-lg shadow-md h-20">
        <nav className="flex items-center justify-between flex-wrap px-6 md:px-20 lg:px-20 h-20">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Logo />
          </div>
          <div className="block lg:hidden md:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-blue-700 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="menu-item w-full block flex-grow lg:flex lg:justify-end lg:w-auto md:flex md:justify-end md:w-auto">
            <div className="text-md md:inline-flex lg:inline-flex">
              <DesktopMenuItem text="Products" />
              <DesktopMenuItem text="Our Company" />
              <DesktopMenuItem text="Career" />
              <DesktopMenuItem text="Contact" />
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
