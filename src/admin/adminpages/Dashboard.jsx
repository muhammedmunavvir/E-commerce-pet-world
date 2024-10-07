import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Dashboard = () => {


  const [totelu,setotel]=useState([])

  const getusers=async()=>{
    try{
       const res=await axios.get("http://localhost:5000/users")
       setotel(res.data)
    }
    catch{
         console.log("Error");
         
    }

  }
  useEffect(()=>{
    getusers()
  },[])
  const [totelp,setotelp]=useState([])

  const getproducts=async()=>{
    try{
       const res=await axios.get("http://localhost:5000/products")
       setotelp(res.data)
    }
    catch{
         console.log("Error");
         
    }

  }
  useEffect(()=>{
    getproducts()
  },[])
  const [totelorders,setotelorders]=useState({})

  const getorders=async()=>{
    try{
       const res=await axios.get("http://localhost:5000/users/orderitems")
       setotelorders(res.data)
       console.log(res.data);
       
    }
    catch{
         console.log("Error");
         
    }

  }
  useEffect(()=>{
    getorders()
  },[])
  return (


    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 lg:w-1/5 bg-gray-500 text-white p-5 space-y-4">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
        {/* <nav className="space-y-2">
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-500">Dashboard</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-500">Manage Users</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-500">Products</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-500">Orders</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-500">Settings</a>
        </nav> */}
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 lg:w-4/5 p-6 space-y-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center bg-white p-4 rounded shadow">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" >Notifications</button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/565/565422.png"
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Total Sales */}
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-lg font-semibold">Total Sales</h3>
            <p className="text-2xl font-bold mt-2">$25,000</p>
          </div>

          {/* Card 2: Total Orders */}
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-lg font-semibold">Total Orders</h3>
            <p className="text-2xl font-bold mt-2">1,500</p>
          </div>

          {/* Card 3: New Users */}
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-lg font-semibold"> Totel products</h3>
            <p className="text-2xl font-bold mt-2">{totelp.length}</p>
          </div>

          {/* Card 4: Pending Orders */}
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-lg font-semibold">totel users</h3>
            <p className="text-2xl font-bold mt-2">{totelu.length-1}</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <p>New order placed by John Doe</p>
              <span className="text-gray-600">2 hours ago</span>
            </div>
            <div className="flex justify-between">
              <p>User Sarah joined the platform</p>
              <span className="text-gray-600">5 hours ago</span>
            </div>
            <div className="flex justify-between">
              <p>Product "Dog Food" updated</p>
              <span className="text-gray-600">1 day ago</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


