


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
 

const Login = () => {
  const initialVal = {
    email: "",
    password: ""
  };
  const [values, setValues] = useState(initialVal);
  const [data, setData] = useState([]); 
  const [error, setError] = useState({});
  const navigate = useNavigate();  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users");
        setData(res.data);
      } catch  {
        console.log("Error");
      }
    };
    fetchData();
  }, []);

 
  const inputHandle = (e) => {
    const { name, value } = e.target;
    setValues({...values,[name]: value  
      
      
    });
  };

 
  const validateLogin = () => {
    const errors = {};
    const match = data.find(user => user.email === values.email && user.password === values.password);
    
    if (!match) {
      errors.info = "Incorrect email or password";
    }
    
   
    
    setError(errors);
    return Object.keys(errors).length === 0;  
  };
     

  const toHomepage = (e) => {
    e.preventDefault();
    const user=data.find((user)=>user.email===values.email)  
   
    if (validateLogin()) {
      if(user.admin){
        localStorage.setItem("name",user.userName)
        localStorage.setItem("Uid",user.id)
        localStorage.setItem("admin",true)
        navigate("/admin")
      }else if(user.block===true){
        alert("your account is blocked")
      }else{
        localStorage.setItem("name",user.userName)
      localStorage.setItem("Uid",user.id)
      navigate('/'); 
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login to Your Account</h2>
        <form className="mt-4" onSubmit={toHomepage}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              onChange={inputHandle}
              name="email"
              value={values.email}
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              onChange={inputHandle}
              name="password"
              value={values.password}
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your password"
              required
            />
          </div>
          {error.info && <p className="text-red-500 text-center">{error.info}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <NavLink to="/registerpage" className="text-blue-500 hover:underline">
            Register here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
