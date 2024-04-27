import './Modal.css'
import { RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";
import { setIsFriendProfileModelOpen } from "../../features/model/ModeSlice";
import Button from "../formItem/Button";
import VoiceCall from '../icon/VoiceCall';
import VideoCall from '../icon/VideoCall';
import Message from '../icon/Message';
import UncheckedNotification from '../icon/UncheckedNotification';
import Hide from '../icon/Hide';
import MessageSchedular from '../icon/MessageSchedular';
import { getFriendDetailsApi } from '../../features/details/DetailSlice';
import { useEffect } from 'react';
import { getChatMessage, setChatHeader } from '../../features/message/MessageSlice';
import SmallScreenLoader from '../dashBoard/SmallScreenLoader';
import { deleteChatApi } from '../../features/chat/ChatSlice';
import { chatParticipantsList } from '../../features/participants/participantsSlice';


export default function FriendProfileModel({ chatId, name }) {
    const { isLoading, fdata } = useSelector(state => state.details);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFriendDetailsApi({ chatId }));
    }, []);

    const handleOpenChat = async (chatId, dataa) => {
        await dispatch(setIsFriendProfileModelOpen())
        await dispatch(setChatHeader(dataa))
        await dispatch(getChatMessage(chatId))
        toast.success(`You Click On Chat ${chatId, data}`)
    }

    const handleDeleteChat = async (event) => {
        // event.preventDefault();
        const resp = await dispatch(deleteChatApi({ chatId: chatId }));
        if (resp.payload.success) {
            toast.success(`Chat delete Successfull`)
            await dispatch(setIsFriendProfileModelOpen())
            const resp = await dispatch(chatParticipantsList());
            if (resp.payload.success) {
                // navigate('/dashboard')
                // toast.success("ready to navigate");
            }
            else {
                toast.error("somthing went wrong");
            }

        }
    }
    return (
        <>
            <div className="mydarkBG" onClick={() => dispatch(setIsFriendProfileModelOpen())} />
            <div className="mycentered">
                <div className="mymodal">
                    <div className=" mymodalHeader">
                        <h1 className='text-center py-2 myheading'><span className='m-0 half-underline'>User Profile</span></h1>
                    </div>
                    <button className=" mycloseBtn" onClick={() => dispatch(setIsFriendProfileModelOpen())}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className=" mymodalContent">
                        {isLoading && !fdata ? (
                            <SmallScreenLoader /> // Render loading message while udata is loading
                        ) : (<>
                            {fdata && // Add null check for udata
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'center', borderRadius: '50px' }}>
                                        <div style={{ padding: '5px', border: '2px dashed #ff00f8', borderRadius: '50px' }}>
                                            <img src={fdata.photo} width={'80px'} height={'80px'} alt="" style={{ borderRadius: '50px' }} />

                                        </div>
                                    </div>
                                    <h4 style={{ display: 'flex', color: "black", justifyContent: 'center', margin: "10px 0px 0px 0px" }}>{fdata.name}</h4>
                                    <p style={{ display: 'flex', color: "#BA9FFB", justifyContent: 'center', margin: "0px 0px 10px 0px" }}>{fdata.email}</p>
                                    {/* icons */}
                                    <div id="leftIconHeader" style={{ justifyContent: "center" }}>
                                        <div className='friendProfileIcon' onClick={() => handleOpenChat(chatId, { name: fdata.name, photo: fdata.photo })}>
                                            <Message size={"25"} color={"#ba9ffb"} />
                                        </div>
                                        <div className='friendProfileIcon' >
                                            <VoiceCall size={"23"} color={"#ba9ffb"} />
                                        </div>
                                        <div className='friendProfileIcon'>
                                            <VideoCall size={"25"} color={"#ba9ffb"} />
                                        </div>

                                    </div>

                                    <hr id='hrSearchStyle' />
                                    <div style={{ textAlignLast: 'start' }} >
                                        <div style={{ display: 'flex' }}>
                                            <span style={{ margin: '6px 10px' }}>Hide User</span>
                                            <span style={{ marginLeft: "auto", marginTop: '6px ', marginRight: '5px', opacity: '0.7' }}><Hide size={20} color={"#ba9ffb"} /></span>
                                        </div>
                                        <hr id='hrSearchStyle' />
                                        <div style={{ display: 'flex' }}>
                                            <span style={{ margin: '6px 10px' }}>Schedule Message</span>
                                            <span style={{ marginLeft: "auto", marginTop: '6px ', marginRight: 'px', opacity: '0.7' }}><MessageSchedular size={20} color={"#ba9ffb"} /></span>
                                        </div>
                                        <hr id='hrSearchStyle' />
                                        <div style={{ display: 'flex' }}>
                                            <span style={{ margin: '6px 10px' }}>Mute Notification</span>
                                            <span style={{ marginLeft: "auto", marginTop: '6px ', marginRight: '5px', opacity: '0.7' }}><UncheckedNotification size={"20"} color={"#ba9ffb"} /></span>
                                        </div>
                                        <hr id='hrSearchStyle' />
                                    </div>
                                    <div onClick={handleDeleteChat} className="mymodalActions py-2">
                                        <div className="d-flex justify-content-center "  >
                                            <Button onClick={handleDeleteChat} type="Button" value="Delete Chat" bgColor="#ba9ffb" color="#ffff" />
                                        </div>
                                    </div></>}</>)}
                    </div>
                </div>
            </div>
        </>
    );
};
