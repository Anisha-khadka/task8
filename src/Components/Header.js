import React from "react";
import image1 from "../Images/image1.png";
import { Link } from "react-router-dom";
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
         <li><Link className="nabar" to="/">Home</Link></li> 
          <li><Link className="nabar" to="/cleaning">Cleaning Services</Link></li>
          <li><Link className="nabar" to="/about">About us</Link></li>
          <li><Link className="nabar" to="/register">Contact us</Link></li>
        </ul>
        </div>
      </div>
    </>
  );
}
