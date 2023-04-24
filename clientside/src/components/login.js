import React, { useState } from "react";
import axios from "axios";
import './login.css';

import config from "../services/config.json";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [datainput, setDataInput] = useState('');
    
    axios.defaults.withCredentials = true;

    const login =async()=>{
         try{
            const response = await axios.post(`${config.api_base_url}/member/login`,{
                email: email,
                password: password,
            });
            console.log(response)
           
         } catch(error){
            console.error(error);
         }
        };
    
    const submitThis=()=>{
        const info ={email:email, password:password};
        setDataInput(info);
    }
    return(
        <div class="form">
            <form action=""onSubmit={submitThis}>
           <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email"id="email"value={email} onChange={(e)=>setEmail(e.target.value)}/>

           </div>
           <div>
               <label htmlFor="password">Password</label>
               <input type="text" name="password" id="password"value={password}onChange={(e)=>setPassword(e.target.value)}/>

           </div>
           <button  class="button" type="submit">Login</button>
           </form>
        </div>
    )
}

export default Login;