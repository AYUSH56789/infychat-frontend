import './Modal.css'
import { RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";
import Button from "../formItem/Button";
import { setIsGroupProfileModelOpen } from '../../features/model/ModeSlice';
import UncheckedNotification from '../icon/UncheckedNotification';
import Remove from '../icon/Remove';
import Add from '../icon/Add';
import All from '../icon/All';
import Hide from '../icon/Hide';
import { useEffect } from 'react';
import { getGroupDetailsApi } from '../../features/details/DetailSlice';
import SmallScreenLoader from '../dashBoard/SmallScreenLoader';
import { deleteChatApi } from '../../features/chat/ChatSlice';
import { chatParticipantsList } from '../../features/participants/participantsSlice';

export default function GroupProfileModel({chatId,name}) {
    
    const { isLoading, gdata } = useSelector(state => state.details);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGroupDetailsApi({chatId}));
    }, []);

    const handleDeleteChat = async (event) => {
        // event.preventDefault();
        const resp = await dispatch(deleteChatApi({ chatId: chatId }));
        if (resp.payload.success) {
            toast.success(`Chat delete Successfull`)
            await dispatch(setIsGroupProfileModelOpen())
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
                <div>
                    <div className="mydarkBG" onClick={() => dispatch(setIsGroupProfileModelOpen())} />
                    <div className="mycentered">
                        <div className="mymodal">
                            <div className=" mymodalHeader">
                            <h1 className='text-center py-2 myheading'><span className='m-0 half-underline'>Group Profile</span></h1>
                            </div>
                            <button className=" mycloseBtn" onClick={() => dispatch(setIsGroupProfileModelOpen())}>
                                <RiCloseLine style={{ marginBottom: "-3px" }} />
                            </button>
                            <div className=" mymodalContent">
            {isLoading && !gdata ? (
                <SmallScreenLoader/> // Render loading message while gdata is loading
            ) : (<>
            {gdata && // Add null check for udata
            <>
                                <div style={{ display:'flex',justifyContent:'center',borderRadius:'50px'}}>
                                    <div style={{ padding:'5px',border:'2px dashed #ff00f8',borderRadius:'50px'}}>
                                        {gdata.photo?<img src={gdata.photo} width={'80px'} height={'80px'} alt="" style={{borderRadius:'50px'}} />:
                                        <img src="/images/groupIcon.jpg" width={'80px'} height={'80px'} alt="" style={{borderRadius:'50px'}} />}
                                    </div>
                                </div>
                                <h4 style={{ display:'flex',color:"black",justifyContent:'center', margin:"10px 0px 0px 0px" }}>{gdata.groupChatName}</h4>
                                <p style={{ display:'flex',color:"#BA9FFB",justifyContent:'center', margin:"0px 0px 10px 0px" }}>{`< Group Members ${gdata.groupMember.memberCount } >`}</p>
                                <hr id='hrSearchStyle' />
                                <div style={{ textAlignLast: 'start' }} >
                                    <div style={{display:'flex'}}>
                                        <span style={{ margin:'6px 10px'}}>Hide Group</span>
                                        <span style={{marginLeft:"auto",marginTop:'6px ',marginRight: '5px', opacity: '0.7'}}><Hide size={20} color={"#ba9ffb"}/></span>
                                    </div>
                                    <hr id='hrSearchStyle' />
                                    <div style={{display:'flex'}}>
                                        <span style={{ margin:'6px 10px'}}>Add Member</span>
                                        <span style={{marginLeft:"auto",marginTop:'6px ',marginRight: '5px', opacity: '0.7'}}><Add size={"20"} color={"#ba9ffb"} /></span>
                                    </div>
                                    <hr id='hrSearchStyle' />
                                    {/* <div style={{display:'flex'}}>
                                        <span style={{ margin:'6px 10px'}}>Remove Member</span>
                                        <span style={{marginLeft:"auto",marginTop:'6px ',marginRight: '5px', opacity: '0.7'}}><Remove size={"20"} color={"#ba9ffb"} /></span>
                                    </div>
                                    <hr id='hrSearchStyle' /> */}
                                    <div style={{display:'flex'}}>
                                        <span style={{ margin:'6px 10px'}}>All Members</span>
                                        <span style={{marginLeft:"auto",marginTop:'6px ',marginRight: '5px', opacity: '0.7'}}><All size={"20"} color={"#ba9ffb"} /></span>
                                    </div>
                                    <hr id='hrSearchStyle' />
                                    <div style={{ display: 'flex' }}>
                                        <span style={{ margin: '6px 10px' }}>Mute Notification</span>
                                        <span style={{ marginLeft: "auto", marginTop: '6px ', marginRight: '5px', opacity: '0.7' }}><UncheckedNotification size={"20"} color={"#ba9ffb"} /></span>
                                    </div>
                                    <hr id='hrSearchStyle' />
                                </div>
                                <div className="mymodalActions py-2">
                                    <div onClick={handleDeleteChat} className="d-flex justify-content-center "  style={{paddingRight:"5px"}} >
                                        <Button  type="Buttton" value="Delete Group" bgColor="#ba9ffb" color="#ffff" />
                                    </div>
                                    <div className="d-flex justify-content-center " style={{paddingLeft:"5px"}} >
                                        <Button type="submit" value="Exit Group" bgColor="#ba9ffb" color="#ffff" />
                                    </div>
                                </div></>}</>)}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
    
}
