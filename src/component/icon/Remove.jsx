import { IoMdRemoveCircle } from "react-icons/io";
import React from 'react'

export default function Remove({size,color}) {
  return (
    <div>
      <IoMdRemoveCircle size={size} color={color} style={{margin:"0px 7px"}}/>
    </div>
  )
}
