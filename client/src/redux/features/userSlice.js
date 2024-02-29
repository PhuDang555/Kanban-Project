import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: {} }
/**
 * Normalize a port into a number, string, or false.
 */
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
