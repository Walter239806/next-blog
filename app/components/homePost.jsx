'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { usePostStore } from '@/store/post'
import Link from 'next/link'

export default function HomePost() {
  const [post, setPost] = useState([])
  const { readAll, list, isError, isLoading } = usePostStore()

  useEffect(() => {
    readAll()
  }, [])

  const List = () => {
    return list.map((item) => {
      return (
        <div key={item._id} className="mt-5 flex h-36 w-full flex-row border-t-2 border-black">
          <p className="m-10 text-gray-500 hover:text-gray-700">{item.createdAt.split('T')[0]}</p>
          <div className="h-full w-1/2">
            <Link href={`/post/${item._id}`}>
              <h1 className="p-2 font-bold">{item.title}</h1>
            </Link>
            <p className="p-2">{item.description}</p>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="h-auto w-auto selection:bg-fuchsia-300 selection:text-black">
      {isLoading ? <p>Loading...</p> : <List />}
    </div>
  )
}
