import React from 'react';
import { MdAttachFile } from "react-icons/md";

export default function FileAttachment({size,color}) {
  return (

      <MdAttachFile size={size} color={color} style={{margin:"0px 7px"}}/>
  )
}

