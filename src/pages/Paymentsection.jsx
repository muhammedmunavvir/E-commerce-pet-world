import React, { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config/apiconfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const PaymentSection = () => {
  const [details, setDetails] = useState({
    address: "",
    city: "",
    state: "",
    zipCode: "",
    paymentmethod: "",
  });

  const [loading, setLoading] = useState(false); // For handling loading state
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Submit Payment Handler
  const submitHandle = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { address, city, state, zipCode, paymentmethod } = details;
      console.log("payment method", paymentmethod);
      // Create the order
      const response = await axios.post(`${API_BASE_URL}/api/payment`, {
        shippingAddress: { address, city, state, zipCode },
        paymentmethod,
      });
      console.log("asdfghjk", response);
      const orderID = response.data.razorpay_order_id;

      if (paymentmethod === "UPI") {
        navigate("/razorpaycheckflow", {
          state: { totalAmount: response.data.totalAmount, orderID: orderID },
        });
      } else {
        navigate("/ordersum");
        toast.success("Payment successfull ");
      }

      // Redirect based on payment method
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Error processing payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Payment Section
      </h2>

      {/* Payment Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-6 text-gray-700">
          Payment Details
        </h3>
        <form className="space-y-6" onSubmit={submitHandle}>
          {/* Address Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">Address</label>
              <input
                name="address"
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
                name="city"
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
                name="state"
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
                name="zipCode"
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
            <h4 className="text-xl font-semibold text-gray-700 mb-4">
              Select Payment Method
            </h4>
            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  onChange={handleChange}
                  name="paymentmethod"
                  value="UPI"
                  className="form-radio text-blue-500"
                  required
                />
                <span className="text-gray-700">UPI</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  onChange={handleChange}
                  name="paymentmethod"
                  value="Card"
                  className="form-radio text-blue-500"
                  required
                />
                <span className="text-gray-700">Card</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  onChange={handleChange}
                  name="paymentmethod"
                  value="cash"
                  className="form-radio text-blue-500"
                  required
                />
                <span className="text-gray-700">Cash on Delivery</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {loading ? "Processing..." : "Submit Payment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentSection;
