

  import axios from 'axios';
  import React, { useEffect, useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { toast } from 'react-toastify';

  const Cartpage = () => {
    const [cart, setCart] = useState([]);
    const user = localStorage.getItem("Uid");

    useEffect(() => {
      cartDisplay();
    }, [cart]);

    const cartDisplay = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/users/${user}`);
        setCart(res.data.cart);
        
      } catch  {
        console.log("Error");
      }
    };

  //...................................

  const removeitem = async (product) => {
    try {
      
      const updatedCart = cart.filter(item => item.id !== product.id);
      // the product id check to item id . and exclude matching product .  and return new arrAY TO updatecart.
      // it only remove from display
      toast.warning("Item removed from your cart")

      setCart(updatedCart); // Update cart in state

      // Update cart in  backend
    await axios.patch(`http://localhost:5000/users/${user}`,{cart:updatedCart})   
    } catch (error) {
      console.log("Error removing item", error);
    } 
  };
  //.......................................................
  



  const nav =useNavigate()
  const paymenthandle=()=>{
    nav("/payment")
  }


  // incr qty

  const inc=async(id)=>{
    await axios.patch(`http://localhost:5000/users/${user}` ,{
      cart:cart.map((item)=>item.id===id? {...item,qty:item.qty+1}:item)
    });

    cartDisplay()
  }

  //dec qty
   const dec=async(id)=>{
    await axios.patch(`http://localhost:5000/users/${user}`,{
      cart:cart.map((item)=>item.id===id ?{...item,qty:item.qty-1}:item)
    })
    cartDisplay()
   }


   return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Your Cart</h1>
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg p-6 flex flex-col items-center bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.url}
                alt={product.name}
                className="w-36 h-36 object-cover mb-4 rounded-lg shadow-md"
              />
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 text-sm mt-2">Price: ${product.price * product.qty}</p>
              <div className="flex items-center space-x-4 mt-4">
  <button
    onClick={() => inc(product.id)}
    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
  >
    +
  </button>
  <h3 className="text-xl font-semibold text-gray-800">{product.qty}</h3>
  <button
    onClick={() => dec(product.id)}
    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
  >
    -
  </button>
</div>

              <button
                className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
                onClick={() => removeitem(product)}
              >
                Remove from Cart
              </button>
            </div>
          ))}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center mt-6">
            <button
              className="w-full max-w-lg px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              onClick={paymenthandle}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      ) : (
        <p className="text-lg text-center text-gray-600">No items in the cart.</p>
      )}
    </div>
  );
  
};

export default Cartpage;