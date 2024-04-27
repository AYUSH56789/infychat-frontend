import React from 'react'
import { IoMdPersonAdd } from "react-icons/io";
export default function Add({size,color}) {
  return (
    <div>
       <IoMdPersonAdd size={size} color={color} style={{margin:"0px 7px"}}/>
    </div>
  )
}
