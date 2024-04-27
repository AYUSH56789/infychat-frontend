import { MdMessage } from "react-icons/md";
import React from 'react'

export default function Message({size,color}) {
  return (
    <div>
      <MdMessage  size={size} color={color} style={{margin:"0px 7px"}}/>
    </div>
  )
}
