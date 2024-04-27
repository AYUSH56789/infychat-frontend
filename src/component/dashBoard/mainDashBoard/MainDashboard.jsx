import React from 'react';
import './MainDashboard.css'
import MainRightDashboard from '../rightDashBoard/MainRightDashboard'
import MainLeftDashboard from '../leftDashBoard/MainLeftDashboard'
import { useSelector } from 'react-redux';
// import { getSocket } from '../../../utils/SocketIo';

export default function MainDashboard() {
  const mode=useSelector(state=>state.theme)
console.log("mode in maindash",mode)

  return (
    <div id='dashboard' className={mode.dark?"darkMode-MainDashBoardbackground":""} >
      <MainLeftDashboard />
      <MainRightDashboard />
    </div>
  )
}
