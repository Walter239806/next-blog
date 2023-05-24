import Latest from 'app/components/latest'
import HomePost from './components/homePost'
import { useEffect, useState } from 'react'
import { usePostStore } from '@/store/post'

export default function Page() {
  // const list = [
  //   {
  //     id: 1,
  //     name: 'John',
  //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  //     date: '2021-01-01',
  //     title: 'First post',
  //     autor: 'John',
  //   },
  //   {
  //     id: 2,
  //     name: 'John',
  //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  //     date: '2021-01-01',
  //     title: 'Second post',
  //     autor: 'John',
  //   },
  //   {
  //     id: 3,
  //     name: 'John',
  //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  //     date: '2021-01-01',
  //     title: 'Third post',
  //     autor: 'John',
  //   },
  //   {
  //     id: 4,
  //     name: 'John',
  //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  //     date: '2021-01-01',
  //     title: 'Four post',
  //     autor: 'John',
  //   },
  // ]

  const { list, isLoading, readAll } = usePostStore()

  useEffect(() => {
    readAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="pb-96">
      <Latest />
      <HomePost list={list} />
    </div>
  )
}
