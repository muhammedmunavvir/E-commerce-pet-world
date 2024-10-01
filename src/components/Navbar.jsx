import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-gray-900 shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">Paw Palace</h1>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="text-gray-300 hover:text-white">
              Home
            </NavLink>
            <NavLink to="/Allproducts" className="text-gray-300 hover:text-white">
              Products
            </NavLink>
            <NavLink to="/login" className="text-gray-300 hover:text-white">
              Login
            </NavLink>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center ml-4">
            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-teal-500 text-white rounded-r-md px-4 py-2 hover:bg-teal-600">
              Search
            </button>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
  <NavLink to="/cartpage" className="bg-teal-500 text-white flex items-center px-4 py-2 rounded-full hover:bg-teal-600 transition duration-300">
    {/* Cart Icon */}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path d="M7 4v1h10l1 5H7V4zm0 1h11.5l-.25 1.25H7V5zm0 4h11l-1 5H6V9zm0 0h11l-1 5H6V9zM5 3H3v2h2V3zm-1 8H3v2h1.5l-.5-2z" />
    </svg>
    Cart
  </NavLink>
</div>


          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
