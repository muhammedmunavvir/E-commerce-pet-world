import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

export const Adminhome = () => {

//   //function for accessing admin to admin page

//   const [user,setusers]=useState(false)
// const id=localStorage.getItem("Uid")

// const nav=useNavigate()
//    const getuser=async()=>{
//       try{
//        const res=await axios.get(`http://localhost:5000/users/${id}`)
//        if(res.data.admin) {
//         setusers(true)
//        }else{
//         setusers(false)
//        }
  
       
//       }
//       catch{ 
//         console.log("Error");
        
//       }
//    }    
// useEffect(()=>{
//   getuser()
// },[])
   

// if(!user){
//    return(<div><h1>Not accessible</h1></div>)
    
   
// }



const logout=()=>{
//     localStorage.removeItem("Uid")
//     localStorage.removeItem("name")
//     localStorage.removeItem("userEmail")
//     localStorage.removeItem("admin")
// nav("/")

}


  return (
    <div className="min-h-screen flex " style={{background:"#5d6e6e"}} >
      {/* Sidebar */}
      <aside className="w-64  text-white flex flex-col p-6" style={{background:"#255c4f"}}>
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel</h1>
        <nav className="flex flex-col space-y-4">
          <NavLink 
            to="dashboard"  
            className="px-4 py-2 rounded hover:bg-blue-500 transition duration-300"
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="userlist" 
            className="px-4 py-2 rounded hover:bg-green-500 transition duration-300"
          >
            All Users
          </NavLink>     
          <NavLink 
            to="category" 
            className="px-4 py-2 rounded hover:bg-yellow-500 transition duration-300"
          >
           All products
          </NavLink>
          <button
  onClick={logout}
  className="self-start px-4 py-2 rounded hover:bg-purple-500 transition duration-300"
>
  Logout
</button>

         
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
  <header
    className="rounded-lg shadow p-6 mb-8"
    style={{
      backgroundImage: 'url("https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=1024x1024&w=is&k=20&c=JZprgGDQ8xqa6iu0fyKJfKOlAvae0w9U-AdHeCT2kg4=")', // Replace with your image URL
      backgroundSize: 'cover', // Makes the image cover the entire header area
      backgroundPosition: 'center', // Centers the image
      height: '200px', // Set a specific height for the header
      color: 'white', // Change text color if necessary to ensure readability
    }}
  >
    <h2 className="text-2xl font-semibold">Welcome to the Admin Panel</h2>
    <p className="mt-2 text-gray-200">Manage your application efficiently.</p> {/* Adjust text color as needed */}
  </header>
  <div className="bg-white rounded-lg shadow p-6">
    <Outlet />
  </div>
</main>

    </div>
  );
};
