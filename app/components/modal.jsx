'use client'
import { Modal } from 'flowbite-react'
import { useState, useRef } from 'react'

export default function ModalComponent({ handleSubmit }) {
  const [showModal, setShowModal] = useState(false)

  const title = useRef('')
  const author = useRef('')
  const image = useRef('')
  const description = useRef('')
  const body = useRef('')

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

  const onClick = () => {
    setShowModal(true)
  }

  const onClose = () => {
    setShowModal(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const data = {
      title: title.current,
      author: author.current,
      coverImage: image.current,
      description: description.current,
      body: body.current,
    }
    handleSubmit(data)
    setShowModal(false)
  }

  return (
    <>
      <button
        className="fixed bottom-2.5 right-12 my-5 flex h-14 w-14 rounded-full border bg-fuchsia-300 drop-shadow hover:bg-gray-500"
        onClick={onClick}
      >
        <img className="m-auto w-6" src="/plus.svg" />
      </button>
      <Modal onClose={onClose} show={showModal}>
        <Modal.Header>
          <h2 className="mb-5 mt-2 text-center text-6xl font-bold leading-tight tracking-tighter selection:bg-fuchsia-300 md:text-left md:text-5xl md:leading-none">
            Create
          </h2>
        </Modal.Header>
        <Modal.Body>
          <form
            className=" mx-auto flex w-auto flex-col items-start text-black selection:bg-fuchsia-300"
            onSubmit={onSubmit}
          >
            <div className="flex w-full flex-col">
              <div className="flex w-full flex-col">
                <p className="mt-3  font-bold">Title:</p>
                <input
                  className=" mt-3 w-full rounded-md border text-black shadow"
                  type="text"
                  onChange={onValueChange}
                  name="title"
                  ref={title}
                />
              </div>
              <div className="flex w-full flex-col ">
                <p className=" mt-3 w-full font-bold">Author:</p>
                <input
                  className=" mt-3 w-full rounded-md border text-black shadow"
                  type="text"
                  onChange={onValueChange}
                  name="author"
                  ref={author}
                />
              </div>
            </div>
            <div className="flex w-full flex-col">
              <p className="mt-3 w-full font-bold">Image URL:</p>
              <input
                className=" mt-3 w-full rounded-md border text-black shadow"
                type="text"
                onChange={onValueChange}
                name="image"
                ref={image}
              />
            </div>
            <div className="flex w-full flex-col">
              <p className=" mt-3 w-full font-bold">Description:</p>
              <input
                className=" mt-3 w-full rounded-md border text-black shadow"
                type="text"
                onChange={onValueChange}
                name="description"
                ref={description}
              />
            </div>
            <div className="mb-8 flex w-full flex-col ">
              <p className="mt-3 w-full font-bold ">Body:</p>{' '}
              <textarea
                className=" mt-3 h-64 w-full rounded-md border p-1 text-black shadow"
                type="text"
                onChange={onValueChange}
                name="body"
                ref={body}
              />
              <button className="mb-5  mt-3 w-full rounded border-b-4 border-gray-800 bg-gray-700 px-4 py-2 font-bold text-white hover:border-gray-700 hover:bg-gray-600">
                Save
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  )
}
