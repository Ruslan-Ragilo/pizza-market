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
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload
    },
    setCategories: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setActiveIndex, setCategories } = categoriesSlice.actions

export default categoriesSlice.reducer
