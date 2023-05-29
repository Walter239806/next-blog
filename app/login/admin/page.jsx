'use client'
import { useAuth } from '@/context/session'
import { usePostStore } from '@/store/post'
import { useRouter } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'
import DataTable from '../../components/dataTable'

export default function AdminLogin() {
  const [searchValue, setSearchValue] = useState('')
  const [dataFiltered, setDataFiltered] = useState([])
  const router = useRouter()

  const { session } = useAuth()
  const { list, isLoading, readAll } = usePostStore()

  const rowClick = (row) => {
    router.push(`/post/${row}`)
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
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <DataTable columns={columns} data={dataFiltered} rowClick={rowClick} />
      </div>
    )
  }

  useEffect(() => {
    readAll()
  }, [session])

  useEffect(() => {
    if (searchValue.length >= 3) {
      return setDataFiltered(
        list.filter((i) => i.title.toLowerCase() === searchValue.toLowerCase())
      )
    }
    setDataFiltered(list)
  }, [searchValue, list])

  return (
    <>{isLoading ? <h1>Loading...</h1> : session?.state ? <Table /> : <h1>Not authorized</h1>}</>
  )
}
