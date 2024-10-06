import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


export const Adminhome = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-blue-600 w-full text-white py-6 mb-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center">Admin Panel</h1>
      </header>
      
      <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-center">
        <NavLink 
          to="dashboard" 
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="userlist" 
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-300"
        >
          All Users
        </NavLink>
        <NavLink 
          to="category" 
          className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-700 transition duration-300"
        >
          Categories
        </NavLink>
        <NavLink 
          to="Addproducts" 
          className="bg-purple-500 text-white px-6 py-3 rounded hover:bg-purple-700 transition duration-300"
        >
          Add Products
        </NavLink>
        <NavLink 
          to="home" 
          className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-700 transition duration-300"
        >
          Home
        </NavLink>

      </nav>
      <div>
        <div>
            <Outlet/>
        </div>
      </div>
    </div>
  );
};
