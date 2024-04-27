import React from 'react';
import Button from '../formItem/Button';

export default function AuthLeftDiv() {
  return (
    <>
      <div className='shadov' style={{ position: 'relative' }}>
        <div className="clip-path-div">
          <h1 className="hero-title">Break Free from Boring Chats, Welcome to InfyChat -</h1>
          <div className="d-flex justify-content-center p-3" style={{ width: "50%" }}>
            <Button type="button" value="Know More" bgColor='#ffffff' color='#ba9ffb' />
          </div>
        </div>
        <img id="authImg1" src="/images/authImg1.png" alt="Loading..." className="auth-image" />
      </div>
    </>
  )
}
