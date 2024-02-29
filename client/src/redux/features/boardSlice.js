import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: [] }
/**
 * Normalize a port into a number, string, or false.
 */
export const boardSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setBoards } = boardSlice.actions

export default boardSlice.reducer
