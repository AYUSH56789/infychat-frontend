import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// call api ->http://localhost:3000/api/v1/chat/delete-chat
export const deleteChatApi=createAsyncThunk('deleteChatApi',async(chat)=>{
    console.log("CHAT",chat);
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat/delete-chat`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({chatId:chat.chatId}),
    });
    const data = await res.json();
    return data;
})


// initiase state
const initialState = {
    isLoading: false,
    message:"",
    isChatDelete:false,
}

const ChatSlice=createSlice({
    name:"chat",
    initialState,
    extraReducers:(builder) => {
            builder.addCase(deleteChatApi.pending, (state, action) => {
                state.isLoading = true;
                state.isChatDelete=false;
                state.message = '';
            });
            builder.addCase(deleteChatApi.fulfilled, (state, action) => {
                const { success, message } = action.payload;
                if (success) {
                    state.isLoading = false;
                    state.isChatDelete=true
                    state.message = message;
                } else {
                    state.isLoading = false;
                    state.isChatDelete=false
                    state.message = message;
                }
            });
            builder.addCase(deleteChatApi.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.isChatDelete=false
                state.message = action.payload.message || "somthing went wrong.";
            });
        }
});

export default  ChatSlice.reducer;