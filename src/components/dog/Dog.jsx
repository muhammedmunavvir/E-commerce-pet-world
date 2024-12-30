import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Dog = () => {

 const[state,setstate]= useState([])

 useEffect(()=>{
     const  getdog= async() => {
        try{
            const res=await axios.get("http://localhost:8080/products")
            setstate(res.data)
        } 
        catch{

        }  
     }
     getdog()
 },[])

 const nav=useNavigate()
 function fordetails (id){
   nav(`/productdetails/${id}`)
  
 }


 const dog=state.filter((item)=>item.catogory==="dog-food"||item.catogory==="dog-beds")
  return (
    <div className="flex flex-wrap justify-center p-4">
    {dog.map((obj) => (
        <div key={obj.id} className="m-2 max-w-xs bg-white rounded-lg shadow-lg overflow-hidden"
        onClick={()=>fordetails(obj.id)} >
            <img 
                className="w-full h-48 object-cover" 
                src={obj.url} 
                alt={obj.name} 
            />
            <div className="p-4">
                <h3 className="text-lg font-bold">{obj.name}</h3>
                <p className="text-gray-500">Price: ${obj.price}</p>
                <p className="text-yellow-500">Rating: {obj.rating} ★</p>
               
            </div>
        </div>
    ))}
   
</div>
  )
}

export default Dog