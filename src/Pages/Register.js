import React, { useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const[shouldfetch,setshouldfetch]=useState(false);

  const saveInfo = (e) => {
    e.preventDefault();
    const errors = {};

    if (name === "") errors.name = "Name is required";
    if (email === "") errors.email = "Email is required";
    if (password === "") errors.password = "Password is required";
    setError(errors);
  
  if (Object.keys(errors).length === 0) {
    const objects = {
      name,
      email,
      password,
    };
    localStorage.setItem("result", JSON.stringify(objects));
    setName("");
    setEmail("");
    setPassword("");
  }
}

useHotkeys("enter",(e)=>{
  e.preventDefault();
  saveInfo();
}, { enableOnFormTags: ["input", "select", "textarea"] })

  return (
    <>
    <main>
      <div className="registerform">
        <h1>Register Here</h1>
        
        <div>
          {" "}
          <i class="fa-solid fa-user"></i>{" "}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {error.name && <p style={{color:"red" , paddingLeft:"39px"}}>{error.name}</p>}
        <div>
          <i class="fa-solid fa-envelope"></i>{" "}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error.email && <p style={{color:"red", paddingLeft:"39px"}} >{error.email}</p>}
        <div>
          <i class="fa-solid fa-lock"></i>{" "}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error.password && <p style={{color:"red" , paddingLeft:"39px"}}>{error.password}</p>}
       
        <button className="btnregister" type='submit'>
          Register
        </button>
        
      </div>
      
    </main>
  </>
  )
}
