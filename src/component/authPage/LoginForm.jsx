import React, { useState } from 'react'
import Input from '../formItem/Input'
import Button from '../formItem/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../features/login/LoginSlice'
import { toast } from 'react-toastify';
import { chatParticipantsList } from '../../features/participants/participantsSlice'
import Profile from './Profile'


export default function LoginForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading } = useSelector(state => state.login);
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    })

    // handle on click
    const handleLoginClick = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLoginFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    // submit form data
    const handleLoginOnSubmit = async (event) => {
        event.preventDefault();
        // console.log(loginFormData);
        const resp = await dispatch(loginUser(loginFormData))
        setLoginFormData({
            email: "",
            password: "",
        })
        if (resp.payload.success) {
            toast.success(resp.payload.message);
            const res=await dispatch(chatParticipantsList());
            if(res.payload.success){
                navigate('/dashboard')
            }
            else{
                toast.error("somthing went wrong");
            }
        } else {

            toast.error(resp.payload.message);
        }
    }

    return (
        <div className="Container-center">
            <div className='authLogin '>
                <h1 className='text-center p-2'><span className='m-0 half-underline'>Login</span></h1>
                {/* <Profile/> */}
                <form onSubmit={handleLoginOnSubmit} className="p-2  " action="">
                    <Input type="text" name="email" id='email' placeholder="Enter Username" onChange={handleLoginClick} value={loginFormData.email} />
                    <Input type="text" name="password" id='password' placeholder="Enter Password" onChange={handleLoginClick} value={loginFormData.password} />
                    <p className='m-1'>Forget Password? <Link className="no-underline" to="/forget-password">Click Here</Link></p>
                    <div className="d-flex justify-content-center p-3">
                        <Button type="submit" value={isLoading ? "Loading..." : "Login"} bgColor="#ba9ffb" color="#ffff" />
                    </div>
                </form>
            </div>
        </div>
    )
}
