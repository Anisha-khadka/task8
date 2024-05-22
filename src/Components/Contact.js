import React from "react";
import image1 from "../Images/img16.png";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contactleft">
          <img src={image1} alt="" />
          <div className="contactleftinside">
            <h1>Contact</h1>
            <p>
              Thankyou for your interest. We look forward to <br /> hearing from
              you soon.
            </p>
            <div className="numbers">
              <i className="fa-solid fa-clock"></i>
              <div>
                <p>Hours Of Operation</p>
                <p>Mon-Fri: 9AM -5PM</p>
              </div>
            </div>
            <div className="numbers">
              <i className="fa-solid fa-phone"></i>
              <div>
                <p>24/7 Emergency Service</p>
                <p>(205) 484-9624</p>
              </div>
            </div>
            <div className="numbers">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <p>Service Area</p>
                <p>Birmingham,AL</p>
              </div>
            </div>
          </div>
        </div>



        <div className="contactright">
        <div class="form" id="form">
    <div>
        <input type="text" id="firstname" placeholder="First name"/>
        <input type="text" id="lastname" placeholder="Last name"/>

    </div>
    <div>
        <input type="email" id="emailaddress" placeholder="Email address"/>
        <input type="number" id="number" placeholder="Phone no."/>

    </div>
    
    <textarea id="inputText"  name="inputText" placeholder="Message..." rows="4" cols="47" style={{resize:"none"}}></textarea><br/>
  <button onclick="storemsg()">Send Message</button>
  <div class="polygon">
      <p>Schedule an Appointment</p>
  </div>
        </div>
    </div>
          
        
      </div>
    </>
  );
}
