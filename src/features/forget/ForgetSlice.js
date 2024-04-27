import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// action to check user
export const checkUser = createAsyncThunk('checkUser', async (email) => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/forget/check-user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email: email })
    });
    const data = await res.json();
    return data;
})
// action to verify user
export const verifyUser = createAsyncThunk('verifyUser', async (otp) => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/forget/verify-user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ otp: otp })
    });
    const data = res.json();
    return data;

})
//  action to forget user password
export const forgetUser = createAsyncThunk('forgetUser', async (newPassword) => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/forget-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ newPassword: newPassword })
    });
    const data = res.json();
    return data;
})

//  initialise our state
const initialState = {
    isUserFound: false,
    isUserVerify: false,
    isUserForget: false,
    isLoading: false,
    message: ''
}

// create slice
const ForgetSlice = createSlice({
    name: 'forget-password',
    initialState,
    extraReducers: (builder) => {

        builder.addCase(checkUser.pending, (state, action) => {
                state.isUserFound = false,
                state.isUserVerify = false,
                state.isUserForget = false,
                state.isLoading = true
                state.message = ''
        })
        builder.addCase(checkUser.fulfilled, (state, action) => {
            if (action.payload.success === true) {
                state.isUserFound = true,
                    state.isUserVerify = false,
                    state.isUserForget = false,
                    state.isLoading = false
                state.message = action.payload.message
            }
            else {
                state.isUserFound = false,
                    state.isUserVerify = false,
                    state.isUserForget = false,
                    state.isLoading = false
                state.message = action.payload.message
            }
        })
        builder.addCase(checkUser.rejected, (state, action) => {
            console.log(action);
            state.isUserFound = false,
                state.isUserVerify = false,
                state.isUserForget = false,
                state.isLoading = false
            state.message = action.payload.message || 'server error'
        })


        builder.addCase(verifyUser.pending, (state, action) => {
            state.isUserFound = true,
                state.isUserVerify = false,
                state.isUserForget = false,
                state.isLoading = true
            state.message = ''
        })
        builder.addCase(verifyUser.fulfilled, (state, action) => {
            if (action.payload.success === true) {
                state.isUserFound = true,
                    state.isUserVerify = true,
                    state.isUserForget = false,
                    state.isLoading = false
                state.message = action.payload.message
            }
            else {
                state.isUserFound = true,
                    state.isUserVerify = false,
                    state.isUserForget = false,
                    state.isLoading = false
                state.message = action.payload.message
            }
        })
        builder.addCase(verifyUser.rejected, (state, action) => {
            state.isUserFound = true,
                state.isUserVerify = false,
                state.isUserForget = false,
                state.isLoading = false
            state.message = action.payload.message || 'server error'

        })


        builder.addCase(forgetUser.pending, (state, action) => {
            state.isUserFound = true,
                state.isUserVerify = true,
                state.isUserForget = false,
                state.isLoading = true
            state.message = ''
        })
        builder.addCase(forgetUser.fulfilled, (state, action) => {
            if (action.payload.success === true) {
                    state.isUserFound = false,
                    state.isUserVerify = false,
                    state.isUserForget = false,
                    state.isLoading = false
                    state.message = action.payload.message
            }
            else {
                state.isUserFound = false,
                    state.isUserVerify = false,
                    state.isUserForget = false,
                    state.isLoading = false
                state.message = action.payload.message
            }
        })
        builder.addCase(forgetUser.rejected, (state, action) => {
            state.isUserFound = false,
                state.isUserVerify = false,
                state.isUserForget = false,
                state.isLoading = false
            state.message = action.payload.message || 'server error'
        })
    }
})

export default ForgetSlice.reducer;
