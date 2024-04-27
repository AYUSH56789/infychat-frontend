import { BiSolidHide } from "react-icons/bi";
import React from 'react'

export default function Hide({size,color}) {
  return (
    <div>
       <BiSolidHide  size={size} color={color} style={{margin:"0px 7px"}}/>
    </div>
  )
}
