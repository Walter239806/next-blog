'use client'
import { useAuth } from '@/context/session'
import { usePostStore } from '@/store/post'
import { useRouter } from 'next/navigation'
import React, { useEffect, useMemo, useState, useRef } from 'react'
import DataTable from '../../components/dataTable'
import ModalComponent from '@/app/components/modal'
import handleSubmit from '@/hooks/useSubmit'

export default function AdminLogin() {
  const [dataFiltered, setDataFiltered] = useState([])
  const search = useRef('')
  const router = useRouter()

  const { session } = useAuth()
  const { list, isLoading, readAll } = usePostStore()

  const rowClick = (row) => {
    router.push(`/post/${row}`)
  }

  const updateClick = (row) => {
    router.push(`/login/admin/${row}`)
  }

  const onSearch = (e) => {
    search.current = e.target.value
  }

  const columns = useMemo(
    () => [
      {
        Header: 'Post',
        columns: [
          {
            Header: 'ID',
            accessor: '_id',
          },
          {
            Header: 'Title',
            accessor: 'title',
          },
          {
            Header: 'Author',
            accessor: 'author',
          },
          {
            Header: 'Created At',
            accessor: 'createdAt',
          },
        ],
      },
    ],
    []
  )
  const Table = () => {
    return (
      <div className="my-32 flex flex-col place-content-center items-center">
        <input
          className="w-96 border px-4 py-3 selection:bg-fuchsia-300 hover:shadow-lg focus:shadow-lg focus:outline-none "
          placeholder="Search By Title"
          type="text"
          ref={search}
          onChange={onSearch}
        />
        <DataTable
          columns={columns}
          data={dataFiltered}
          rowClick={rowClick}
          updateClick={updateClick}
        />
      </div>
    )
  }

  useEffect(() => {
    readAll()
  }, [session])

  useEffect(() => {
    if (search.current.length >= 3) {
      setDataFiltered(
        list.filter((i) => i.title.toLowerCase().includes(search.current.toLowerCase()))
      )
    } else {
      setDataFiltered(list)
    }
  }, [list, search.current])

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : session?.state ? (
        <>
          {' '}
          <Table /> <ModalComponent handleSubmit={handleSubmit} />
        </>
      ) : (
        <h1>Not authorized</h1>
      )}
    </>
  )
}
