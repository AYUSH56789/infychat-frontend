import React from 'react'

export default function Select({ name, id, placeholder, options, }) {
  return (
    <div class="form-group py-1">
      <select class="form-control" name={name} id={id} onChange={onChange} >
        <option value="" selected >{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
