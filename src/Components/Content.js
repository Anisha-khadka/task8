import React from "react";
import image1 from "../Images/img10.png";
import { Category1 } from "./Category1";
import image2 from "../Images/img15.png"
export default function Content() {
  return (
    <>
      <div className="content2">
        <div className="content2left">
          <img src={image1} alt="" />
          <div>
            <h3>PROFESSIONAL HOUSE CLEANING</h3>
            <h2>____</h2>
            <h1>FREE ESTIMATE</h1>
          </div>
        </div>

        <div className="content2right">
          <h1>
            Know Something <br /> About Our Company
          </h1>
          <p>
            There's no greater feeling than coming back to work to an empty
            trash can after stuffing your receptacle with the previous day's
            food, paper, and other refuse. Tasks like trash removal and other
            janitorial services add up and leave your business in a radiant
            condition. With more than 30 years of experience, we have ensured
            customer satisfaction by taking to heart every customer's feedback.
            We strive to improve the way cleaning is done in Birmingham,
            Alabama. Make CCC your first choice for commercial cleaning.
          </p>
          <h3 style={{ paddingTop: "20px" }}>Mission Statement</h3>
          <p>
            he mission of Classic Commercial Cleaning is to give our clients
            outstanding customer service and quality services while remaining
            affordable.
          </p>
          <button>Read more</button>
        </div>
      </div>

      <div className="content3">
        <h1 style={{textAlign:"center",color:"#3f5d97"}}>CC Cleaning Service</h1>
        <p style={{textAlign:"center",color:"gray"}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          nemo, minima vitae
        </p>
        <div className="content3inner">
        {Category1.map((value) => (
          <div>
            <img src={value.img} alt="" />
           <h3> {value.heading}</h3>
           <p> {value.des}</p>
          <i class="fa-solid fa-arrow-right"></i>
          </div>
        ))}
        </div>
      </div>
      
      <div className="content4">
        <div>
        <div className="content4inner">
          <div>01</div>
        </div>
        <h5> Submit a <br/> few details.</h5>
        </div>
        <div>
        <div className="content4inner">
          <div>01</div>
        </div>
        <h5>We will schedule a <br/> walk-through.</h5>
        </div>
        <div>
        <div className="content4inner">
          <div>01</div>
        </div>
        <h5>Get a quote!</h5>
        </div>
        
      </div>


      <div className="content5">
        <div className="content5left">
        <h1 style={{color:"#264279"}}>Impressive & Clean <br/> Businesses with CC <br/> commercial Cleaning</h1>
        <p>Your office should reflect the professionalism and esteem of your company. CCC can deliver the impressive results your customers, clients, and employees expect when they walk into your business. Based in Birmingham, Alabama, we set the bar when it comes to commercial janitorial services that are ideal for office buildings, warehouses, plants, and factories. Simply put: nothing is left out, and no dirt is kept in!</p>
        <h5>Call us today at:  <button>(205)484-9624</button></h5>
        </div>
        <div className="content5right">

          <img src={image2} alt=""/>
        </div>
      </div>
    </>
  );
}
