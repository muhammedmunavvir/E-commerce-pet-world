import React from 'react';
import { useNavigate } from 'react-router-dom';

const Summarypage = () => {
  const navigate = useNavigate(); // Correctly calling useNavigate as a function

  const backclickhandle = () => {
    navigate('/'); // Navigate to the home page on button click
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      {/* Confirmation Message */}
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Order Confirmed!</h2>

      {/* Icon or Illustration */}
      <div className="flex justify-center mb-6">
        <svg
          className="w-16 h-16 text-green-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2l4-4M7 12l2 2l4-4"
          />
        </svg>
      </div>

      {/* Thank You Message */}
      <div className="text-center mb-6">
        <p className="text-lg font-medium text-gray-700">Thank you for your purchase! Your order has been successfully placed.</p>
        <p className="text-sm text-gray-500 mt-2">You will receive a confirmation email shortly.</p>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Details</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span className="text-gray-700">Order Number:</span>
            <span className="font-semibold text-gray-800">#123456</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-700">Total Amount:</span>
            <span className="font-semibold text-gray-800">$99.99</span>
          </li>
        </ul>
      </div>

      {/* Back to Home Button */}
      <div className="text-center mt-8">
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={backclickhandle} // Call the backclickhandle function on button click
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Summarypage;
