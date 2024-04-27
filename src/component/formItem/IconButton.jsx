import React from 'react'
import './FormStyle.css'
export default function IconButton({ type, value, bgColor, color,padding="9px",margin="4px" }) {
  return (
    <button
      type={type}
      id="iconButton"
      data-toggle="button"
      aria-pressed="false"
      style={{ backgroundColor: bgColor, color: color,padding:padding,margin:margin }}
    >
      {value}
    </button>
  )
}
