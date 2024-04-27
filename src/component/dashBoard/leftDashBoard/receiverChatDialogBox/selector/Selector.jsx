import React from 'react';
import './Selector.css'

export default function Selector() {
  return (
    <div  className="selector">
      <ul className='selector__list'>
        <li className='selectorList'>Secure</li>
        <li className='selectorList'>Reply</li>
        <li className='selectorList'>Forward</li>
        <li className='selectorList'>React</li>
        <li className='selectorList'>Delete</li>
      </ul>
    </div>
  )
}
