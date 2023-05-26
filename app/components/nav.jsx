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
    <header className="solid w-full select-none border-b-2 bg-white hover:drop-shadow-md ">
      <nav className="flex h-20 flex-row place-content-between">
        <Link href={'/'} className="mt-3">
          <Icon />
        </Link>

        <Link className="mr-5 mt-8" href={'/admin'}>
          <p className="underline">Admin</p>
        </Link>
      </nav>
    </header>
  )
}
