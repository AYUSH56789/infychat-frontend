import React from 'react'
import { setIsVideoCallModelOpen } from '../../features/model/ModeSlice'
import './Modal.css'
import { RiCloseLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import EndCall from '../icon/EndCall';

export default function VideoCallModel() {
    const dispatch = useDispatch();
  return (
    <>
      <div className="mydarkBG"  />
      <div className="mycentered">
        <div className="mymodal">
          <div className=" mymodalHeader">
          <h1 className='text-center py-2 myheading'><span className='m-0 half-underline'>Calling</span></h1>
          </div>
          <div className=" mymodalContent">
          <div className="videoCalling">
                            <div className="videoSender">
                                <img src="/images/avtarImages/2.png" alt="" height={70} width={70} style={{borderRadius:"40px"}} />
                            </div>
                            <hr className='calling'/>
                            <div className="videoReceiver">
                                <img src="/images/avtarImages/10.png" alt="" height={70} width={70} style={{borderRadius:"40px"}} />
                            </div>
                        </div>
                        <div className="videoCallEnd">
                            <div className='callEndButton' onClick={() => dispatch(setIsVideoCallModelOpen())}>
                                <EndCall size={25} color="#fff"/>
                            </div>
                        </div>
          </div>
        </div>
      </div>
    </>
  )
}
