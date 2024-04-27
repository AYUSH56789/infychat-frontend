import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
export default function ProtectRoute() {
    const auth = useSelector(state=>state.login.isLogin)
    console.log(auth)
    
    return (
    auth ? <Outlet/> : <Navigate to="/login"/>
  )
}
