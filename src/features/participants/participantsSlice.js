import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// call api to get all participant of the api
            export const  chatParticipantsList = createAsyncThunk('chatParticipantsList',async()=>{
            const res= await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat/participant`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            })
                const data=await res.json();
                return  data;
            });

// export const chatParticipantsList = createAsyncThunk('chatParticipantsList', async () => {
//     console.log("Fetching:", `${import.meta.env.VITE_HOST_URL}/api/v1/chat/participant`);
//     console.log("Options:", {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         credentials: 'include',
//     });

//     const res = await fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/chat/participant`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         credentials: 'include',
//     });
//     const data = await res.json();
//     return data;
// });


const  initialState={
    isLoading:false,
    participantList:[],
    message:'',
}
const chatParticipantsListSlice = createSlice({
    name: "chatParticipantsList",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(chatParticipantsList.pending,(state,action)=>{
            state.isLoading=true;
            state.participantList=[];
            state.message='';
        })
        builder.addCase(chatParticipantsList.fulfilled,(state,action)=>{
            if(action.payload.success===false){
            state.isLoading=false;
            state.participantList=[];
            state.message=action.payload.message;
        }
        else{
            state.isLoading=false;
            state.participantList=action.payload.participantData;
            state.message=action.payload.message;
        }
        })
        builder.addCase(chatParticipantsList.rejected,(state,action)=>{
            state.isLoading=false;
            state.participantList=[];
            state.message=action.errorMessage||"Something went wrong!";
        })
    }
})

export default chatParticipantsListSlice.reducer;