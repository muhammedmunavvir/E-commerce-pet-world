import React, { useEffect, useState } from "react";
import axios from "axios";
import { carthandle } from "../foraddcart/Addcart";
import { useNavigate } from "react-router-dom";
const Cat = () => {
  const [state, setstate] = useState([]);

  const getcat = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setstate(res.data);
    } catch {}
  };

  useEffect(() => {
    getcat();
  }, []);

  const nav = useNavigate();
  function fordetails(id) {
    nav(`/productdetails/${id}`);
  }

  const cat = state.filter(
    (item) => item.catogory === "cat-food" || item.catogory === "cat-treat"
  );

  return (
    <div className="flex flex-wrap justify-center p-4">
      {cat.map((obj) => (
        <div
          key={obj.id}
          className="m-2 max-w-xs bg-white rounded-lg shadow-lg overflow-hidden"
          onClick={() => fordetails(obj.id)}
        >
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
  );
};

export default Cat;
