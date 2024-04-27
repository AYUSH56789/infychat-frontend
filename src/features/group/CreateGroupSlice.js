import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// call api to create group chat
export const createGroupApi=createAsyncThunk('createGroupApi',async(formatedData)=>{
    const res=await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat/create-group`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body:JSON.stringify(formatedData)
    });
    const data = res.json();
    return data;
})

// another api

// initialstate
const initialState={
    isLoading:false,
    data:null,
    message:""
}

const CreateGroupSlice=createSlice({
    name:'create group',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(createGroupApi.pending ,(state,action)=>{
            state.isLoading = true
            state.data = null
            state.message = ''
    })
        builder.addCase(createGroupApi.fulfilled ,(state,action)=>{
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
        builder.addCase(createGroupApi.rejected ,(state,action)=>{
            state.isLoading = false
            state.data = null
            state.message=action.payload.message
        })
    }
})

export default CreateGroupSlice.reducer;