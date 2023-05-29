'use client'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const authContext = createContext({})

export const useAuth = () => {
  return useContext(authContext)
}

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth()

  return (
    <authContext.Provider value={{ ...auth, signIn: auth.signIn }}>{children}</authContext.Provider>
  )
}

const useProvideAuth = () => {
  const [session, setSession] = useState(null)
  const [onError, setOnError] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()

  useEffect(() => {
    getSession()
  }, [])

  const login = async ({ email, password }) => {
    NProgress.start()
    const data = await fetch('http://20.228.195.178:3001/user/JWT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: email,
        password,
      }),
    }).then((res) => {
      NProgress.done()
      return res.json()
    })
    if (data.error) {
      NProgress.done()
      throw Error(data.error)
    }
    localStorage.setItem('token', data.accessToken)

    //set session
    getSession()

    router.push('/login/admin')

    return true
  }

  const getSession = () => {
    NProgress.start()
    const token = localStorage.getItem('token')

    if (token) {
      const data = jwt_decode(token)

      const currentTime = new Date().getTime() / 1000
      if (parseInt(currentTime) <= parseInt(data.exp))
        NProgress.done() &
          setSession({
            username: data.username,
            state: true,
            _id: data._id,
            token,
          })
      else {
        NProgress.done()
        localStorage.removeItem('token')
        router.push('/login')
      }
    }
  }

  const signIn = ({ email, password }) => {
    toast.promise(login({ email, password }), {
      loading: 'Logging...',
      success: 'Welcome 😍',
      error: (error) => {
        setErrorMessage(error.toString())
        setOnError(true)
        return <b>{error.toString()}</b>
      },
    })
  }

  const create = async ({ email, password, fullname }) => {
    const data = await fetch('http://20.228.195.178:3001/user/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: email,
        password,
        fullname,
      }),
    }).then((res) => {
      return res.json()
    })
  }

  return { session, signIn, create, onError, errorMessage }
}
