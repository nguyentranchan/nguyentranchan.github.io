import React from 'react'
import './sidebar.scss'
import { Logo } from '../Logo'

interface SideBarProps {
  isOpen: boolean
  onClose: () => void
}
export function SideBar(props: SideBarProps) {
  const { isOpen, onClose } = props
  const onClickMenuItem = (menu: string) => (event: any) => {
    event.persist()
    event.preventDefault()
    const el = document.getElementById(menu)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className={`sidenav bg-gblue ${isOpen ? 'w-64' : 'w-0'} z-20`}>
      <a href="javascript:void(0)" className="closebtn" onClick={onClose}>
        &times;
      </a>
      <Logo fill="white" textColor="text-white" />
      <a href="#products" onClick={onClickMenuItem('products')}>
        Products
      </a>
      <a href="#about-us" onClick={onClickMenuItem('about-us')}>
        About Us
      </a>
      <a href="#career" onClick={onClickMenuItem('career')}>
        Career
      </a>
      <a href="#contact" onClick={onClickMenuItem('contact')}>
        Contact
      </a>
    </div>
  )
}
