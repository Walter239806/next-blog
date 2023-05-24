import Link from 'next/link'
import React from 'react'
import Icon from './icon'

export default function Header() {
  const links = [
    {
      route: '/',
      label: 'Home',
    },
    {
      route: '/admin',
      label: 'Admin',
    },
  ]
  return (
    <header className="solid w-full border-b-2 bg-white hover:drop-shadow-xl ">
      <nav className="flex h-20 flex-row place-content-between">
        <Icon />
        <Link className="mr-5 mt-8" href={'/admin'}>
          <p>Admin</p>
        </Link>
      </nav>
    </header>
  )
}
