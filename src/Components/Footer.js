import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>

<div class="footer">
        <div class="footerup">
            <div>
                <h1>Links</h1>
                <ul>
                   <li><Link to='/about' className='nabar1' >About us</Link></li> 
                   <li><Link to='/categories' className='nabar1'>Categories</Link></li> 
                    <li> <Link className='nabar1'>Services List</Link></li>

                </ul>
            </div>
            <div>
                <h1>Account</h1>
                <ul>
                   <li><Link to='/login'className='nabar1'>Login</Link></li> 
                    <li><Link to='/register' className='nabar1'>Register</Link></li>
                   

                </ul>
            </div>
            <div>
                <h1>Legal</h1>
                <ul>
                    <li><Link className='nabar1'>Terms and conditions</Link></li>
                    <li><Link className='nabar1'>privacy policy</Link></li>
                    

                </ul>
            </div>
            <div>
                <h1>Social Links</h1>
            
                <ul style={{display:"flex"}}>
                    <li ><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-pinterest-p"></i></li>

                </ul>
            </div>


        </div>
        <div class="footerdown">
<p style={{textAlign:"center"}}>Copyright © 2021. All rights reserved.</p>


        </div>


    </div>
    </>
  )
}
