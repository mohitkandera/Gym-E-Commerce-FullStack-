import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Login from "../src/Pages/Login";
// import Register from "../src/Pages/Register";
import Products from "../src/Pages/Products";
import Cart from "../src/Pages/Cart";
import Navbar from "../src/Pages/Navbar";
import Register from "./Pages/Register";
import AddProduct from "./Pages/Admin/AddProduct";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
// import UserList from "./Pages/Admin/UserList";
import UserList from "./Pages/Admin/UserList";


// import Orders from "../src/Pages/Orders";

function App() {

  return (
    

    <BrowserRouter>
    
    <Routes>
       {/* <Route path="/" element={<Navbar/>} /> */}
      <Route path="/" element={ <div> <Navbar/><Products/></div>} />
    </Routes>
    <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/Register" element={<Register />} />
         <Route path="/Cart" element={<Cart/>} />
         {/* <Route path="/Products" element={<Products/>} /> */}
    </Routes>
    <Routes>  // Admin Routes
       <Route path="/admin" element={<AdminDashboard />} />
       <Route path="admin/AddProduct" element={<AddProduct/>} />
       <Route path="/admin/users" element={<UserList/>} />
       
    </Routes>
    </BrowserRouter>
    
    
   
  );
}

export default App;