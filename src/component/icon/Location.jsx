import React from 'react'
import { IoLocation } from "react-icons/io5";

export default function Location({size,color}) {
  return (
    <div>
      <IoLocation  size={size} color={color} style={{margin:"0px 7px"}}/>
    </div>
  )
}
