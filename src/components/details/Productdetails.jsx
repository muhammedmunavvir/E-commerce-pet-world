


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { carthandle } from '../foraddcart/Addcart';


const Productdetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
   
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/products");
        setProducts(res.data);
      } catch  {
        console.log("Error");
      }
    };
    fetchProducts();
  }, []);

  const filtered = products.filter((item) => item.id === id);



 
 const navigate=useNavigate()
  const tocart = async (product) => {
    const userLoggedIn = localStorage.getItem('Uid') && localStorage.getItem('userEmail');
    
    if (userLoggedIn) {
      await carthandle(product);
    } else {
     
      alert("you want to login to add product")
      navigate("/login");
    }
  };

const nav=useNavigate()
const backclickhandle=()=>{
  nav(-1)
}
  

  return (
    
    <div style={{ padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      {filtered.length > 0 ? (
        filtered.map((product) => (
          <div key={product.id} style={{ display: 'flex', gap: '30px', alignItems: 'start' }}>
            {/* Product Image */}
            <button 
  onClick={backclickhandle} 
  className="flex items-center px-4 py-2 bg-gray-400 text-white text-sm font-semibold rounded-lg hover:bg-gray-500 transition duration-300"
>
  <svg 
    className="w-4 h-4 mr-2" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M15 12H3m0 0l9-9m-9 9l9 9" 
    />
  </svg>
  Back
</button>

            <img
              src={product.url}
              alt={product.heading}
              style={{
                width: '250px',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />

            {/* Product Details */}
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{ color: '#333', fontSize: '26px', marginBottom: '15px' }}>
                {product.heading}
              </h1>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
                {product.discription}
              </p>
              <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
                Price: <span style={{ color: '#28a745' }}>${product.price}</span>
              </p>
              <p style={{ fontSize: '16px', color: '#888' }}>
                Rating: <span style={{ color: '#ffc107' }}>{product.rating} / 5</span>
              </p>

              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"

              
             onClick={()=>tocart(product)}  >Add to Cart</button>
            </div>
          </div>
        ))
      ) : (
        <p>No product found with ID {id}.</p>
      )}
    </div>
  );
};

export default Productdetails;
