import React from 'react';
import './MainRightDashboard.css'
import Header from './header/Header';
import SearchBox from './searchbox/SearchBox';
import User from './user/User';
import ChatBot from './chatbot/ChatBot';
import { useDispatch, useSelector } from 'react-redux';
import { getChatMessage } from '../../../features/message/MessageSlice';
import { toast } from 'react-toastify';

export default function MainRightDashboard() {
  const dispatch=useDispatch()
  const mode = useSelector(state => state.theme);
  const { participantList, isLoading } = useSelector(state => state.participantsList);
  console.log("[articipant",participantList,participantList.length)

  const handleClick = (user) => {
    console.log('Clicked on user:', user);
    // Handle the click event as needed, such as opening a chat window or navigating to a user's profile page
  };

  

  return (
    <div id='MainRightDashboard'>
      <div style={{
        borderRadius:'10px',
    background: "white",
    zIndex: "1",
    position: "sticky",
    top: "0",
}}>
      <Header />
      </div>
      {
        participantList.length!==0?( participantList.map((user) => (
          <>
          <div key={user._id} >
            {
                <User name={user.name} lastMsg={user.lastMessage?user.lastMessage:"No Messages"} photo={user.photo} chatType={user.chatType} chatId={user._id}/> 
            }
      </div >
      <hr id='hrUserStyle' style={{opacity: mode.dark ?'1':"0.2"}} />
      </>
        ))):<div id='rightDashBoardDefault' className={mode.dark ? " dark-rightDashBoardDefault" : ""}>No Participants...</div>
      }
      <ChatBot />
    </div>
  );
}
