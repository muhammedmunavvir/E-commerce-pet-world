import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Navbar = () => {
  const [searchitem, setsearchitem] = useState("");
  const [products, setproducts] = useState([]);
  const [filtered, setfilter] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setproducts(response.data);
      } catch {
        console.log("Error fetching products");
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filterdata = products.filter((item) =>item.heading.toLowerCase().includes(searchitem.toLowerCase())  );
    setfilter(filterdata);
   
 }, [searchitem, products]);
 

  const handleItemClick = (item) => {
    setsearchitem(item.heading);
 
    fordetails(item.id); 
  };

  const fordetails = (id) => {
    navigate(`/productdetails/${id}`); // Navigate to product details page
  };

  const nav=useNavigate()
  function logout(){
    localStorage.removeItem('Uid')
    localStorage.removeItem('userEmail')
   window.confirm("Are you sure you want to logout?")
     nav("/")
  }

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-900 shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink className="text-2xl font-bold text-white" to="/">Paw Palace</NavLink>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="text-gray-300 hover:text-white">Home</NavLink>
            <NavLink to="/Allproducts" className="text-gray-300 hover:text-white">Products</NavLink>
          
          </nav>

          {/* Search Bar */}
          <div className="relative hidden md:flex items-center ml-4">
            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500"
              value={searchitem}
              onChange={(e) => setsearchitem(e.target.value)}
            />
            <button className="bg-teal-500 text-white rounded-r-md px-4 py-2 hover:bg-teal-600">Search</button>

            {/* Filtered Results */}
            {searchitem && filtered.length > 0 && (
              <div className="absolute z-10 mt- bg-white shadow-lg w-full max-h-60 overflow-y-auto border border-gray-300 rounded-md">
                {filtered.map((item) => (
                  <p 
                    key={item.id} 
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleItemClick(item)} // for item
                  >
                    {item.heading}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Cart Button with Badge */}
          <div className="hidden md:flex relative">
  <NavLink
    to="/cartpage"
    className="flex items-center justify-center border-2 border-teal-500 text-teal-500 bg-white rounded-full p-2 hover:bg-teal-500 hover:text-white transition duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l1 9h12l1-9h2M1 1h2l1 11h14l1-11h2" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
    </svg>
    {/* Badge for number of items in the cart */}
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
      {/* Replace this with your cart item count */}
      3
    </span>
  </NavLink>
</div>

<div className="relative ml-4">
  <NavLink to="/profile">
    <img 
      src="https://e7.pngegg.com/pngimages/798/436/png-clipart-computer-icons-user-profile-avatar-profile-heroes-black.png" 
      alt="Profile"
      className="h-10 w-10 rounded-full border-2 border-teal-500 hover:scale-105 transition duration-300"
    />
  </NavLink>
  <button 
    onClick={logout} 
    className="mt-1 text-teal-500 hover:text-teal-600 focus:outline-none"
  >
    Logout
  </button>
  <NavLink to="/login" className="text-gray-300 hover:text-white">Login</NavLink>
</div>



          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
