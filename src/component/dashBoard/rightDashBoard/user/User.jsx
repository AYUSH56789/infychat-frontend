import React, { useState, useEffect } from 'react';
import './User.css';
import { useDispatch, useSelector } from 'react-redux';
import FriendProfileModel from '../../../model/FriendProfileModel';
import { setIsFriendProfileModelOpen, setIsGroupProfileModelOpen, } from '../../../../features/model/ModeSlice';
import GroupProfileModel from '../../../model/GroupProfileModel';
import Badge from '../badge/Badge'
import { toast } from 'react-toastify';
import { getChatMessage, setChatHeader, setFullMsg, setTempMessage } from '../../../../features/message/MessageSlice';
import { useNavigate } from 'react-router-dom';
import { getChatDetailsApi } from '../../../../features/details/DetailSlice';
export default function User({ name, lastMsg, photo, chatType, chatId }) {
    const navigate=useNavigate()
    const { isFriendProfileModelOpen, isGroupProfileModelOpen } = useSelector(state => state.model);
    const { isChatDelete } = useSelector(state => state.chat);
    const dispatch = useDispatch();
    const mode = useSelector(state => state.theme);

    const [selectedOneToOneChatId, setSelectedOneToOneChatId] = useState(null);
    const [selectedGroupChatId, setSelectedGroupChatId] = useState(null);

    const handleEventOneToOneChat = async (e) => {
        e.stopPropagation();
        setSelectedOneToOneChatId(chatId);
        dispatch(setIsFriendProfileModelOpen());
    };
    const handleEventGroupChat = async (e) => {
        e.stopPropagation();
        setSelectedGroupChatId(chatId);
        dispatch(setIsGroupProfileModelOpen());
    };

    useEffect(() => {
        if (!isFriendProfileModelOpen) {
            setSelectedOneToOneChatId(null); // Reset selected user ID when the modal is closed
        }
        if (!isGroupProfileModelOpen) {
            setSelectedGroupChatId(null); // Reset selected user ID when the modal is closed
        }
    }, [isFriendProfileModelOpen, isGroupProfileModelOpen,isChatDelete]);

    const handleOpenChat = async(chatId, data) => {
        await dispatch(setChatHeader(data))
        await dispatch(getChatDetailsApi({chatId}))
        // await dispatch(setFullMsg())
        await dispatch(setTempMessage())
        await dispatch(getChatMessage({chatId:chatId,page:1}))
    }

    return (
        <>
            <div id='userTab'style={{cursor:"pointer"}} className={mode.dark ? "darkMode-RightDashBoardUserTabbackground" : ""}>
                <div style={{ width: '25%' }} onClick={chatType === "one-to-one" ? handleEventOneToOneChat : chatType === "group" ? handleEventGroupChat : null}>
                    {photo ? <img id="userPhoto" src={photo} alt="" /> : <img id="userPhoto" src="/images/groupIcon.jpg" alt="" style={{ padding: '10px', border: '1px solid #ba9ffb ',opacity:'0.2' }} />}
                </div>
                {isFriendProfileModelOpen && selectedOneToOneChatId === chatId && chatType === "one-to-one" && <FriendProfileModel chatId={chatId} name={name} />}
                {isGroupProfileModelOpen && selectedGroupChatId === chatId && chatType === "group" && <GroupProfileModel chatId={chatId} name={name} />}
                <div style={{ display: "flex", width: '100%' }} onClick={() => handleOpenChat(chatId, { name: name, photo: photo })}>
                    <div id="userDetail" style={{ width: '75%', display: "flex", justifyContent: "center", flexDirection: 'column' }}>
                        <p id="userName" className={mode.dark ? "darkMode-RightDashBoardUserNamecolor" : ""}>{name}</p>
                        <p id="lMessage">{lastMsg}</p>
                    </div>
                    {/* <div id='lTime' style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: ' center', flexDirection: 'column' }}>
                        <span>10:03</span>
                        <Badge value={1} />
                    </div> */}
                </div>
            </div>
        </>
    );
}
