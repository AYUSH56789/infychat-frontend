import { configureStore } from "@reduxjs/toolkit";
import loginSliceReducer from "../features/login/LoginSlice";
import signupSliceReducer from "../features/signup/SignupSlice"
import forgetSliceReducer from "../features/forget/ForgetSlice";
import themeSliceReducer from "../features/theme/themeSlice";
import feedbackSliceReducer from "../features/feedback/FeedbackSlice";
import MessageSliceReducer from "../features/message/MessageSlice";
import chatParticipantsListSliceReducer from '../features/participants/participantsSlice';
import SearchSliceReducer from "../features/search/SearchSlice";
import CreateGroupSliceReducer from "../features/group/CreateGroupSlice";
import OneToOneChatCreateReducer from "../features/one-to-one/OneToOneChatCreate";
import ModeSliceReducer from "../features/model/ModeSlice";
import DetailSliceReducer from "../features/details/DetailSlice";
import ChatSliceReducer from "../features/chat/ChatSlice";
const store=configureStore({
    reducer:{
        login:loginSliceReducer,
        signup:signupSliceReducer,
        forget:forgetSliceReducer,
        theme:themeSliceReducer,
        feedback:feedbackSliceReducer,
        chatMessage:MessageSliceReducer,
        participantsList:chatParticipantsListSliceReducer,
        searchUser:SearchSliceReducer,
        createGroup:CreateGroupSliceReducer,
        OneToOneChatCreate:OneToOneChatCreateReducer,
        model:ModeSliceReducer,
        details:DetailSliceReducer,
        chat:ChatSliceReducer,
    }
})

export default store;