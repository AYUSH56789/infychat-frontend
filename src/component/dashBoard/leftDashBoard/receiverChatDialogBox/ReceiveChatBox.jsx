import React, { useRef, useState } from 'react';
import './ReceiveChatBox.css';
import ArrowDown from '../../../icon/ArrowDown';
import Selector from './selector/Selector';
import { formatTime } from '../../../../utils/Helpers';

export default function ReceiveChatBox({msgContent,photo,createdAt}) {
// export default function ReceiveChatBox({msgContent}) {
    const [openSelector,setOpenSelector] = useState(false);

    const handleSelector = () => {
        console.log(openSelector);
        setOpenSelector(prev=>!prev)
        console.log(openSelector);
    };
    // console.log(photo,"photo");

    return (
        <div className=" left-container" style={{display:"flex"}}>
            <img src={photo?photo:"images/avtarImages/2.png"} width={"30px"} height={'30px'} alt="" style={{borderRadius:"30px", marginRight:"5px"}} />
            <div className="messageBox">
                <span className='textMsg ' style={{ lineHeight: -1 }}>{msgContent? msgContent : "demo content"}</span>
                <span className="receiveArrowDown" onClick={handleSelector}><ArrowDown size={15} color={"#000000"} /></span>
                {openSelector && <span><Selector/></span>}
                <span className="time" >{formatTime(createdAt)}</span>
            </div>
        </div>
    );
}
