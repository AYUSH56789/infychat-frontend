import React from 'react';
import IconButton from '../../../formItem/IconButton';
import './Header.css';
import VoiceCall from '../../../icon/VoiceCall';
import VideoCall from '../../../icon/VideoCall';
import MessageSchedular from '../../../icon/MessageSchedular';
import { useDispatch, useSelector } from 'react-redux';
import { setIsScheduleMessageModelOpen, setIsVideoCallModelOpen, setIsVoiceCallModelOpen } from '../../../../features/model/ModeSlice';
import ScheduleMessageModel from '../../../model/ScheduleMessageModel';
import VideoCallModel from '../../../model/VideoCallModel';
import VoiceCallModel from '../../../model/VoiceCallModel';

export default function Header({ name, photo }) {
    const mode = useSelector(state => state.theme)
    const { isScheduleMessageModelOpen,isVideoCallModelOpen,isVoiceCallModelOpen } = useSelector(state => state.model)
    const dispatch=useDispatch()
    return (
        <div id='leftHeader'>
            <div >
                <img id="leftUserPhotoHeader" src={photo ? photo : "/images/groupIcon.jpg"} alt="" />
            </div>
            <div id="userDeatail" className='p-0 m-0'>
                <span id="leftUserName" className={mode.dark ? "darkMode-LeftDashBoardHeaderProfileNameColor p-0 m-0 " : "p-0 m-0 "} >{name ? name : "N/A"}</span>
                <span className="p-0 m-0" id="Mode">online</span>
            </div>
            <div id="leftIconHeader">
                <div onClick={() => dispatch(setIsVoiceCallModelOpen())} style={{cursor:'pointer'}}>
                <VoiceCall size={"23"} color={"#ba9ffb"} />
                </div>
                {isVoiceCallModelOpen && <VoiceCallModel />}
                <div onClick={() => dispatch(setIsVideoCallModelOpen())} style={{cursor:'pointer'}}>
                <VideoCall size={"25"} color={"#ba9ffb"} />
                </div>
                {isVideoCallModelOpen && <VideoCallModel />}
                <div onClick={() => dispatch(setIsScheduleMessageModelOpen())} style={{cursor:'pointer'}}>
                    <MessageSchedular size={"25"} color={"#ba9ffb"} />
                </div>
                {isScheduleMessageModelOpen && <ScheduleMessageModel />}
            </div>
        </div>
    )
}
