

import React {useState, useEffect } from "react";
import axios from "axios";
import config from "../services/config.json";
import { useEffect, useState } from "react";
function Cart(){
    const [cartItems, setcartItems] = useState([]);

    useEffect(() =>{
        const fetchCarditems = async(items)=>{
            try{
                const response = await axios.get(`${config.api_base_url}/cart/items`);
                setcartItems(response.data);
                console.log(response.data);

            } catch(error){
                console.log(error);
            }
        };
        fetchCarditems();
    }, [];)

    return(
        <div className="container"></div>
    );
}

export default Cart;