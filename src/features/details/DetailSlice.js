import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// get user details api
export const getUserDetailsApi = createAsyncThunk('getUserDetailsApi', async () => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat/user-details`, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    const data = res.json();
    return data;

})
// get friend details api
export const getFriendDetailsApi = createAsyncThunk('getFriendDetailsApi', async (chatId = "") => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat/friend-details`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(chatId)
    });
    const data = res.json();
    return data;

})
// get chat details api
export const getGroupDetailsApi = createAsyncThunk('getGroupDetailsApi', async (chatId) => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat/group-details`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(chatId)
    });
    const data = res.json();
    return data;

});
// get chat details api
export const getChatDetailsApi = createAsyncThunk('getChatDetailsApi', async (chatId) => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat/chat-details`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(chatId)
    });
    const data = res.json();
    return data;

});

// initialstate
const initialState = {
    isLoading: false,
    udata: null,
    fdata: null,
    gdata: null,
    chatData:null,
    message: ''
}

// create slice
const DetailSlice = createSlice({
    name: 'details',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUserDetailsApi.pending, (state, action) => {
            state.isLoading = true
            state.udata = null
            state.message = ""
        })
        builder.addCase(getUserDetailsApi.fulfilled, (state, action) => {
            if (action.payload.success === true) {
                state.isLoading = false;
                state.udata = action.payload.data;
                state.message = action.payload.message || "somthing went wrong";
            }
            else {
                state.isLoading = false;
                state.udata = null;
                state.message = action.payload.message || "somthing went wrong";
            }
        })
        builder.addCase(getUserDetailsApi.rejected, (state, action) => {
            state.isLoading = false
            state.fdata = null
            state.message = action.payload.message || "somthing went wrong"
        })
        builder.addCase(getFriendDetailsApi.pending, (state, action) => {
            state.isLoading = true
            state.fdata = null
            state.message = ""
        })
        builder.addCase(getFriendDetailsApi.fulfilled, (state, action) => {
            if (action.payload.success === true) {
                state.isLoading = false;
                state.fdata = action.payload.data;
                state.message = action.payload.message || "somthing went wrong";
            }
            else {
                state.isLoading = false;
                state.fdata = null;
                state.message = action.payload.message || "somthing went wrong";
            }
        })
        builder.addCase(getFriendDetailsApi.rejected, (state, action) => {
            state.isLoading = false
            state.fdata = null
            state.message = action.payload.message || "somthing went wrong"
        })
        builder.addCase(getGroupDetailsApi.pending, (state, action) => {
            state.isLoading = true
            state.gdata = null
            state.message = ""
        })
        builder.addCase(getGroupDetailsApi.fulfilled, (state, action) => {
            if (action.payload.success === true) {
                state.isLoading = false;
                state.gdata = action.payload.data;
                state.message = action.payload.message || "somthing went wrong";
            }
            else {
                state.isLoading = false;
                state.gdata = null;
                state.message = action.payload.message || "somthing went wrong";
            }
        })
        builder.addCase(getGroupDetailsApi.rejected, (state, action) => {
            state.isLoading = false
            state.gdata = null
            state.message = action.payload.message || "somthing went wrong"
        })
        builder.addCase(getChatDetailsApi.pending, (state, action) => {
            state.isLoading = true
            state.chatData = null
            state.message = ""
        })
        builder.addCase(getChatDetailsApi.fulfilled, (state, action) => {
            if (action.payload.success === true) {
                state.isLoading = false;
                state.chatData = action.payload.data;
                state.message = action.payload.message || "somthing went wrong";
            }
            else {
                state.isLoading = false;
                state.chatData = null;
                state.message = action.payload.message || "somthing went wrong";
            }
        })
        builder.addCase(getChatDetailsApi.rejected, (state, action) => {
            state.isLoading = false
            state.chatData = null
            state.message = action.payload.message || "somthing went wrong"
        })
    }
})

export default DetailSlice.reducer;