// import "./App.css";

import HomePage from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Login/Registerpage";
import { Allproducts } from "./pages/Allproducts";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Productdetails from "./components/details/Productdetails";
import Cartpage from "./pages/Cartpage";
import Paymentsection from "./pages/Paymentsection";
import Summarypage from "./pages/Summarypage";

import { Adminhome } from "./admin/adminpages/Adminhome";
import { Dashboard } from "./admin/adminpages/Dashboard";
import { UserList } from "./admin/adminpages/UserList";
import { Category } from "./admin/adminpages/Category";
import { Editing } from "./admin/adminpages/Editing";
import { Addnewproduct } from "./admin/adminpages/Addnewproduct";
import { Userdetails } from "./admin/adminpages/Userdetails";
import Categorypage from "./pages/Categorypage";
import { Razorpaycheckoutpage } from "./pages/Razorpaycheckflow";
import { NOtefound } from "./pages/NOtefound";
import { Suspense } from "react";
import { Loading } from "./pages/Loading";


//adimin section

function App() {
  const location = useLocation();
  const forhide = location.pathname.startsWith("/admin");
  return (
    <div>
      {!forhide && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/registerpage" element={<Register />} />
        <Route path="/Allproducts" element={ <Suspense fallback={<Loading/>}> <Allproducts /></Suspense>  } />
        <Route path="/products/:category" element={<Categorypage />} />
        <Route path="/productdetails/:id" element={<Productdetails />} />
        <Route path="/cartpage" element={<Cartpage />} />
        <Route path="/payment" element={<Paymentsection />} />
        <Route path="/ordersum" element={<Summarypage />} />
        <Route path="/razorpaycheckflow"element={ <Razorpaycheckoutpage/>}  />

        {/* //admib */}

       <Route path="/admin" element={<Adminhome />}>
        <Route index element={<Dashboard />} />
          <Route path="userlist" element={<UserList />} />
          <Route path="allproducts" element={<Category />} />
       
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="editing/:pID" element={<Editing />} />
          <Route path="addnewproduct" element={<Addnewproduct />} />

         <Route path="userdetails/:id" element={<Userdetails />} />
  
        </Route>
        <Route path="/*" element={<NOtefound/>}/>
      </Routes>
      {!forhide && <Footer />}
    </div>
  );
}

export default App;
