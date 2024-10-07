
import {toaster,toast} from 'sonner'
import axios from "axios";


export const carthandle = async (product) => {
  const user = localStorage.getItem("Uid");

  if (user) {
    try {
      const res = await axios.get(`http://localhost:5000/users/${user}`);
      const currentcart = res.data.cart;

      const exist = currentcart.find((cart) => product.id === cart.id);
      if (exist) {
        alert("This Item already in your cart ");
      } else {
        const updatedcart = [...currentcart, product];
       await axios.patch(`http://localhost:5000/users/${user}`, { cart: updatedcart,
         
        });
        // alert("Item Successfully added to the cart..!");
        toast.success('This is a notification!');
      }
    } catch {
      console.log("Error");
    }
  }
 
};
