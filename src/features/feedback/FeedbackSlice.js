import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const feedback=createAsyncThunk('feedback',async({feedbackusername,feedbackuseremail,feedbackusernumber,feedbackusermessage})=>{
    const res=await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/feedback`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ feedbackUserName:feedbackusername,feedbackUseremail:feedbackuseremail,feedbackUserMobileNumber:feedbackusernumber,feedbackMessage:feedbackusermessage })
    });
    const data=await res.json();
    return data;
})

const initialState={
    isLoading:false,
}
const feedbackSlice=createSlice({
    name:'feedback',
    initialState,
    extraReducers:(buider)=>{
        buider.addCase(feedback.pending,(state,action)=>{
            state.isLoading=true;
        })
        buider.addCase(feedback.fulfilled,(state,action)=>{
            state.isLoading=false;            
        })
        buider.addCase(feedback.rejected,(state,action)=>{
            state.isLoading=false;            
        })
    }
})

export default  feedbackSlice.reducer;