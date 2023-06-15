import React from 'react'
import './Form.css'

export default function Form() {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Details</label>
            <textarea rows='6' placeHolder='Type a short message here'></textarea>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}
