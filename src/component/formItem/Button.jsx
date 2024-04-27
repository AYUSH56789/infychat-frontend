import React from 'react'
import './FormStyle.css'

export default function Button({ type, value, bgColor, color }) {
  return (
    <button
      type={type}
      className="button"
      data-toggle="button"
      aria-pressed="false"
      style={{ backgroundColor: bgColor, color: color }}
    >
      {value}
    </button>
  )
}
