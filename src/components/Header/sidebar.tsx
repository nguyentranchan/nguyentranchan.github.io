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
    <div className={`sidenav bg-blue-700 ${isOpen ? 'w-64' : 'w-0'}`}>
      <a href="javascript:void(0)" className="closebtn" onClick={onClose}>
        &times;
      </a>
      <Logo fill="white" textColor="text-white" />
      <a href="">Products</a>
      <a href="">Our Company</a>
      <a href="">Career</a>
      <a href="">Contact</a>
    </div>
  )
}
