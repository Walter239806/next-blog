'use client'
import Link from 'next/link'
import React from 'react'
import Icon from './icon'
import { useAuth } from '@/context/session'
import { useRouter } from 'next/navigation'

export default function Header() {
  const { session } = useAuth()

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <header className="solid w-full select-none border-b-2 bg-white hover:drop-shadow-md ">
      <nav className="flex h-20 flex-row place-content-between">
        <Link href={'/'} className="mt-3">
          <Icon />
        </Link>
        <div className="flex flex-row">
          <Link className="mr-5 mt-5" href={'/login/admin'}>
            <p className="underline">Admin</p>
          </Link>
        </div>
      </nav>
    </header>
  )
}
