
import { toast } from "react-toastify";
import axios from "axios";


export const carthandle = async (product) => {
  const user = localStorage.getItem("Uid");

  if (user) {
    try {
      const res = await axios.get(`http://localhost:5000/users/${user}`);
      const currentcart = res.data.cart;

      const exist = currentcart.find((cart) => product.id === cart.id);
      if (exist) {
        toast.info("This item is already in your cart");
      } else {
        const updatedcart = [...currentcart, product];
       await axios.patch(`http://localhost:5000/users/${user}`, { cart: updatedcart,
         
        });
      toast.success("Item Successfully added to the cart..!")
     
      }
    } catch {
      console.log("Error");
    }
  }
 
};
