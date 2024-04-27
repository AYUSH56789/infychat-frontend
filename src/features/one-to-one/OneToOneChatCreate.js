import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// call api to create none to one chat
export const createOneToOneChatApi=createAsyncThunk('createOneToOneChatApi',async(Datta)=>{
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat/create-oneToOneChat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body:JSON.stringify(Datta)
    });
    const data = res.json();
    return data;

})

// inititlaise state
const  initialState = {
    isLoading:false,
    message:""
}

// create slice
const OneToOneChatCreate=createSlice({
    name:"OneToOneChat",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(createOneToOneChatApi.pending ,(state,action)=>{
            state.isLoading=true
            state.message=""
        })
        builder.addCase(createOneToOneChatApi.fulfilled ,(state,action)=>{
            if(action.payload.success===true){
                state.isLoading=false
                state.message=action.payload.message
            }else{
                state.isLoading=false
                state.message=action.payload.message
            }
        })
        builder.addCase(createOneToOneChatApi.rejected ,(state,action)=>{
            state.isLoading=false
            state.message=""
        })
    }
})
export default OneToOneChatCreate.reducer;