


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
    const userLoggedIn = localStorage.getItem('Uid') && localStorage.getItem('name');
    
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
        <div key={product.id} className="flex gap-8 items-start mb-8">
          {/* Back Button */}
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

          {/* Product Image */}
          <img
            src={product.url}
            alt={product.heading} // Descriptive alt text
            className="w-64 h-auto rounded-lg shadow-md"
          />

          {/* Product Details */}
          <div style={{ maxWidth: '600px' }}>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {product.heading}
            </h1>
            <p className="text-gray-600 text-base mb-5" style={{ lineHeight: '1.6' }}>
              {product.discription}
            </p>
            <p className="text-lg font-bold mb-2 text-gray-800">
              Price: <span className="text-green-600">${product.price}</span>
            </p>
            <p className="text-lg font-bold text-white bg-green-600 rounded px-2 py-1 mb-4 inline-block">
  {product.rating} <span className="text-white">⭐</span>
</p>
<br />
<button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => tocart(product)}>
  Add to Cart
</button>

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
