import React from 'react'
import { FaFileAlt } from "react-icons/fa";

export default function File({size,color}) {
  return (
    <div>
      <FaFileAlt  size={size} color={color} style={{margin:"0px 7px"}}/>
    </div>
  )
}
