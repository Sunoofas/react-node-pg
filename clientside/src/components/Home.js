import React from "react";
//  import Login from "./login";
// import Products from "./products";
import { Link } from "react-router-dom";
// import Header from "./header";
// import Login from "./login";
// // import Header from "./header";
import './Home.css';



const Home =()=>{
    return(
        <div className="main-page">
           
      <button><Link to='/login'>Login</Link></button>
        </div>
    )
}
export default Home;
