import React from 'react'
import { Category1 } from '../Components/Category1'

export default function Cleaning() {
  return (
    <>
    <div className="content3">
      <h3 style={{textAlign:"center", color:"#3F5D97"}}>Cleaning Services</h3>
    <div className="content3inner">
      {Category1.map((value)=>(
<div>
<img src={value.img} alt="" />
<h3>{value.heading}</h3>
<p style={{paddingBottom:"20px"}}> {value.des}</p>
</div>
      ))}
      </div>
      </div>
    </>
    
  )
}


  

