import React from 'react'
import { MdNotificationsOff } from "react-icons/md";

export default function CheckedNotification({size,color}) {
  return (
    <div>
      <MdNotificationsOff  size={size} color={color} style={{margin:"0px 7px"}}/>
    </div>
  )
}
