import React from 'react'
import './FormStyle.css'

export default function TextArea({name,id,rows, value,onChange,width,placeholder}) {
  return (
    <div>
      <textarea className="" name={name} id={id} onChange={onChange} value={value} rows={rows} style={{width:width}} placeholder={placeholder}></textarea>
    </div>
  )
}
