import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Categorypage = () => {
  const { category } = useParams();
  console.log("use params", useParams);
  console.log("catrgooooory", category);
  const [state, setstate] = useState([]);

  useEffect(() => {
    const getdogproduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/products/category?category=${category}`
        );
        console.log("res", res);
        setstate(res.data.data);
        console.log("state................", state);
      } catch (error) {
        console.log("dog page", error);
      }
    };
    getdogproduct();
  }, []);

  const nav = useNavigate();
  function fordetails(id) {
    nav(`/productdetails/${id}`);
  }

  return (
    <div className="flex flex-wrap justify-center p-4">
      {state.map((obj) => (
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

export default Categorypage;
