import { configureStore } from "@reduxjs/toolkit"
import userReducer from './features/userSlice'
import boardReducer from './features/boardSlice'
import favouriteReducer from './features/favouriteSlice'
/**
 * Normalize a port into a number, string, or false.
 */
export const store = configureStore({
  reducer: {
    user: userReducer,
    board: boardReducer,
    favourites: favouriteReducer
  }
})
