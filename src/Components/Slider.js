import React from "react";
import image2 from "../Images/image2.png"
import image3 from "../Images/image3.jpeg"
import image4 from "../Images/image4.jpg"
import image5 from "../Images/image5.jpg"
import { Category } from "./Category";


export default function Slider() {
  return (
    <>
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          <div className="slide first">
          <div>
            <h1>GET CLEANED</h1>
            <p>with CC Commercial Cleaners</p>
           <div><button>Get appointment now</button></div> 
          </div>
            <img src={image2} alt="" />
          </div>
          <div className="slide">
            <img src={image3} alt="" />
          </div>
          <div className="slide">
            <img src={image4} alt="" />
          </div>
          <div className="slide">
            <img src={image5} alt="" />
          </div>
        
          <div className="navigation-manual">
            <label for="radio1" className="manual-btn"></label>
            <label for="radio2" className="manual-btn"></label>
            <label for="radio3" className="manual-btn"></label>
            <label for="radio4" className="manual-btn"></label>
          </div>
        </div>
      </div>
      

      <div className="content1">
  
            {Category.map((value,index)=>(
                <div>   
                    <img src={value.img} alt=""/>
                <div>  <p >{value.des}</p></div>
                
                </div>
             
              
              
            ))}
    
      </div>
    </>
  );
}
