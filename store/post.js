import { create } from 'zustand'
import { toast } from 'react-hot-toast'
import apiClient from '@/service/apiClient'

export const usePostStore = create((set, get) => ({
  list: [],
  listActive:[],
  post: {},
  isLoading: false,
  isError: null,

  readAll: () => {
    if (get().list.length) return get().list

    set(() => ({ isLoading: true }))

    return apiClient
      .get('/post/readAll')
      .then((response) => {
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
      })
  },

    readAllActive: () => {
    if (get().listActive.length) return get().listActive

    set(() => ({ isLoading: true }))

    return apiClient
      .get('/post/readAllActive')
      .then((response) => {
        set(() => ({ listActive: response.data }))
      })
      .catch((error) => {
        set(() => ({ isError: error }))
        toast.error(error.toString(), { duration: 10000 })
      })
      .finally(() => {
        set(() => ({ isLoading: false }))
      })
  },
}))
