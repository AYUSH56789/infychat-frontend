import React, { useState } from 'react';
import IconButton from '../../../formItem/IconButton';
import './Header.css';
import { FaMoon } from "react-icons/fa6";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { themeToogler } from '../../../../features/theme/themeSlice';
import { logoutUser } from '../../../../features/login/LoginSlice';
import { toast } from 'react-toastify';
import { IoSearch } from "react-icons/io5";
import Modal from '../../../model/Modal';
import GroupModel from '../../../model/GroupModel';
import SearchBox from '../searchbox/SearchBox';
import { setIsGroupModalOpen, setIsProfileModalOpen, setIsSearchModalOpen } from '../../../../features/model/ModeSlice';
import ProfileModel from '../../../model/ProfileModel';
import { setShowChatContainer } from '../../../../features/message/MessageSlice';

export default function Header() {
    // const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
// const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);

    // perform dark mode functionality
    const {data} = useSelector(state => state.login)
    const mode = useSelector(state => state.theme)
    const {isSearchModalOpen,isGroupModalOpen,isProfileModalOpen} = useSelector(state => state.model)
    const dispatch = useDispatch();
    const handleThemeChanger = () => {
        dispatch(themeToogler())
    }

    const handleLogout=async()=>{
        const res=await dispatch(logoutUser());
        if(res.payload.success){
            toast.success(res.payload.message);
            await dispatch(setShowChatContainer());
        }
        else{
            toast.error(res.payload.message);
        }
    }
    
    return (
        <div id='rightHeader' className={mode.dark ? "darkMode-RightDashBoardHeaderbackground" : ""}>
            <div onClick={() => dispatch(setIsProfileModalOpen())} >
                <img id="userPhotoHeader" src={data.photo} alt="" />
            </div>
                {isProfileModalOpen && <ProfileModel />}
            <div id="iconHeader">
                <div onClick={handleThemeChanger} >
                    <IconButton type={"button"} value={<FaMoon />} bgColor={mode.dark ? "#ffffff" : "#ba9ffb"} color={mode.dark ? "#ba9ffb" : "#ffffff"} />
                </div>
                
                <div  onClick={() => dispatch(setIsSearchModalOpen())}>
                <IconButton type={"submit"} value={<IoSearch size={17} />} bgColor={"#ba9ffb"} color={"#ffffff"} /></div>
                {isSearchModalOpen && <Modal />}

                <div  onClick={() => dispatch(setIsGroupModalOpen())}>
                <IconButton type={"submit"} value={<MdGroups />} bgColor={"#ba9ffb"} color={"#ffffff"} /></div>
                {isGroupModalOpen && <GroupModel />}

                <div onClick={handleLogout} className="logoutOnfocus">
                <IconButton type={"submit"} value={<RiLogoutCircleRLine />} bgColor={"#ba9ffb"} color={"#ffffff"} />
                </div>
            </div>
                
        </div>
    )
}
