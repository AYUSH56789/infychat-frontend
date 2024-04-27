import React, { useState } from 'react';
import './SendChatBox.css';
import ArrowDown from '../../../icon/ArrowDown';
import Selector from '../receiverChatDialogBox/selector/Selector';
import { formatTime } from '../../../../utils/Helpers';

export default function SendChatBox({msgContent,createdAt}) {
  const [openSelector,setOpenSelector] = useState(false);

  const handleSelector = () => {
      console.log(openSelector);
      setOpenSelector(prev=>!prev)
      console.log(openSelector);
  };
  return (
    <div className=" right-container">
      
      <div className="messageBox">
        <span className='text ' style={{ lineHeight: -1 }}>{msgContent? msgContent : "demo content"}</span>
        <span className={`senderArrowDown `} onClick={handleSelector}><ArrowDown size={15} color={"#000000"} /></span>
        {openSelector && <span><Selector/></span>}
        <span className="time" >{formatTime(createdAt)}</span>
      </div>
    </div>
  );
}
