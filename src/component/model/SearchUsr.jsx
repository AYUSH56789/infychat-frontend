import React from 'react'
import "./SearchUser.css"
import { IoMdAdd } from "react-icons/io";
import IconButton from '../formItem/IconButton';
export default function SearchUsr({_id,name,photo,type,handleAddButton=null}) {
  return (
    <div className='searchResult'>
      <img className='searchUserImg' src={photo}  alt="" />
      <span className='searchUserName'>{name}</span>
    <div className='addButton' onClick={type==="createOneToOneChat"?()=>handleAddButton({reqUserId:_id}):type==="createGroup"?()=>handleAddButton({_id,name}):null}>
      <div className='addIconButton'><IoMdAdd size={15} /></div></div>
    </div>
  )
}
