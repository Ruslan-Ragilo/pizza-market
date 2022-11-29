import { configureStore } from '@reduxjs/toolkit'

import sortReducer from './slices/sortSlice'
import categoriesReducer from './slices/categoriesSlice'
import searchReducer from './slices/searchSlice'

export const store = configureStore({
  reducer: {
    sortReducer,
    categoriesReducer,
    searchReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
