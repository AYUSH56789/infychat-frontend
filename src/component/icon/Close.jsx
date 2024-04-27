import React from 'react'
import { SlClose } from "react-icons/sl";
export default function Close({size,color}) {
  return (
    <div>
      <SlClose  size={size} color={color} style={{margin:"0px 7px",}}/>
    </div>
  )
}
