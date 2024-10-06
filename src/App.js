// import "./App.css";

import HomePage from "./pages/Home";
import {Route,Routes,useLocation} from 'react-router-dom'
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

import { Adminhome } from "./admin/adminpages/Adminhome";
import { Dashboard } from "./admin/adminpages/Dashboard";
import { UserList } from "./admin/adminpages/UserList";
import { Category } from "./admin/adminpages/Category";
import { Addcat } from "./admin/Cat.Dog/Addcat";
import { Editing } from "./admin/adminpages/Editing";
import { Addnewproduct } from "./admin/adminpages/Addnewproduct";

//adimin section

function App() {
 const location=useLocation()
const forhide=location.pathname.startsWith("/admin")
  return <div>
    {!forhide&&<Navbar/>}


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
 

{/* //admib */}

<Route path="/admin" element={<Adminhome/>}>
  <Route path="dashboard" element={<Dashboard/>}/>
  <Route path="userlist" element={<UserList/>}/>
  <Route path="category" element={<Category/>}>  <Route path="addcat" element={ <Addcat/>}/></Route>
  <Route path="dashboard" element={<Dashboard/>}/>
  <Route path="editing/:pID" element={<Editing/>}/>
  <Route path="addnewproduct"element={<Addnewproduct/>}/>

</Route>
 
</Routes>
{!forhide&&<Footer/>}
 

  </div>;
}

export default App;
