import React from "react";
import image1 from "../Images/image1.png";
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="headerleft">
          <div>
            {" "}
            <i class="fa-regular fa-clock"> </i>
            <p>&nbsp; Mon-Fri: 9AM-%PM</p>
          </div>
          <div>
            {" "}
            <i class="fa-solid fa-phone"></i>
            <p>&nbsp;(205)484-9624</p>
          </div>
        </div>
        <div className="headerright">
          <h3>Get appointment now</h3>
        </div>
      </div>

      <div className="navbar">
        <div className="navbarleft">
          <img src={image1} alt="" />
        </div>
        <div className="navbarright">
        <ul>
          <li>Home</li>
          <li>Cleaning Services</li>
          <li>Floor Care</li>
          <li>Contact us</li>
        </ul>
        </div>
      </div>
    </>
  );
}
