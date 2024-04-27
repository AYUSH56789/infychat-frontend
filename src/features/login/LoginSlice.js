import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// pending:issues
export const loginUser = createAsyncThunk('loginUser', async ({ email, password }) => {
    const response = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
    })
    const data = await response.json();
    return data;
})
export const logoutUser = createAsyncThunk('logoutUser', async () => {
    const response = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({})
    })
    const data = await response.json();
    return data;
})

const initialState = {
    isLogout: true,
    isLogin: false,// temp->true
    isLoading: false,
    message: "",
    data: "",
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers: (builer) => {
        builer.addCase(loginUser.pending, (state, action) => {
            console.log(action)
            state.isLogout = true;
            state.isLogin = false;
            state.isLoading = true;
            state.message = '';
            state.data = "";
        })
        builer.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload.success === false) {
                console.log(action)
                state.isLogout = true;
                state.isLogin = false;
                state.isLoading = false;
                state.message = action.payload.message || 'server error';
                state.data = ""
            }
            else {
                console.log(action)
                state.isLogout = false;
                state.isLogin = true;
                state.isLoading = false;
                state.message = action.payload.message || 'server error';
                state.data = action.payload.data

            }
        })
        builer.addCase(loginUser.rejected, (state, action) => {
            console.log(action)
            state.isLogout = true;
            state.isLogin = false;
            state.isLoading = false;
            state.message = 'server error'
            state.data = ""
        })
        builer.addCase(logoutUser.pending, (state, action) => {
            console.log(action)
            state.isLogout = false;
            state.isLogin = true;
            state.isLoading = true;
            state.message = '';
            state.data = "";
        })
        builer.addCase(logoutUser.fulfilled, (state, action) => {
            if (action.payload.success === false) {
                console.log(action)
                state.isLogout = false;
                state.isLogin = true;
                state.isLoading = false;
                state.message = action.payload.message || 'server error';
                state.data = ""
            }
            else {
                console.log(action)
                state.isLogout = true;
                state.isLogin = false;
                state.isLoading = false;
                state.message = action.payload.message || 'server error';
                state.data = ""

            }
        })
        builer.addCase(logoutUser.rejected, (state, action) => {
            console.log(action)
            state.isLogout = false;
            state.isLogin = true;
            state.isLoading = false;
            state.message = 'server error'
            state.data = ""
        })
    }
})
export default loginSlice.reducer;