import React, { useState } from "react";
import axios from "axios";
import './login.css';
import  {Link, useNavigate}  from "react-router-dom";

import config from "../services/config.json";


function Login(){
    
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
   
    const navigate = useNavigate();
   const login = async()=>{
    try {
    const response = await axios.post(`${config.api_base_url}/member/Login`, {
     username: username,
      password: password,
    });

    
    console.log(response.data);

    // check if login is successful
    if (response.data.success) {
      // navigate to home page
      alert("User has been successfully logged in!");
      navigate("/products");

      // show success alert
      // alert("User has been successfully logged in!");
    } else {
        // show error alert
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);

    // show error alert
    alert("Invalid email or password. Please try again later.");
  }
};
    
   
    return(
        <div className="form">
            <form action="">
           <div>
              <label>Email</label>
              <input type="text" name=""id="email"value={username} onChange={(e)=>setUsername(e.target.value)}/>

           </div>
           <div>
               <label>Password</label>
               <input type="password" name="password" id="password"value={password}onChange={(e)=>setPassword(e.target.value)}/>

           </div>
           <button type="submit" className="button" onClick={login}>Login</button>
           </form>
          
        </div>
    )
}

export default Login;