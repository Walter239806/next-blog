import { create } from 'zustand'
import { toast } from 'react-hot-toast'
import apiClient from '@/service/apiClient'

export const usePostStore = create((set, get) => ({
  list: [],
  post: {},
  isLoading: false,
  isError: null,

  readAll: () => {
    if (get().list.length) return get().list

    set(() => ({ isLoading: true }))

    return apiClient
      .get('/post/readAll')
      .then((response) => {
        console.log(response.data)
        set(() => ({ list: response.data }))
      })
      .catch((error) => {
        set(() => ({ isError: error }))
        toast.error(error.toString(), { duration: 10000 })
      })
      .finally(() => {
        set(() => ({ isLoading: false }))
      })
  },

  readById: (_id) => {
    if (get().post._id === _id) return get().post
    set(() => ({ isLoading: true }))
    return apiClient
      .post('/post/readByID', { _id })
      .then((response) => {
        set(() => ({ post: response.data }))
      })
      .catch((error) => {
        toast.error(error.toString(), { duration: 10000 })
      })
      .finally(() => {
        set(() => ({ isLoading: false }))
        console.log(get().post)
      })
  },
}))
