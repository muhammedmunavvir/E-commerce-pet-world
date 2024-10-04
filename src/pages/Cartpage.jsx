

  import axios from 'axios';
  import React, { useEffect, useState } from 'react';
  import { useNavigate } from 'react-router-dom';

  const Cartpage = () => {
    const [cart, setCart] = useState([]);
    const user = localStorage.getItem("Uid");

    useEffect(() => {
      const cartDisplay = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/users/${user}`);
          setCart(res.data.cart);
        } catch  {
          console.log("Error");
        }
      };

      cartDisplay();
    }, [user]);

  //...................................

  const removeitem = async (product) => {
    try {
      
      const updatedCart = cart.filter(item => item.id !== product.id);
      // the product id check to item id . and exclude matching product .  and return new arrAY TO updatecart.
      // it only remove from display

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cart.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-md p-4 flex flex-col items-center">
             <img src={product.url} alt={product.name} className="w-32 h-32 object-cover mb-2 rounded" />

              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">Price: ${product.price}</p>
              <button
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                onClick={() => removeitem(product)}
              >
                Remove from Cart
              </button>
            </div>
          ))}
          {/* Centering the button within the grid */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center mt-4">
            <button
              className="w-full max-w-md px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              onClick={paymenthandle}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      ) : (
        <p className="text-lg text-gray-600">No items in the cart.</p>
      )}
    </div>
  );
};

export default Cartpage;