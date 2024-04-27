import React, { useState } from 'react';
import Input from '../formItem/Input';
import Button from '../formItem/Button';
import { useDispatch, useSelector } from 'react-redux';
import { otpVerify } from '../../features/signup/SignupSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function OtpInputBox() {
  const navigate=useNavigate()
  const {isLoading}=useSelector(state=>state.login);
  const dispatch=useDispatch()
  const signupOtp=useSelector(state=>state.signup.signupOtp)
  const [otp, setOtp] = useState("");

  const handleOtpClick = (event) => {
    const value = event.target.value;
    setOtp(value)
  }
  const handleOtpSubmit=async(event)=>{
    event.preventDefault();
        console.log(otp);
        const res=await dispatch(otpVerify(otp));
        setOtp("")
        if(res.payload.success===true){
          toast.success(res.payload.message);
          navigate('/login')
      }else{
          toast.error(res.payload.message);
          navigate('/sign-up')
      }
  }
  return (
    <>
    <div className="Container-center">
      <div className='authLogin '>
        <h1 className='text-center p-2 px-5 mx-5'><span className='m-0 
half-underline'>Sign-Up</span></h1>
        <form onSubmit={handleOtpSubmit} className="p-2  " action="">
          <Input type="number" name="otp" id='otp' placeholder="Enter 6 Dgit Otp " onChange={handleOtpClick} value={otp} />
          <div className="d-flex justify-content-center p-3">
            <Button type="submit" value={isLoading?"Loading":"Verify Otp"} bgColor="#ba9ffb" color="#ffff" />
          </div>
        </form>
      </div >
      </div>
    </>
  )
}
