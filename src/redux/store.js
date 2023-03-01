import { configureStore } from '@reduxjs/toolkit'
import pagination from './slices/paginationSlice'
import favorites from './slices/favoritesSlice'
import user from './slices/userSlice'

export const store = configureStore({
  reducer: {
    pagination,
    favorites,
    user,
  },
})
