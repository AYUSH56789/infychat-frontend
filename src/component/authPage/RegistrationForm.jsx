import React, { useRef, useState } from 'react';
import Input from '../formItem/Input'
import Button from '../formItem/Button';
import { useDispatch, useSelector } from 'react-redux';
import { userSignup } from '../../features/signup/SignupSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import OtpInputBox from './OtpInputBox';
import Profile from './Profile';

export default function RegistrationForm() {
    const [image, setImage] = useState()
    const inputFile = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { signupOtp, isLoading } = useSelector(state => state.signup)
    const [registeredFormData, setRegisteredFormData] = useState({
        name: "",
        email: "",
        mobileNumber: "",
        password: "",
        photo:null
    })
    const handleRegisteredClick = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegisteredFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const handleLRegisteredonSubmit = async (event) => {
        event.preventDefault();
        // Check if file is not selected
        if (!registeredFormData.photo) {
            toast.error('please uplaod profile photo') // Set error message if file is not selected
            return; // Return early
        }
        console.log("register",registeredFormData);
        const formData = new FormData();
        formData.append('name', registeredFormData.name);
        formData.append('email', registeredFormData.email);
        formData.append('mobileNumber', registeredFormData.mobileNumber);
        formData.append('password', registeredFormData.password);
        formData.append('photo', registeredFormData.photo); // Append the image file
        console.log("FormData:", Object.fromEntries(formData));
        const res = await dispatch(userSignup(formData));
        setRegisteredFormData({
            name: "",
            email: "",
            mobileNumber: "",
            password: "",
            photo:null,
        })
        setImage(null);
        if (res.payload.success === true) {
            toast.success(res.payload.message);
            navigate('/sign-up')
        } else {
            toast.error(res.payload.message);
            navigate('/sign-up')
        }
    }

    const handleOnImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(file);
        setRegisteredFormData((prev) => {
            return { ...prev, photo: file }
        })
    }

    return (
        <>
            {signupOtp ? <OtpInputBox /> : <div className="Container-center"><div className='authLogin '>
                <h1 className='text-center p-2 px-5 mx-5'><span className='m-0 half-underline'>Sign-Up</span></h1>
                <form onSubmit={handleLRegisteredonSubmit} className="p-2  " action="">
                    <Profile userefprop={inputFile} image={image} /><input onChange={handleOnImageChange} type='file' name='photo' id='file' ref={inputFile} style={{ display: 'none' }} />
                    <Input type="text" name="name" id='name' placeholder="Enter Name " onChange={handleRegisteredClick} value={registeredFormData.name} />
                    <Input type="email" name="email" id='email' placeholder="Enter Email" onChange={handleRegisteredClick} value={registeredFormData.email} />
                    <Input type="number" name="mobileNumber" id='mobileNumber' placeholder="Enter Mobile Number" onChange={handleRegisteredClick} value={registeredFormData.mobileNumber} />
                    <Input type="password" name="password" id='password' placeholder="Enter Password" onChange={handleRegisteredClick} value={registeredFormData.password} />
                    {/* <Select name="language" id='language' placeholder="Select Language" options={['Hindi', 'English', 'French', 'Korian']}  /> */}
                    <div className="d-flex justify-content-center p-3">
                        <Button type="submit" value={isLoading ? "Loading..." : "Get Otp"} bgColor="#ba9ffb" color="#ffff" />
                    </div>
                </form>
            </div>
            </div>
            }
        </>
    )
}
