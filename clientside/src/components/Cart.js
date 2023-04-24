

import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../services/config.json";
// import Products from "./products";
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
    }, [])
    

    return(
    <div className="container">
        { cartItems.map((item)=>(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
              
                    
                       {
                        item.map((val, key) =>{
                            return(
                                <tr key ={key}>
                                    <td>{val.name}</td>
                                    <td>{val.price}</td>
                                </tr>
                            )
                        })
                       }
                    
                
            </table> 
))}
        </div>
    );
}

export default Cart;