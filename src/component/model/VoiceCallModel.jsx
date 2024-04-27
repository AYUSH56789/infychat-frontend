import React from 'react'
import './Modal.css'
import { RiCloseLine } from "react-icons/ri";
import { setIsScheduleMessageModelOpen, setIsVoiceCallModelOpen } from "../../features/model/ModeSlice";
import { useDispatch } from "react-redux";
import EndCall from '../icon/EndCall';

export default function VoiceCallModel() {
    const dispatch = useDispatch()
    return (
        <>
            <div className="mydarkBG"  />
            <div className="mycentered">
                <div className="mymodal">
                    <div className=" mymodalHeader">
                        {/* <h5 className=" myheading">Calling...</h5> */}
                        <h1 className='text-center py-2 myheading'><span className='m-0 half-underline'>Calling...</span></h1>
                    </div>
                    <div className=" mymodalContent">
                        <div className="voiceCalling">
                            <div className="voiceSender">
                                <img src="/images/avtarImages/2.png" alt="" height={70} width={70} style={{borderRadius:"40px"}} />
                            </div>
                            <hr className='calling'/>
                            <div className="voiceReceiver">
                                <img src="/images/avtarImages/10.png" alt="" height={70} width={70} style={{borderRadius:"40px"}} />
                            </div>
                        </div>
                        <div className="voiceCallEnd">
                            <div className='callEndButton' onClick={() => dispatch(setIsVoiceCallModelOpen())}>
                                <EndCall size={25} color="#fff"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
