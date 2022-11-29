import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SortState {
  name: string
  sort: string
}

const initialState: SortState = {
  name: 'по популярности (по возрастанию)',
  sort: 'rating',
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setOrderSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    },
  },
})

export const { setSort, setOrderSort } = sortSlice.actions

export default sortSlice.reducer
