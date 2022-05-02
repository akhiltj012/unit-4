import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";


export const Products = () => {
  const [data ,setdata]=useState([])
  
  
    useEffect(()=>{
           axios.get("https://movie-fake-server.herokuapp.com/products")
           .then((res)=>{
             setdata(res.data)
             console.log(res.data);
           })
    },[])
  
    const Sortprice=(item,order)=>{
  
      axios.get(`https://movie-fake-server.herokuapp.com/products?_sort=${item}&_order=${order}`)
      .then((res)=>{
  
        setdata(res.data)
        
        
      })
      
    }
  
    
  
    
    
  
  
  
  
  
    return (
      <div>
        <div >
          <button onClick={()=>{
            Sortprice("price","asc")
          }}>Low to High</button>

          <button onClick={()=>{
            Sortprice("price","desc")
          }} className="sortDesc">High to low</button>
         
        </div>
      
          {data.map((data, index) => {
            return (
             <Grid>
               <div>
                 <h3>{data.title}</h3>
                 <img src={data.image} alt="" />
                 <h4>{data.brand}</h4>
                 <p>Price:{data.price}</p>
               </div>
             </Grid>
            );
          })}
       
    </div>
  );
};
