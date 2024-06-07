import React, { useState } from "react";
import image1 from "../Images/img16.png";
import "../style.css";
import { useHotkeys } from "react-hotkeys-hook";

export default function Contact() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [inputtext, setInputtext] = useState("");
  const [successmsg, setSucessmsg] = useState("");
  const [error, setError] = useState({});
  const saveInfo = (e) => {
   if (e) {
    e.preventDefault();
  }
    const errors = {};
    const obj = {
      firstName,
      lastName,
      email,
      number,
      inputtext,
    };
    if (firstName === "") errors.firstName = "Firstname is required";
    if (lastName === "") errors.lastName = "lastname is required";
    if (email === "") errors.email = "Email is required";
    if (number === "" || number.length!==10) errors.number = "10 digit Phoneno. is required";
    if (inputtext === "") errors.inputtext = "message is required";

    setError(errors);
    if (Object.keys(errors).length === 0) {
      localStorage.setItem("contacts", JSON.stringify(obj));
      setSucessmsg("success!!");
      setFirstname("");
      setLastname("");
      setEmail("");
      setNumber("");
      setInputtext("");

      //clear the success msg
      setTimeout(() => {
        setSucessmsg("");
      }, 1000);
    }
  };

  useHotkeys("enter",(e)=>{
    console.log("Event object:", e);
    e.preventDefault();
    saveInfo();

  },
  { enableOnFormTags: ["input", "select", "textarea"] }
)

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
              <input
                type="text"
                id="firstname"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
              />

              {error.firstName && (
                <p style={{ color: "red", padding: "10px" }}>
                  !{error.firstName}
                </p>
              )}
              <input
                type="text"
                id="lastname"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
              />
              {error.lastName && (
                <p style={{ color: "red", padding: "10px" }}>
                  !{error.lastName}
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                id="emailaddress"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && (
                <p style={{ color: "red", padding: "10px" }}>!{error.email}</p>
              )}
              <input
                type="number"
                id="number"
                placeholder="Phone no."
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              {error.number && (
                <p style={{ color: "red", padding: "10px" }}>!{error.number}</p>
              )}
            </div>

            <textarea
              id="inputText"
              name="inputText"
              placeholder="Message..."
              rows="4"
              cols="47"
              style={{ resize: "none" }}
              value={inputtext}
              onChange={(e) => setInputtext(e.target.value)}
            ></textarea>

            {error.inputtext && (
              <p style={{ color: "red", padding: "10px" }}>
                !{error.inputtext}
              </p>
            )}
            <br />
            <button onClick={saveInfo}>Send Message</button>
            {successmsg && (
              <p
                style={{
                  color: "white",
                  backgroundColor: "green",
                  width: "80px",
                  height: "30px",
                  margin: "10px",
                  textAlign: "center",
                  borderRadius: "5px",
                }}
              >
                {successmsg}
              </p>
            )}
            <div class="polygon">
              <p>Schedule an Appointment</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
