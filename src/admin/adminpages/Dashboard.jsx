import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Dashboard = () => {
  const [totelu, setotel] = useState([]);
  const [totelp, setotelp] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);

  const getusers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users");
      setotel(res.data);
    } catch {
      console.log("Error fetching users");
    }
  };

  const getproducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setotelp(res.data);
    } catch {
      console.log("Error fetching products");
    }
  };

  const getorders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users");
      const users = res.data;

      //get totel orders 
      const ordersCount = users.reduce((total, user) => total + user.orderdetails.length, 0);
      setTotalOrders(ordersCount);

    } catch {
      console.log("Error fetching orders");
    }
  };

  useEffect(() => {
    getusers();
    getproducts();
    getorders();
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <aside className="w-full md:w-1/4 lg:w-1/5 bg-gray-700 text-white p-5 space-y-4">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      </aside>
  
      <main className="w-full md:w-3/4 lg:w-4/5 p-6 space-y-6">
        <div className="flex justify-between items-center bg-white p-4 rounded shadow">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Notifications</button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/565/565422.png"
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded shadow text-center"> */}
    <img
src='https://media.istockphoto.com/id/539953664/photo/business-success-with-growing-rising-charts-and-businessman-in-background.jpg?s=612x612&w=0&k=20&c=s9ownrOZkwgHwZdr9AQqPpfMxwh-KwRZZxPnXbECQUo='
      className="w-full h-auto rounded" // Move className here
    />
 
{/* </div> */}

 
          {/* Total Orders */}
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded shadow text-center">
            <h3 className="text-lg font-semibold">Total Orders</h3>
            <p className="text-2xl font-bold mt-2">{totalOrders}</p>
          </div>
  
          {/* Total Products */}
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white p-6 rounded shadow text-center">
            <h3 className="text-lg font-semibold">Total Products</h3>
            <p className="text-2xl font-bold mt-2">{totelp.length}</p>
          </div>
  
          {/* Total Users */}
          <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-white p-6 rounded shadow text-center">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-2xl font-bold mt-2">{totelu.length}</p>
          </div>
        </div>
      </main>
    </div>
  );
}  