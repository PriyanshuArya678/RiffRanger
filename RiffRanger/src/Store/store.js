import { configureStore } from '@reduxjs/toolkit'
import commentsSliceReducer from './commentsSlice'
import userStatusSliceReducer from './userStatusSlice'
export const store= configureStore({
    reducer: {
        userStatus:userStatusSliceReducer,
        commentStatus:commentsSliceReducer
    }
})