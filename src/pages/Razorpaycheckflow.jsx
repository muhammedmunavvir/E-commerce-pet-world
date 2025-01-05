import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"; // Import axios
import API_BASE_URL from "../config/apiconfig"; // Replace with your API config file path

export const Razorpaycheckoutpage = () => {
  const location = useLocation();
  const { totalAmount } = location.state || {}; // Get the totalAmount from the state passed during navigation

  console.log("Total Amount:", totalAmount); // Check the totalAmount

  useEffect(() => {
    const initializeRazorpay = () => {
      if (!totalAmount) {
        alert("Total amount not found");
        return;
      }

      if (isNaN(totalAmount) || totalAmount <= 0) {
        alert("Invalid amount.");
        return;
      }

      console.log("Amount in INR:", totalAmount);
      console.log("Amount in paise:", totalAmount * 100); // Verify if conversion to paise is happening correctly

      const options = {
        key: "rzp_test_mT24oZA21qREv5", // Replace with your Razorpay key
        amount: totalAmount * 100, // Razorpay expects the amount in paise (1 INR = 100 paise)
        currency: "INR",
        name: "Paw Palace",
        description: "Test Transaction",
        image: "https://your-logo-url.com/logo.png", // Optional logo URL
        handler: async function (response) {
            try {
              // Log the entire response object to understand its structure
              console.log("Razorpay Response:", response);
          
              // Check if razorpay_order_id and razorpay_signature are nested
              const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
          
              console.log("Payment ID:", razorpay_payment_id); // Log the payment ID
              console.log("Order ID:", razorpay_order_id); // Check if order ID is available
              console.log("Signature:", razorpay_signature); // Check if signature is available
          
              // If order ID and signature are missing, check the structure
              if (!razorpay_order_id || !razorpay_signature) {
                console.log("Order ID or Signature not found. Checking if they are available under different keys.");
              }
          
              // Send data to the backend to verify payment
              const verifyResponse = await axios.post(
                `${API_BASE_URL}/api/verify-payment`, 
                {
                  razorpay_payment_id,
                  razorpay_order_id,
                  razorpay_signature
                }
              );
          
              console.log("Payment verification response:", verifyResponse.data);
          
              if (verifyResponse.data.success) {
                alert("Payment verified successfully!");
              } else {
                alert("Payment verification failed.");
              }
            } catch (error) {
              console.error("Verification Error:", error);
              alert("Payment verification failed due to a server error.");
            }
          },
          
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    };

    const loadRazorpayScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = initializeRazorpay; // Trigger checkout once the script is loaded
      document.body.appendChild(script);
    };

    loadRazorpayScript();
  }, [totalAmount]);

  return (
    <div className="text-center mt-10">
      <h1 className="text-xl font-bold">Redirecting to Razorpay...</h1>
    </div>
  );
};
