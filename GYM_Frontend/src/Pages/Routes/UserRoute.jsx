import { Routes, Route } from "react-router-dom";

import Treadmills from "./src/Pages/ProductPages/Treadmills.jsx";
import Excercisebikes from "./src/Pages/ProductPages/ExcerciseBikes.jsx";
import Cart from "./src/Pages/Cart.jsx";
import Navbar from "./src/Pages/Navbar.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./src/Pages/Login.jsx";

function UserRoutes() {
  return (
    <>
    <Routes>

        <Route path="/" element={<div> <Navbar /><Excercisebikes /></div>} />
      </Routes> 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/treadmills" element={<Treadmills />} />
      </Routes> 
      </>
  );
}

export default UserRoutes;