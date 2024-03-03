import { createSlice } from '@reduxjs/toolkit'

export const fullWidthSlice = createSlice({
  name: 'fullWidth',
  initialState: false,
  reducers: {
    toggleWidth: (state) => {
      return !state
    },
  },
})

export const { toggleWidth } = fullWidthSlice.actions

export default fullWidthSlice.reducer