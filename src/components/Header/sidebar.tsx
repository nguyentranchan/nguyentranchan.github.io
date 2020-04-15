import React from 'react'
import './sidebar.scss'
import { Logo } from '../Logo'

interface SideBarProps {
  isOpen: boolean
  onClose: () => void
}
export function SideBar(props: SideBarProps) {
  const { isOpen, onClose } = props
  return (
    <div className={`sidenav bg-gblue ${isOpen ? 'w-64' : 'w-0'}`}>
      <a href="javascript:void(0)" className="closebtn" onClick={onClose}>
        &times;
      </a>
      <Logo fill="white" textColor="text-white" />
      <a href="#products">Products</a>
      <a href="#about-us">About Us</a>
      <a href="#career">Career</a>
      <a href="#contact">Contact</a>
    </div>
  )
}
