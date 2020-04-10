import React from 'react'

export function Footer() {
  return (
    <footer className="container-lg flex justify-center items-center bg-gray-200 h-12 text-sm">
      Copyright © {new Date().getFullYear()}. GGJungle Ltd. All Rights Reserved.
    </footer>
  )
}
