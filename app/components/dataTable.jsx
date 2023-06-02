/* eslint-disable react/jsx-key */
import React from 'react'
import styled from 'styled-components'
import { useSortBy, useTable, useRowSelect } from 'react-table'
import '@fortawesome/fontawesome-free/css/all.min.css'
import CheckBox from './checkbox'

const Styles = styled.div`
  padding: 2rem;
  table {
    width: 56rem;
    height: 30rem;
    thead {
      --tw-bg-opacity: 0.8;
      background-color: rgb(107 114 128 / var(--tw-bg-opacity));
     
      user-select: none;
    }

    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }

      cursor: pointer;
    }

    th,
    td {
      text-align: center;
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #00000017;
      user-select: #f0abfc;

      :last-child {
        border-right: 0;
      }
    }

    td::selection {
        background: #f0abfc;
  }
`

const DataTable = ({ columns, data, rowClick, checkBox, updateClick }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, selectedFlatRows } =
    useTable(
      {
        columns,
        data,
        initialState: {
          hiddenColumns: ['_id'],
        },
      },
      useSortBy,
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((columns) => [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <CheckBox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => <CheckBox {...row.getToggleRowSelectedProps()} />,
          },
          ...columns,
          {
            Header: 'Update',
            Cell: ({ row }) => (
              <h1
                className="cursor-pointer text-black hover:text-fuchsia-300 hover:underline"
                onClick={() => {
                  sendUpdateClick(row.original._id)
                }}
              >
                View
              </h1>
            ),
          },
        ])
      }
    )

  const sendUpdateClick = (id) => {
    if (updateClick) {
      updateClick(id)
    }
  }

  const sendRowClick = (id) => {
    if (rowClick) {
      rowClick(id)
    }
  }

  return (
    <Styles>
      <table hover variant="dark" {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fa fa-arrow-up ml-1"></i>
                      ) : (
                        <i className="fa fa-arrow-down ml-1"></i>
                      )
                    ) : (
                      ''
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)

            return (
              <tr
                {...row.getRowProps()}
                // onClick={() => sendRowClick(row.original._id)}
              >
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        {JSON.stringify(
          {
            selectedFlatRows: selectedFlatRows.map((row) => row.original._id),
          },
          null,
          2
        )}
      </div>
    </Styles>
  )
}

export default DataTable
