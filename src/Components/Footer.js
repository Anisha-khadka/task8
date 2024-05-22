import React from 'react'

export default function Footer() {
  return (
    <>

<div class="footer">
        <div class="footerup">
            <div>
                <h1>Links</h1>
                <ul>
                    <li>About us</li>
                    <li>Categories</li>
                    <li>Services List</li>

                </ul>
            </div>
            <div>
                <h1>Account</h1>
                <ul>
                    <li>Login</li>
                    <li>Register</li>
                   

                </ul>
            </div>
            <div>
                <h1>Legal</h1>
                <ul>
                    <li>Terms and conditions</li>
                    <li>privacy policy</li>
                    

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
