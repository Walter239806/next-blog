'use client'
import { Modal, Alert } from 'flowbite-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import deletePost from '@/hooks/deletePost'

export default function DeleteModal({ selectedFlatRows }) {
  const [showModal, setShowModal] = useState(false)
  const [alert, setAlert] = useState(false)
  const [rows, setRows] = useState([])

  const onClick = () => {
    if (selectedFlatRows.length > 0) {
      setShowModal(true)
    }
    setAlert(true)
  }

  const onClose = () => {
    setShowModal(false)
  }

  const onDismiss = () => {
    setAlert(false)
  }

  const HandleDeleteClick = async () => {
    rows.forEach((row) => {
      deletePost({
        _id: row.original._id,
      })
    })
    setShowModal(false)
    // const postDelete = []
    // rows.forEach((row) => {
    //   postDelete.push(
    //     deletePost({
    //       _id: row.original._id,
    //     })
    //   )
    // })
    // Promise.all(postDelete).then(() => {
    //   window.location.reload()
    // })
  }

  useEffect(() => {
    setRows(selectedFlatRows)
  }, [selectedFlatRows])

  return (
    <>
      {!alert ? (
        <button
          onClick={onClick}
          className="flex h-auto w-auto rounded-md border-2 border-solid border-red-600 bg-white text-center hover:bg-slate-200 hover:text-white"
        >
          <Image className="m-2" src="/delete.svg" width={30} height={30} alt="delete" />
          <p className="m-3 font-medium text-red-600">Delete</p>
        </button>
      ) : (
        <Alert color="failure" onDismiss={onDismiss}>
          <span>
            <p>
              <span className="font-medium">Can't delete yet! </span>
              Please select at least one post to delete.
            </p>
          </span>
        </Alert>
      )}

      <Modal show={showModal} onClose={onClose} dismissible>
        <Modal.Header>
          <h2>Delete</h2>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this post?</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={onClose}
            className="flex h-auto w-auto rounded-md border-2 border-solid border-black bg-black text-center text-white hover:bg-white hover:text-black"
          >
            <p className="p-3">Cancel</p>
          </button>
          <button
            onClick={HandleDeleteClick}
            className="flex h-auto w-auto rounded-md border-2 border-solid border-red-600 bg-red-500 text-center hover:bg-white"
          >
            <p className="p-3">Delete</p>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
