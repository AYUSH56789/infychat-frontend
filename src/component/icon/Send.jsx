import React from 'react'
import { RiSendPlane2Fill } from "react-icons/ri";

export default function Send({size,color}) {
  return (
    <div>
      <RiSendPlane2Fill size={size} color={color} style={{margin:"0px 7px"}}/>
    </div>
  )
}
