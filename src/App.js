// import "./App.css";

import HomePage from "./pages/Home";
import {Route,Routes} from 'react-router-dom'
import Login from "./Login/Login";
import Register from "./Login/Registerpage";
import { Allproducts } from "./pages/Allproducts";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Productdetails from "./components/details/Productdetails";
import Cartpage from "./pages/Cartpage";
function App() {
  return <div>
<Navbar/>

<Routes>
 <Route path="/" element={<HomePage/>} />
 <Route path="/login" element={<Login/>} />
 <Route path="/registerpage" element={<Register/>}/>
 <Route path="/Allproducts" element={<Allproducts/>}/>
 <Route path="/productdetails/:id" element={<Productdetails/>}/>
 <Route path="/cartpage" element={<Cartpage/>}/>
</Routes>
<Footer/>
 

  </div>;
}

export default App;
