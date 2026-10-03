import { Routes, Route } from "react-router-dom";

import AddProduct from "./src/Pages/Admin/AddProduct.jsx";
import AdminDashboard from "./src/Pages/Admin/AdminDashboard.jsx";
import UserList from "./src/Pages/Admin/UserList.jsx";

function AdminRoutes() {
  return (
      
       <Routes>  // Admin Routes
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="admin/AddProduct" element={<AddProduct />} />
        <Route path="/admin/users" element={<UserList />} />

      </Routes> 
  );
}

export default AdminRoutes;