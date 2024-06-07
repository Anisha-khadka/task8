import React from 'react'

export default function Login() {
  return (
  <>
 <div className='form1'>
  <div><label>Firstname</label><br/>
  <input type='text' placeholder='Firstname'/></div>
  <div><label>Lastname</label><br/>
  <input type='text' placeholder='Lastname'/></div>
  <div><label>Email Address</label><br/>
  <input type='text' placeholder='Email'/></div>
  <div><label>Phone number</label><br/>
  <input type='number' placeholder='phone'/></div>
  <div><button className='btn1'>Login</button></div>


 </div>
  
  </>
  )
}
