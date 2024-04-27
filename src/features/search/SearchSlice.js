import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// api to search user
 export const searchUserApi=createAsyncThunk('searchUser',async (name)=>{
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat/search-user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    const data = res.json();
    return data;
 })
// api to search friend
 export const searchAllUser=createAsyncThunk('searchAllUser',async ()=>{
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat/search-all-user`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        // body: JSON.stringify({ name: name })
    });
    const data = res.json();
    return data;
 })
// initialize
const initialState={
    isLoading:false,
    data:null,
    message:""
}

const SearchSlice=createSlice({
    name:"search",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(searchUserApi.pending,(state,action)=>{
            state.isLoading=true
            state.data=null
            state.message=""
        })
        builder.addCase(searchUserApi.fulfilled,(state,action)=>{
            if(action.payload.success===true){
                state.isLoading=false
                state.data=action.payload.data
                state.message=action.payload.message
            }else{
                state.isLoading=false
                state.data=null
                state.message=action.payload.message
            }
        })
        builder.addCase(searchUserApi.rejected,(state,action)=>{
            state.isLoading=false
            state.data=null
            state.message=action.payload.message
        })
        builder.addCase(searchAllUser.pending,(state,action)=>{
            state.isLoading=true
            state.data=null
            state.message=""
        })
        builder.addCase(searchAllUser.fulfilled,(state,action)=>{
            if(action.payload.success===true){
                state.isLoading=false
                state.data=action.payload.data
                state.message=action.payload.message
            }else{
                state.isLoading=false
                state.data=null
                state.message=action.payload.message
            }
        })
        builder.addCase(searchAllUser.rejected,(state,action)=>{
            state.isLoading=false
            state.data=null
            state.message=action.payload.message
        })
    }
})

export default SearchSlice.reducer;
