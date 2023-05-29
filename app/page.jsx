'use client'
import Latest from 'app/components/latest'
import HomePost from './components/homePost'
import ModalComponent from './components/modal'
import { useAuth } from '@/context/session'

export default function Page() {
  const { session } = useAuth()

  const handleSubmit = async (data) => {
    console.log(data)
    const res = await fetch('http://20.228.195.178:3001/post/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  return (
    <div className="pb-96">
      <Latest />
      <HomePost />

      {session?.state ? <ModalComponent handleSubmit={handleSubmit} /> : <div></div>}
    </div>
  )
}
