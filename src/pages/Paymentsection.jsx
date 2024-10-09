import React, { useState,useEffect } from 'react';
// import Cartpage from './Cartpage';  // Import the Cartpage component
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const Paymentsection = () => {
const  nav=useNavigate();

const [cart, setCart] = useState([]);
    const [order,setOrder]=useState([])
    const user = localStorage.getItem("Uid");

    useEffect(() => {
      cartDisplay();
    }, [cart]);

    const cartDisplay = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/users/${user}`);
        setCart(res.data.cart);
        setOrder(res.data.orderdetails)
      } catch  {
        console.log("Error");
      }
    };

    // total amount

    const a=cart.map((item)=>item.price*item.qty);
    let totalA=a.reduce((acc,cur)=>acc+=cur,0);

    // adrres

    const [address,setAddress]=useState({
      address:"",
      city:"",
      state:"",
      zipcode:"",
      paymentMethode:""



    })

    const handleChange=(e)=>{
      const {value,name}=e.target;

      setAddress({...address,[name]:value})

    }

                   
// clear cart , order deatails
    const clearcart = async () => {
      try {
      await axios.patch(`http://localhost:5000/users/${user}`,{orderdetails:[...order,{products:cart,address:address,id:Date.now(),amount:totalA}]})   
      await axios.patch(`http://localhost:5000/users/${user}`,{cart:[]})  //it for clear the cart 
      } catch { 
        console.log("Error");
      } 
    };

 const submithandle=(e)=>{                                           
  e.preventDefault()
  clearcart()
  cartDisplay()
  

  nav("/ordersum")
 }
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Payment Section</h2>

      {/* Cart Page */}
      {/* <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart</h3>
        <Cartpage />
      </div> */}

      {/* Payment Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-6 text-gray-700">Payment Details</h3>
        <form className="space-y-6" onSubmit={submithandle} >

          {/* Address Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">Address</label>
              <input
              name='address'
              onChange={handleChange}
                type="text"
                placeholder="Enter your address"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">City</label>
              <input
              name='city'
              onChange={handleChange}
                type="text"
                placeholder="Enter your city"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">State</label>
              <input
              name='state'
              onChange={handleChange}
                type="text"
                placeholder="Enter your state"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Zip Code</label>
              <input
              name='zipcode'
              onChange={handleChange}
                type="text"
                placeholder="Enter your zip code"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-700 mb-4">Select Payment Method</h4>
            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input type="radio" onChange={handleChange} name="paymentMethod" value="UPI" className="form-radio text-blue-500" required />
                <span className="text-gray-700">UPI</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" onChange={handleChange} name="paymentMethod" value="Card" className="form-radio text-blue-500" required />
                <span className="text-gray-700">Card</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" onChange={handleChange} name="paymentMethod" value="Cash" className="form-radio text-blue-500" required />
                <span className="text-gray-700">Cash on Delivery</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Paymentsection;
