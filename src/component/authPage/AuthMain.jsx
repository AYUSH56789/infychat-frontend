import './AuthStyle.css'
import React from 'react'
import AuthLeftDiv from './AuthLeftDiv';
import { Outlet } from 'react-router-dom';
export default function AuthMain() {
  return (
    <div className="container-fluid" id='auth-main'>
      <AuthLeftDiv />
      <Outlet />
    </div>
  )
}
