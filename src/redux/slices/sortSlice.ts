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
    setSortData: (state, action: PayloadAction<SortState>) => {
      return (state = { ...action.payload })
    },
  },
})

export const { setSortData } = sortSlice.actions

export default sortSlice.reducer
