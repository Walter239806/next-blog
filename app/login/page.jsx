'use client'
import { useAuth } from '@/context/session'
import { useState } from 'react'

export default function Login() {
  const [validated, setValidated] = useState('false')
  const [email, setEmail] = useState('a@test1.com')
  const [password, setPassword] = useState('Welcome123456!')
  const { signIn } = useAuth()

  const login = (e) => {
    e.preventDefault()

    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.stopPropagation()
      return
    }
    setValidated(true)

    signIn({ email, password })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'email') {
      setEmail(value)
    } else {
      setPassword(value)
    }
  }

  return (
    <div className="mx-56 mb-96 mt-36 flex flex-col place-items-center bg-gray-500 ">
      <h1 className="mt-4 text-3xl font-bold text-white selection:bg-fuchsia-300">Login</h1>
      <form className="flex flex-col place-items-center" onSubmit={login} noValidate>
        <input
          className="mb-4 mt-4 p-2 selection:bg-fuchsia-300"
          type="email"
          placeholder="Username"
          value={email}
          onChange={handleChange}
        />
        <input
          className="mb-4 mt-4 p-2 selection:bg-fuchsia-300"
          type="text"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <button
          className="mb-4 mt-4 select-none rounded-md bg-white p-2 text-xl hover:bg-fuchsia-300"
          onClick={login}
        >
          Login
        </button>
      </form>
    </div>
  )
}
