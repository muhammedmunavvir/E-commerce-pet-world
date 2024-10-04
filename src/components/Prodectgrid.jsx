


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Prodectgrid = () => {
  const [featuredproducts, getfeaturedproducts] = useState([]);

 



  useEffect(() => {
    const getproduct = async () => {
      try {
        const res = await axios.get("http://localhost:5000/products");
       
        getfeaturedproducts(res.data);
      } catch {
        console.log("error fetching products");
      }
    };

    getproduct();
  }, []);

  const featured = featuredproducts.filter((item) => item.rating > 4.4);

  const nav=useNavigate()
  const fordetails=(id)=>{
   
      nav(`/Productdetails/${id}`)
  }

  return (  
    <div>
    <section className="container mx-auto px-6 py-12">
      <h3 className="text-3xl font-bold text-gray-700 mb-8">Featured Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          featured.map((obj) => (
            <div onClick={()=>fordetails(obj.id)}  key={obj.id} className="bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105">
              <img src={obj.url} alt={obj.name} className="w-full h-45 object-fill rounded-md" />
              <p>{obj.heading}</p>
              <h4 className="text-xl font-semibold mt-2">{obj.name}</h4>
              <p className="text-gray-600">${obj.price}</p>
             
            </div>
          ))
        }
      </div>
    </section>


    <section> {/*for categaries*/}
     
   
      

    </section>
    </div>

   
  );
};



