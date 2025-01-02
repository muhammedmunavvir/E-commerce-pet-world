import React, { useEffect,useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const UserList = () => {
 
  const [users,setusers]=useState([])

  const [block,setlock]=useState([])

  useEffect(()=>{
    const getuser =async()=>{
      try{
     const res =await axios.get("http://localhost:8080/admin/allusers")
     console.log(res)
       setusers(res.data.users)
      }
      catch{
        console.log("Error");
      }
    
      
    }
    getuser()
  },[])

 

const nav =useNavigate()
  const  viewuser=(_id)=>{
       nav(`/admin/userdetails/${_id}`)
       
   }

//block user
const blockhandle=async(id)=>{
   try{
    await axios.patch(`http://localhost:5000/users/${id}`, {block:true})
  // Update local state to reflect the change
  setusers(users.map(user => 
    user.id === id ? { ...user, block: true } : user
  ));
   }
   catch{
    console.log("Error");
    
   }
}



//unblock function
const unblockhandle=async(id)=>{
   try{
    await axios.patch(`http://localhost:5000/users/${id}`, {block:false})
         // Update local state to reflect the change
    setusers(users.map(user => 
      user.id === id ? { ...user, block: false } : user
    ));
   }
   catch{
    console.log("Error");
    
   }
}


  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">User List</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider border-b">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider border-b">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider border-b">
                  Role
                </th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-600 uppercase tracking-wider border-b">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">
                    {user.userName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium border-b">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded "
                    onClick={()=>viewuser(user._id)} key={user._id}>
                 View
                    </button>
               {
                !user.block?(
                  <button className="bg-red-500 text-white px-4 py-2 ml-3 rounded "
                  onClick={()=>blockhandle(user.id)}>
                  Block
                  </button>
                ):(
                
                  <button  className="bg-green-500 text-white px-4 py-2 ml-3 rounded " onClick={()=>unblockhandle(user.id)}>
                    unblock
                  </button>
                  
                )
               }

          


                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div>
            <Outlet/>
        </div>
      </div>
    </div>
  );
};
