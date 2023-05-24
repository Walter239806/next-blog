import Link from 'next/link'
import React from 'react'

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
      <nav className="h-12">
        <ul className="mt-2 flex flex-row">
          {links.map(({ route, label }) => (
            <li
              className={
                label === 'Home' ? 'p-1 text-2xl font-bold hover:m-1' : 'mt-1.5 p-1 hover:m-3'
              }
              key={route}
            >
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
