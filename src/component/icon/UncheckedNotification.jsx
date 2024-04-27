import React from 'react'
import { IoMdNotifications } from "react-icons/io";

export default function UncheckedNotification({size,color}) {
  return (
    <div>
      <IoMdNotifications  size={size} color={color} style={{margin:"0px 7px"}}/>
    </div>
  )
}
