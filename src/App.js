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
import Paymentsection from "./pages/Paymentsection";
import Summarypage from "./pages/Summarypage";
import Cat from "./components/cat/Cat";
import Dog from "./components/dog/Dog";
function App() {
  return <div>
<Navbar/>

<Routes>
 <Route path="/" element={<HomePage/>} />
 <Route path="/login" element={<Login/>} />
 <Route path="/registerpage" element={<Register/>}/>
 <Route path="/Allproducts" element={<Allproducts/>}/>
 <Route path="/catproducts" element={<Cat/>}/>
 <Route path="/dogproducts" element={<Dog/>}/>
 <Route path="/productdetails/:id" element={<Productdetails/>}/>
 <Route path="/cartpage" element={<Cartpage/>}/>
 <Route path="/payment" element={<Paymentsection/>}/>
 <Route path="/ordersum" element={<Summarypage/>}/>
</Routes>
<Footer/>
 

  </div>;
}

export default App;
