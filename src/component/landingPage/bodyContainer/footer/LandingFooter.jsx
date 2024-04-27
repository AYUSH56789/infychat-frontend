import React from 'react';
import {Link} from 'react-router-dom'
import './LandingFooter.css'
import { toast } from 'react-toastify';

export default function LandingFooter() {
  const showPolicy=()=>{
    toast.warning("Sorry, Please Try Again Later")
  }
  return (
    <div className='landing-footer'>
    <div id='footerContainer'>
      <p className='text-center p-0 m-0'>&copy; 2024 InfyChat. All Right Reserve</p>
    <p className='text-center p-0 m-0'><Link onClick={showPolicy} className='text-center p-0 m-0' style={{textDecoration: 'none' }}to="">privacy policy</Link></p>
    </div>
    </div>
  )
}
