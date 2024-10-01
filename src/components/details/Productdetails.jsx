// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const Productdetails = () => {
//  const  {id}= useParams()


//  const[url,geturl]=useState([])

//  useEffect(()=>{
//     const fetchproducts=async()=>{
//         try{
//            const res=await axios.get("http://localhost:5000/products")
//            geturl(res.data) 
//         }
//         catch{
// console.log("Error");
         
//         }
//     }
//     fetchproducts()
//  },[])

// const filtered=url.filter((item)=>item.id===id)
        
 
//   return (
//     <div>Productdetails
//    {
//     filtered.map((obj)=>(
//         <div >
//         <img src={obj.url} alt="" />
//         <p>{obj.heading}</p>
//         </div>
//     ))
//    }
//     </div>
//   )
// }                               

// export default Productdetails


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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



  // const addProduct=async()=>{
  //   const user=localStorage.getItem("Uid")
  //   const res=await axios.post(`http://localhost:5000/users/${user}`,{cart:[...filtered,filtered]})
  // }

 const tocart =async(product)=>{
   await carthandle(product)
 
}

  return (
    <div style={{ padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      {filtered.length > 0 ? (
        filtered.map((product) => (
          <div key={product.id} style={{ display: 'flex', gap: '30px', alignItems: 'start' }}>
            {/* Product Image */}
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
              
              onClick={()=>tocart(product)}>Add to Cart</button>
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
