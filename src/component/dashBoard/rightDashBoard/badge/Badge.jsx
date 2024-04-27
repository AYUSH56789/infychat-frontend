import React from 'react'
// import 'Badge.css'

export default function Badge({value}) {
  return (
    <button
      type="button"
      id="iconButton"
      data-toggle="button"
      aria-pressed="false"
      style={{ backgroundColor: "#4CBB17", color: "white" , width:"21px" ,height:"21px", marginLeft:"auto"}}
    >
      {value}
    </button>
  )
}
