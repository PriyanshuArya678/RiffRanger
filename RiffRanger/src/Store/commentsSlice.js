import { createSlice } from '@reduxjs/toolkit'
const initialState={
    comments:[]
}
export const commentSlice= createSlice({
    name:'comment',
    initialState,
    reducers: {
        push: (state,action)=>{
            const comment={
                userName:action.payload.userName,
                comment:action.payload.comment,
                date:action.payload.date
            }
            state.comments.push(comment)
        },
        cleanup: (state,action)=>{
            state.comments.length=0
        }
    }
})
export const {push,cleanup} = commentSlice.actions
export default commentSlice.reducer