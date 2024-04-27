import React from 'react'
import { MdCallEnd } from "react-icons/md";
export default function EndCall({size,color}) {
  return (
    <div>
      <MdCallEnd   size={size} color={color} style={{margin:"0px 7px"}}/>
    </div>
  )
}
