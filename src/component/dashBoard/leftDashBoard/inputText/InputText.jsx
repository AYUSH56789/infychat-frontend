import React, { useState } from 'react';
import './InputText.css';
import FileAttachment from '../../../icon/FileAttachment'
import Emojes from '../../../icon/Emojes'
import Send from '../../../icon/Send';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../../../formItem/IconButton';
import { setIsEmojiSelectorModelOpen, setIsFileSelectorModelOpen } from '../../../../features/model/ModeSlice';
import FileSelectorModel from '../../../model/FileSelectorModel';
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import Close from '../../../icon/Close';
import { getSocket } from '../../../../utils/SocketIo';

export default function InputText({message, setMessage, handleSendMessage,handleOnChangeText,}) {
  const socket=getSocket();
  const dispatch = useDispatch()
  
  const mode = useSelector(state => state.theme)
 
  const { isFileSelectorModelOpen, isEmojiSelectorModelOpen } = useSelector(state => state.model)

  // const handleOnChangeText = (event) => {
  //   console.log("typing")
  //   setMessage(event.target.value);
  //   socket.emit( "typing", {chat} )
  // }

  

  const handleEmojiSelect = (emoji) => {
    setMessage(prevText => prevText + emoji.native);
  }


  return (
    <form id="inputText" onSubmit={(event)=>handleSendMessage(event,{type:"text"})}>
      <div onClick={() => dispatch(setIsFileSelectorModelOpen())}>
        <FileAttachment size={25} color={"#ba9ffb"} />
      </div>
      {isFileSelectorModelOpen && <FileSelectorModel handleSendMessage={handleSendMessage} />}
      <div onClick={() => dispatch(setIsEmojiSelectorModelOpen())}>
        {isEmojiSelectorModelOpen ? <Close size={25} color={'#ba9ffb'} /> : <Emojes size={25} color={'#ba9ffb'} />}
      </div>
      {isEmojiSelectorModelOpen && <div id='outerContainerPicker' onClick={() => { dispatch(setIsEmojiSelectorModelOpen()) }}>
        <div className='emojiContainer'>
          <Picker data={data} previewPosition='none' onEmojiSelect={handleEmojiSelect} />
        </div>
      </div>}

      <hr id='hrInputText' />
      <input className={mode.dark ? "darkMode-searchInputText" : ""} type='text' name="chatText" id='chatInput' placeholder='Type a message' value={message} onChange={handleOnChangeText} />
      <IconButton type={"submit"} value={<Send size={18} />} padding={"7px 1px"} margin={'5px'} bgColor={"#ba9ffb"} color={"#ffffff"} />
    </form>
  )
}
