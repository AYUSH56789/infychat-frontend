import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom'
import Button from '../../../formItem/Button'
export default function HeroSection() {
    return (
        <div class='herosection' style={{ display: "flex" }}>
            {/* left conatiner */}
            <div className="contentsection">
                <h1 className="hero-title">Break Free from Boring Chats, Welcome to InfyChat . </h1>
                <p className='hero-disc'>Experience the transformative power of Infychat, the all-in-one chat platform designed to streamline communication and elevate collaboration with its cutting-edge features</p>
                <div className="loginsignupbtn">
                    <span style={{ marginRight: "30px" }} ><Link to="/sign-up"><Button type="button" value="SignUp" bgColor='#ffffff' color='#ba9ffb' /></Link></span>
                    <Link to="/login"><Button type="button" value="Login" bgColor="#ba9ffb" color="#ffff" /></Link>
                </div>
            </div>

            {/* right conatiner */}
            <div className="imagesection">
                <img id="HerosectionImageStyle" src="https://cdn3d.iconscout.com/3d/premium/thumb/chatting-with-seller-8463830-6713567.png?f=webp" alt="" />
            </div>
        </div>
    )
}
