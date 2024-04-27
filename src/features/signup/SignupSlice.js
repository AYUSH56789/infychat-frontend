import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const userSignup = createAsyncThunk('userSignup', async (formdata,chatId) => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/signup`, {
        method: 'POST',
        credentials: 'include',
        body: {formdata,chatId}
    })
    const data = await res.json();
    return data;
})
export const otpVerify = createAsyncThunk('otpVerify', async (otp) => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/signup/verify-user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ otp:otp })
    })
    const data = await res.json();
    return data;
})
const initialState = {
    signupOtp: false,
    signStatus: false,
    isLoading: false,
    error: "",
}

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(userSignup.pending, (state) => {
                state.signupOtp = false,
                state.signStatus = false;
                state.isLoading = true;
                state.error = "";
        })
        builder.addCase(userSignup.fulfilled, (state, action) => {
            if(action.payload.success===false){
                state.signupOtp = false;
                state.signStatus = false;
                state.isLoading = false;
                state.error = action.payload.message;
            }else{
                state.signupOtp = true;
                state.signStatus = false;
                state.isLoading = false;
                state.error = action.payload.message;
            }
        })
        builder.addCase(userSignup.rejected, (state, action) => {
                state.signupOtp = false;
                state.signStatus = false;
                state.isLoading = false;
                state.error = action.payload.message;
        })
        builder.addCase(otpVerify.pending, (state) => {
                state.signupOtp = true,
                state.signStatus = false;
                state.isLoading = true;
                state.error = "";
        })
        builder.addCase(otpVerify.fulfilled, (state, action) => {
            if(action.payload.success===false){
                state.signupOtp = true;
                state.signStatus = false;
                state.isLoading = false;
                state.error = action.payload.message;
            }else{
                state.signupOtp = false;
                state.signStatus = true;
                state.isLoading = false;
                state.error = action.payload.message;
            }
        })
        builder.addCase(otpVerify.rejected, (state, action) => {
                state.signupOtp = true;
                state.signStatus = false;
                state.isLoading = false;
                state.error = action.payload.message;
        })
    }
})

export default signupSlice.reducer;