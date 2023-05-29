'use client'
import { Modal } from 'flowbite-react'
import { useState } from 'react'
import { useAuth } from '@/context/session'

export default function EditPost() {
  return (
    <>
      <h2 className="md:text-7xl lg:text-8xl mb-5 mt-2 text-center text-6xl font-bold leading-tight tracking-tighter selection:bg-fuchsia-300 md:text-left md:leading-none">
        Create/Update
      </h2>
      <form className="my-32 mt-7 flex w-auto flex-col items-start border bg-gray-500 text-white selection:bg-fuchsia-300">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p className="ml-5 mt-3 font-bold">Title:</p>
            <p className="ml-96 mt-3 font-bold">Author:</p>
          </div>
          <div className="flex flex-row">
            <input className="ml-5 mt-3 w-96 border text-black shadow" type="text" />
            <input className="ml-7 mt-3 w-96 border text-black shadow" type="text" />
          </div>
        </div>
        <div className="flex w-96 flex-col">
          <p className=" ml-5 mt-3 font-bold">Image URL:</p>
          <input className="ml-5 mt-3 w-96 border text-black shadow" type="text" />
        </div>
        <div className="flex w-96 flex-col">
          <p className=" ml-5 mt-3 font-bold">Description:</p>
          <input className="ml-5 mt-3 w-96 border text-black shadow" type="text" />
        </div>
        <div className="mb-8 flex w-96 flex-col ">
          <p className=" ml-5 mt-3 font-bold ">Body:</p>{' '}
          <textarea className="ml-5 mt-3 h-64 w-full border p-1 text-black shadow" type="text" />
        </div>

        <button className="mb-5 ml-5 w-96 rounded border-b-4 border-gray-800 bg-gray-700 px-4 py-2 font-bold text-white hover:border-gray-700 hover:bg-gray-600">
          Save
        </button>
      </form>
    </>
  )
}
