import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CategoriesState {
  value: string
  activeIndex: number
}

const initialState: CategoriesState = {
  value: 'все',
  activeIndex: 0,
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategoriesData: (state, action: PayloadAction<CategoriesState>) => {
      return (state = action.payload)
    },
  },
})

export const { setCategoriesData } = categoriesSlice.actions

export default categoriesSlice.reducer
