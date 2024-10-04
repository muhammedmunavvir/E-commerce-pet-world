import React from 'react';
import { NavLink } from 'react-router-dom';

export const Heropage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-purple-500 text-white py-10 px-4 sm:py-16 sm:px-6 md:py-20 md:px-10 relative overflow-hidden">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start p-4 sm:p-6 md:p-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
            Welcome to Paw Palace!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 animate__animated animate__fadeIn">
            Your one-stop shop for all pet needs. Discover quality products at unbeatable prices!
          </p>
          <NavLink
            to="/Allproducts"
            className="bg-white text-blue-500 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow hover:bg-gray-200 transition duration-300 animate__animated animate__bounce"
          >
            Shop Now
          </NavLink>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center relative mt-8 lg:mt-0">
          <div className="relative w-full lg:w-4/5">
          <img
                        src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

              alt="Happy Dog"
              className="w-4/5 h-auto object-cover rounded-lg shadow-lg absolute top-0 right-0 transform transition-transform duration-500 hover:scale-105"
            />


            <img
                          src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

              alt="Happy Cat"
              className="w-4/5 h-auto object-cover rounded-lg shadow-lg absolute bottom-5 left-0 transform transition-transform duration-500 hover:scale-105 mt-[-6]"
            />
           
          </div>
        </div>

        {/* Decorative Elements */}
        <div className=""></div>
      </section>

      {/* Categories Section */}
      <section className="py-10 px-4 bg-white">
        <h2 className="text-center text-3xl font-bold mb-6"></h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Dog Category */}
          <div className="bg-gray-100 rounded-lg shadow-lg m-4 p-6 flex flex-col items-center transition-transform transform hover:scale-105">
            <img
              src="https://images.pexels.com/photos/46505/swiss-shepherd-dog-dog-pet-portrait-46505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Dog Category"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Dog Products</h3>
            <NavLink to="/dogproducts" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
              Shop Now
            </NavLink>
          </div>

          {/* Cat Category */}
          <div className="bg-gray-100 rounded-lg shadow-lg m-4 p-6 flex flex-col items-center transition-transform transform hover:scale-105">
            <img
              src="https://images.pexels.com/photos/16371568/pexels-photo-16371568/free-photo-of-portrait-of-a-fur-cat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Cat Category"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Cat Products</h3>
            <NavLink to="/catproducts" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
              Shop Now
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};
