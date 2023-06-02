'use client'
import Latest from 'app/components/latest'
import HomePost from './components/homePost'
import ModalComponent from './components/modal'
import { useAuth } from '@/context/session'
import handleSubmit from '@/hooks/useSubmit'

export default function Page() {
  const { session } = useAuth()

  return (
    <div className="pb-96">
      <Latest />
      <HomePost />

      {session?.state ? <ModalComponent handleSubmit={handleSubmit} /> : <div></div>}
    </div>
  )
}
