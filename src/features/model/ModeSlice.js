import { createSlice } from "@reduxjs/toolkit"; 

// initialise state
const initialState={
    isSearchModalOpen:false,
    isGroupModalOpen:false,
    isProfileModalOpen:false,
    isFriendProfileModelOpen:false,
    isGroupProfileModelOpen:false,
    isScheduleMessageModelOpen:false,
    isVideoCallModelOpen:false,
    isVoiceCallModelOpen:false,
    isFileSelectorModelOpen:false,
    isEmojiSelectorModelOpen:false,
}

export const ModelSlice=createSlice({
    name:'model',
    initialState,
    reducers:{
        setIsSearchModalOpen:(state,action)=>{
            state.isSearchModalOpen=!state.isSearchModalOpen
        },
        setIsGroupModalOpen:(state,action)=>{
            state.isGroupModalOpen=!state.isGroupModalOpen
        },
        setIsProfileModalOpen:(state,action)=>{
            state.isProfileModalOpen=!state.isProfileModalOpen
        },
        setIsFriendProfileModelOpen:(state,action)=>{
            state.isFriendProfileModelOpen=!state.isFriendProfileModelOpen
        },
        setIsGroupProfileModelOpen:(state,action)=>{
            state.isGroupProfileModelOpen=!state.isGroupProfileModelOpen
        },
        setIsScheduleMessageModelOpen:(state,action)=>{
            state.isScheduleMessageModelOpen=!state.isScheduleMessageModelOpen
        },
        setIsVideoCallModelOpen:(state,action)=>{
            state.isVideoCallModelOpen=!state.isVideoCallModelOpen
        },
        setIsVoiceCallModelOpen:(state,action)=>{
            state.isVoiceCallModelOpen=!state.isVoiceCallModelOpen
        },
        setIsFileSelectorModelOpen:(state,action)=>{
            state.isFileSelectorModelOpen=!state.isFileSelectorModelOpen
        },
        setIsEmojiSelectorModelOpen:(state,action)=>{
            state.isEmojiSelectorModelOpen=!state.isEmojiSelectorModelOpen
        },
    }
})

export const { setIsSearchModalOpen,setIsGroupModalOpen,setIsProfileModalOpen,setIsFriendProfileModelOpen, setIsGroupProfileModelOpen ,setIsScheduleMessageModelOpen,setIsVideoCallModelOpen,setIsVoiceCallModelOpen,setIsFileSelectorModelOpen,setIsEmojiSelectorModelOpen} = ModelSlice.actions

export default ModelSlice.reducer;