import React from 'react'
import './errorBox.css'

export default function errorBox({msg}) {
  return (
    <div className='errContainer'>
      <h1>{msg}</h1>
    </div>
  )
}
