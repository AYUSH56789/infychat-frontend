import React, { useState } from 'react'
import Input from '../formItem/Input'
import Button from '../formItem/Button'
import { useDispatch, useSelector } from 'react-redux'
import { checkUser, forgetUser, verifyUser } from '../../features/forget/ForgetSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function ForgetForm() {
  const navigate=useNavigate();
  const { isUserFound, isUserVerify, isUserForget, isLoading } = useSelector(state => state.forget)
  console.log(isUserForget, isUserFound, isUserVerify, isLoading)
  const dispatch = useDispatch()

  // handle email state
  const [email, setEamil] = useState('')
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEamil(value)
  }
  const handleEmailSubmit =async (event) => {
    event.preventDefault();
    console.log(email)
    const res =await dispatch(checkUser(email))
    if (res.payload.success === true) {
      toast.success(res.payload.message)
    }
    else {
      toast.error(res.payload.message)
    }
    // console.log(email)
    setEamil("")
  }


  // handle otp state
  const [otp, setOtp] = useState('')
  const handleOtpChange = (event) => {
    setOtp(event.target.value)
  }
  const handleOtpSubmit = async(event) => {
    event.preventDefault()
    console.log(otp)
    const res =await dispatch(verifyUser(otp))
    if (res.payload.success === true) {
      toast.success(res.payload.message)
    }
    else {
      toast.error(res.payload.message)
    }
    setOtp('')
  }

  // handle newPassword state
  const [newPassword, setNewPassword] = useState('')
  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value)
  }
  const handleNewPasswordSubmit = async (event) => {
    event.preventDefault()
    const res =await dispatch(forgetUser(newPassword))
    if (res.payload.success === true) {
      toast.success(res.payload.message)
      navigate('/login')
    }
    else {
      toast.error(res.payload.message)
      navigate('/forget-password')
    }
    console.log(otp)
    setNewPassword('')
  }


  return (
    <div className="Container-center">
    <div className='authLogin '>
      <h1 className='text-center p-2 mx-3 '><span className='m-0 half-underline'>Forget Password</span></h1>
      <form onSubmit={!isUserFound ? handleEmailSubmit : (isUserFound && !isUserVerify) ? handleOtpSubmit : (isUserFound && isUserVerify) && handleNewPasswordSubmit} className="p-2  " action="">
        {!isUserFound && <Input type="email" name="email" id='email' placeholder="Enter Email" onChange={handleEmailChange} value={email} />}
        {(isUserFound && !isUserVerify) && <Input type="number" name="otp" id='otp' placeholder="Enter Otp" onChange={handleOtpChange} value={otp} />}
        {(isUserFound && isUserVerify) && <Input type="password" name="newPassword" id='newPassword' placeholder="Enter New Password" onChange={handleNewPasswordChange} value={newPassword} />}
        <div className="d-flex justify-content-center p-3">
          <Button type="submit" value={isLoading ? "Loading..." : !isUserFound ? "Get Otp" : (isUserFound && !isUserVerify) ? "Verify Otp" : (isUserFound && isUserVerify) && "Submit"} bgColor="#ba9ffb" color="#ffff" />
        </div>
      </form>
    </div>
    </div>
  )
}
