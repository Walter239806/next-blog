'use client'
import { useState, useEffect, useRef } from 'react'
import { usePostStore } from '@/store/post'
import { Textarea, TextInput } from 'flowbite-react'
import UseUpdate from '@/hooks/useUpdate'
import { useRouter } from 'next/navigation'

export default function EditPost({ params }) {
  const { _id } = params
  const { post, readById } = usePostStore()
  const [loading, setLoading] = useState(false)
  const title = useRef('')
  const author = useRef('')
  const image = useRef('')
  const description = useRef('')
  const body = useRef('')
  const router = useRouter()

  useEffect(() => {
    readById(_id)
  }, [])

  useEffect(() => {
    title.current = post.title
    author.current = post.author
    image.current = post.image
    description.current = post.description
    body.current = post.body
  }, [post])

  const onValueChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'title':
        title.current = value
        break
      case 'author':
        author.current = value
        break
      case 'image':
        image.current = value
        break
      case 'description':
        description.current = value
        break
      case 'body':
        body.current = value
        break
    }
  }

  const submit = async (e) => {
    e.preventDefault()

    const data = {
      _id,
      title: title.current,
      author: author.current,
      coverImage: image.current,
      description: description.current,
      body: body.current,
    }
    await UseUpdate(data)
    router.push('/login/admin')
  }

  const Form = () => {
    return (
      <form className="my-32 mt-7 flex flex-col items-center border bg-gray-500 text-white selection:bg-fuchsia-300">
        <div className="flex flex-col">
          <p className="ml-5 mt-3 font-bold">Title:</p>
          <TextInput
            className="ml-5 mt-3 w-96 text-black shadow"
            required
            name="title"
            defaultValue={post.title}
            onChange={onValueChange}
          />
          <p className="ml-5 mt-3 font-bold">Author:</p>
          <TextInput
            className="ml-7 mt-3 w-96 text-black shadow"
            required
            name="author"
            defaultValue={post.author}
            onChange={onValueChange}
          />
          <p className=" ml-5 mt-3 font-bold">Image URL:</p>
          <TextInput
            className="ml-5 mt-3 w-96  text-black shadow"
            required
            name="image"
            defaultValue={post.image}
            onChange={onValueChange}
          />
          <p className=" ml-5 mt-3 font-bold">Description:</p>
          <TextInput
            className="ml-5 mt-3 w-96  text-black shadow"
            required
            name="description"
            defaultValue={post.description}
            onChange={onValueChange}
          />
          <p className=" ml-5 mt-3 font-bold ">Body:</p>{' '}
          <Textarea
            className="ml-5 mt-3 h-64 w-96 p-1 text-black shadow"
            required
            name="body"
            defaultValue={post.body}
            onChange={onValueChange}
          />
        </div>

        <button
          className="my-5 ml-5 w-96 rounded border-b-4 border-gray-800 bg-gray-700 px-4 py-2 font-bold text-white hover:border-gray-700 hover:bg-gray-600"
          onClick={submit}
        >
          Save
        </button>
      </form>
    )
  }

  return (
    <>
      <h2 className="md:text-7xl lg:text-8xl mb-5 mt-2 text-center text-6xl font-bold leading-tight tracking-tighter selection:bg-fuchsia-300 md:text-left md:leading-none">
        Create/Update
      </h2>
      {loading ? <div> loading </div> : <Form props={post} />}
    </>
  )
}
