import { configureStore } from '@reduxjs/toolkit'
import userStatusSliceReducer from './userStatusSlice'
export const store= configureStore({
    reducer: userStatusSliceReducer
})