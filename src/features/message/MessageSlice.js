import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// api call get chat
export const getChatMessage = createAsyncThunk('getChatMessage', async (jsonData) => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat/get-message`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(jsonData)
    });
    const data = await res.json();
    return data;
});
// api call get chat
export const getMoreChatMessage = createAsyncThunk('getMoreChatMessage', async (jsonData) => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat/get-message`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(jsonData)
    });
    const data = await res.json();
    return data;
});

// api call to schedule chat
export const scheduleChatApi = createAsyncThunk('scheduleChatApi', async (jsonData) => {
    // log("data send successfull" ,jsonData)
    // return true;
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat//msg-schedule`, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         credentials: 'include',
         body: JSON.stringify(jsonData)
     });
     const data = await res.json();
     return data;
});

// api call to send file
export const sendAttachmentsApi = createAsyncThunk('sendAttachmentsApi', async ({ formData }) => {
    console.log(Object.fromEntries(formData),"working reach");
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat/send-attachments`, {
         method: 'POST',
         credentials: 'include',
         body: formData,
     });
     const data = await res.json();
     return data;
});

// Initialize state
const initialState = {
    chatHeaderName:null,
    chatHeaderPhoto:null,
    isLoading: false,
    showChatContainer:false,
    allChatMessage: [],
    tempMessage:[],
    message: '',
    fullMsg:[]
};

const messageSlice = createSlice({
    name: "chatMessage",
    initialState,
    reducers:{
        setChatHeader:(state,action)=>{
            state.chatHeaderName= action.payload.name
            state.chatHeaderPhoto= action.payload.photo
        },
        setShowChatContainer:(state,action)=>{
            state.showChatContainer=false
        }, 
        setTempMessage:(state,action)=>{
            if(action.payload){
            state.tempMessage.unshift(action.payload);
        }
        else{
                state.tempMessage=[];
            }
        }, 
        setFullMsg:(state,action)=>{
            if(action.payload){
            state.tempMessage.push(action.payload);
        }
        else{
                state.tempMessage=[];
            }
        }, 

    },
    extraReducers: (builder) => {
        builder.addCase(getChatMessage.pending, (state, action) => {
            state.isLoading = true;
            state.showChatContainer=false
            state.allChatMessage =null;
            state.message = '';
        });
        builder.addCase(getChatMessage.fulfilled, (state, action) => {
            const { success, data, message } = action.payload;
            console.log("sd",data);
            if (success) {
                state.isLoading = false;
                state.showChatContainer=true
                state.allChatMessage=data; // Assign the data directly
                state.message = message;
            } else {
                state.isLoading = false;
                state.showChatContainer=false
                state.allChatMessage = null;
                state.message = message;
            }
        });
        builder.addCase(getChatMessage.rejected, (state, action) => {
            state.isLoading = false;
            state.showChatContainer=false
            state.allChatMessage = null;
            state.message = action.payload.message;
        });
        builder.addCase(getMoreChatMessage.pending, (state, action) => {
        });
        builder.addCase(getMoreChatMessage.fulfilled, (state, action) => {
            const { success, data, message } = action.payload;
            console.log("sd",data);
            if (success) {                
                state.allChatMessage.chatMessages.push(...data.chatMessages); // Assign the data directly
                state.message = message;
            } else {
                state.message = message;
            }
        });
        builder.addCase(getMoreChatMessage.rejected, (state, action) => {
           state.message = action.payload.message;
        });
    }
});

export const { setChatHeader,setShowChatContainer,setTempMessage ,setFullMsg} = messageSlice.actions
export default messageSlice.reducer;














































// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // api call get chat
// export const getChatMessage = createAsyncThunk('getChatMessage', async (jsonData) => {
//     const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat/get-message`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         credentials: 'include',
//         body: JSON.stringify(jsonData)
//     });
//     const data = await res.json();
//     return data;
// });

// // Initialize state
// const initialState = {
//     chatHeaderName:null,
//     chatHeaderPhoto:null,
//     isLoading: false,
//     showChatContainer:false,
//     allChatMessage: [],
//     tempMessage:[],
//     message: '',
//     fullMsg:[]
// };

// const messageSlice = createSlice({
//     name: "chatMessage",
//     initialState,
//     reducers:{
//         setChatHeader:(state,action)=>{
//             state.chatHeaderName= action.payload.name
//             state.chatHeaderPhoto= action.payload.photo
//         },
//         setShowChatContainer:(state,action)=>{
//             state.showChatContainer=false
//         }, 
//         setTempMessage:(state,action)=>{
//             if(action.payload){
//             state.tempMessage.unshift(action.payload);
//         }
//         else{
//                 state.tempMessage=[];
//             }
//         }, 
//         setFullMsg:(state,action)=>{
//             if(action.payload){
//             state.tempMessage.push(action.payload);
//         }
//         else{
//                 state.tempMessage=[];
//             }
//         }, 

//     },
//     extraReducers: (builder) => {
//         builder.addCase(getChatMessage.pending, (state, action) => {
//             state.isLoading = true;
//             state.showChatContainer=false
//             state.allChatMessage =null;
//             state.message = '';
//         });
//         builder.addCase(getChatMessage.fulfilled, (state, action) => {
//             const { success, data, message } = action.payload;
//             console.log("sd",data);
//             if (success) {
//                 state.isLoading = false;
//                 state.showChatContainer=true
//                 state.allChatMessage=data; // Assign the data directly
//                 state.message = message;
//             } else {
//                 state.isLoading = false;
//                 state.showChatContainer=false
//                 state.allChatMessage = null;
//                 state.message = message;
//             }
//         });
//         builder.addCase(getChatMessage.rejected, (state, action) => {
//             state.isLoading = false;
//             state.showChatContainer=false
//             state.allChatMessage = null;
//             state.message = action.payload.message;
//         });
//     }
// });

// export const { setChatHeader,setShowChatContainer,setTempMessage ,setFullMsg} = messageSlice.actions
// export default messageSlice.reducer;

