import { createSlice } from '@reduxjs/toolkit'
const initialState={
    userStatus:{
        loggedIn:false,
        userName:'',
        userEmail:''
    }
    
}
export const userStatusSlice=createSlice({
    name:'userStatus',
    initialState,
    reducers: {
        login: (state,action)=>{
            state.userStatus.loggedIn=true,
            state.userStatus.userEmail=action.payload.userEmail
            state.userStatus.userName=action.payload.userName
        },
        logout: (state)=>{
            state.loggedIn=false
            state.userEmail=''
            state.userName=''
        }
    }
})
export default userStatusSlice.reducer
export const {login,logout} = userStatusSlice.actions