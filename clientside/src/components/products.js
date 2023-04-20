import React, {useState, useEffect} from "react";
import config from '../services/config.json';
import axios from "axios";
import Maincontent from "./Maincontent";

function Products(){
      
        const [cartItems, setcartItems] = useState([]);

      useEffect(() =>{
        const fetchCarditems = async () =>{
          try{
            const response = await axios.get(`/${config.api_base_url}/api/mallu_product`);
            const data = response.data;
            setcartItems(data);

          } catch(error) {
            console.error(error);
          }
        };
        fetchCarditems();
      }, []);

      const addToCart = async (item) =>{
        try{
          const response = await axios.post(`${config.api_base_url}/cart/items/add`,item);
          console.log(response.data);
          
        } catch (error){
          console.error(error);
          
        }
      };
      return(
        <
     <div className="container">
        {cartItems.map((item)=>(

        
        <div className="card" key={item.id}>
        <div className="card_img">
            <img src={item.thumb} />
        </div>
        <div className="card_header">
            <h2>{item.product_name}</h2>
            <p className="price">{item.price}</p>
            <div ><button className="btn" onClick={()=>console.log("hello button!!")}>Add to cart</button></div>
        </div>
      </div>
      ))}  
</div>  
      )
      };

export module Products;