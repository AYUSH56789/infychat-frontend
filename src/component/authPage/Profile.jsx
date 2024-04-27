import React, { useEffect } from 'react';
import { FaEdit } from "react-icons/fa";

export default function Profile({userefprop,image}) {

  // `current` points to the mounted file input element
  const onButtonClick = () => {
    userefprop.current.click();
  };
 

  return (
    <div className="profile">
    <div className="profile-outer-cont">
      {image?(<img onClick={onButtonClick} className='profile-Image' src={URL.createObjectURL(image)} alt="" />):(<img onClick={onButtonClick} className='profile-Image' src={`/images/profileIcon.png`} alt="profile image" />)}
      {/* <div className='edit-profile' onClick={onButtonClick}><FaEdit /></div> */}
    </div>
    </div>
  );
}
