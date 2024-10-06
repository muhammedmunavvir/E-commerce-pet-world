import React from 'react';
import { NavLink ,Outlet} from 'react-router-dom';


export const Category = () => {
  return (
   <div>
    <div className="flex justify-center space-x-8 mt-10">
      {/* Cat Products */}
      <NavLink 
        to="addcat" 
        className="bg-purple-600 text-white py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 hover:bg-purple-700 hover:scale-105"
        activeClassName="bg-purple-800"
      >
        Cats
      </NavLink>

      {/* Dog Products */}
      <NavLink 
        to="adddog" 
        className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 hover:bg-blue-700 hover:scale-105"
        activeClassName="bg-blue-800"
      >
        Dogs
      </NavLink>

    </div>
     <div>
     <div><Outlet/></div>
 </div>
 </div> 

  );
};
