// import React{useEffect , useState} from "react";
import { Link } from "react-router-dom";
import websiteLogo from '/src/assets/website_logo.svg';
import { useEffect, useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { SiSimpleanalytics } from "react-icons/si";
import { IoNotifications } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

function AdminDashboard() {


    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");

    useEffect(() => {

        const getData = async () => {

            try {

                const token = localStorage.getItem("token");

                // Products
                const productResponse = await fetch(
                    "https://localhost:7036/api/Product",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const productData = await productResponse.json();

                setProducts(productData);


                // Users
                const userResponse = await fetch(
                    "https://localhost:7036/api/User",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const userData = await userResponse.json();

                setUsers(userData);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

        getData();

    }, [token]);



    return (
        <div className="container-fluid bg-light min-vh-100 p-0">

            {/* TOP NAVBAR */}
            <nav className="navbar  px-4 shadow">
                <div className="container-fluid">

                    <Link
                        to="/"
                        className=" fw-bold fs-4"
                    >
                        < img src={websiteLogo} alt="Logo" width="200" />

                    </Link>

                    <Link
                        to="/"
                        className="btn bg-dark text-white fw-bold"
                    >
                    
                        Main Website
                    </Link>

                </div>
            </nav>


            <div className="container-fluid">

                <div className="row">

                    {/* SIDEBAR */}

                    <div className="col-md-3 col-lg-2 bg-dark min-vh-100 p-3">

                        <h6 className="text-secondary text-uppercase mb-3">
                            Dashboard
                        </h6>

                        <div className="d-grid gap-2">

                            <Link
                                to="/admin"
                                className="btn btn-primary text-start"
                            >
                            <p className="bi bi-people d-flex gap-3 align-item-center mn me-2">  <MdSpaceDashboard/>  Dashboards</p>

                            </Link>


                            <Link
                                to="/admin/addProduct"
                                className="btn btn-dark text-white text-start border-0"
                            >
                                <p className="bi bi-people d-flex gap-3 align-item-center mn me-2">  <FaPlusCircle/>  Add Products</p>

                            </Link>


                            <Link
                                to="/admin/products"
                                className="btn btn-dark text-white text-start border-0"
                            >
                                 <p className="bi bi-people d-flex gap-3 align-item-center mn me-2">  <FaPlusCircle/>  Manage Products</p>

                            </Link>


                            <Link
                                to="/admin/orders"
                                className="btn btn-dark text-white text-start border-0"
                            >
                                 <p className="bi bi-people d-flex gap-3 align-item-center mn me-2">  <FaBagShopping/>  Orders</p>
                            </Link>


                            <Link
                                to="/admin/users"
                                className="btn btn-dark text-white text-start border-0"
                            >
                                <p className="bi bi-people d-flex gap-3 align-item-center mn me-2">  <FaUserFriends/>  Users</p>
                            </Link>

                            <Link
                                to="/admin/users"
                                className="btn btn-dark text-white text-start border-0"
                            >
                                <p className="bi bi-people d-flex gap-3 align-item-center mn me-2">  <IoMdHeart/>  Reviews</p>
                               
                            </Link>

                            <Link
                                to="/admin/users"
                                className="btn btn-dark text-white text-start border-0"
                            >
                                <p className="bi bi-people d-flex gap-3 align-item-center mn me-2">  <SiSimpleanalytics/> Reports&analytics</p>
                            </Link>

                            <Link
                                to="/admin/users"
                                className="btn btn-dark text-white text-start border-0"
                            >
                                   <p className="bi bi-people d-flex gap-3 align-item-center mn me-2">  <IoNotifications/> Notification</p>
                            </Link>

                            <Link
                                to="/admin/users"
                                className="btn btn-dark text-white text-start border-0"
                            >
                                <p className="bi bi-people d-flex gap-3 align-item-center mn me-2">  <IoSettings/> Settings</p>
                            </Link>

                        </div>


                        <hr className="text-secondary" />


                        <Link
                            to="/"
                            className="btn btn-outline-light w-100"
                        >
                            <i className="bi bi-arrow-left me-2"></i>
                            Back to Website
                        </Link>

                    </div>


                    {/* MAIN CONTENT */}

                    <div className="col-md-9 col-lg-10 p-4">

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <div>
                                <h2 className="fw-bold">
                                    Dashboard
                                </h2>

                                <p className="text-muted">
                                    Welcome back, Admin
                                </p>
                            </div>

                        </div>


                        {/* STATISTICS */}

                        <div className="row g-4">


                            {/* PRODUCTS */}

                            <div className="col-md-6 col-xl-3">

                                <div className="card border-0 shadow-sm h-100">

                                    <div className="card-body">

                                        <div className="d-flex justify-content-between">

                                            <div>

                                                <p className="text-muted mb-1">
                                                    Total Products
                                                </p>

                                               {loading ? <p>Loading...</p> : 
                                                <h2 className="fw-bold">
                                                    {products.length}
                                                </h2>
                                                }

                                            </div>

                                            <div className="bg-primary text-white rounded-circle p-3">
                                                <i className="bi bi-box-seam fs-4"></i>
                                            </div>

                                        </div>

                                        <Link
                                            to="/admin/products"
                                            className="small text-decoration-none"
                                        >
                                            Manage Products →
                                        </Link>

                                    </div>

                                </div>

                            </div>


                            {/* ORDERS */}

                            <div className="col-md-6 col-xl-3">

                                <div className="card border-0 shadow-sm h-100">

                                    <div className="card-body">

                                        <div className="d-flex justify-content-between">

                                            <div>

                                                <p className="text-muted mb-1">
                                                    Total Orders
                                                </p>

                                                <h2 className="fw-bold">
                                                    0
                                                </h2>

                                            </div>

                                            <div className="bg-success text-white rounded-circle p-3">
                                                <i className="bi bi-cart-check fs-4"></i>
                                            </div>

                                        </div>

                                        <Link
                                            to="/admin/orders"
                                            className="small text-decoration-none"
                                        >
                                            View Orders →
                                        </Link>

                                    </div>

                                </div>

                            </div>


                            {/* USERS */}

                            <div className="col-md-6 col-xl-3">

                                <div className="card border-0 shadow-sm h-100">

                                    <div className="card-body">

                                        <div className="d-flex justify-content-between">

                                            <div>

                                                <p className="text-muted mb-1">
                                                    Total Users
                                                </p>

                                               
                                               {loading ? <p>Loading...</p> : 
                                                <h2 className="fw-bold">
                                                    {users.length}
                                                </h2>
                                                }

                                            </div>

                                            <div className="bg-warning text-white rounded-circle p-3">
                                                <i className="bi bi-people fs-4"></i>
                                            </div>

                                        </div>

                                        <Link
                                            to="/admin/users"
                                            className="small text-decoration-none"
                                        >
                                            View Users →
                                        </Link>

                                    </div>

                                </div>

                            </div>


                            {/* REVENUE */}

                            <div className="col-md-6 col-xl-3">

                                <div className="card border-0 shadow-sm h-100">

                                    <div className="card-body">

                                        <div className="d-flex justify-content-between">

                                            <div>

                                                <p className="text-muted mb-1">
                                                    Revenue
                                                </p>

                                                <h2 className="fw-bold">
                                                    ₹0K
                                                </h2>

                                            </div>

                                            <div className="bg-danger text-white rounded-circle p-3">
                                                <i className="bi bi-currency-rupee fs-4"></i>
                                            </div>

                                        </div>

                                        <span className="small text-success">
                                            +12% this month
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* QUICK ACTIONS */}

                        <div className="card border-0 shadow-sm mt-4">

                            <div className="card-body">

                                <h5 className="fw-bold mb-4">
                                    Quick Actions
                                </h5>

                                <div className="row g-3">

                                    <div className="col-md-4">

                                        <Link
                                            to="/admin/addProduct"
                                            className="btn btn-primary w-100 py-3"
                                        >
                                            <i className="bi bi-plus-circle fs-5 me-2"></i>
                                            Add New Product
                                        </Link>

                                    </div>


                                    <div className="col-md-4 ">

                                        <Link
                                            to="/admin/products"
                                            className="btn btn-outline-primary w-100 py-3"
                                        >
                                            <i className="bi bi-box-seam me-2 "></i>
                                            Manage Products
                                        </Link>

                                    </div>


                                    <div className="col-md-4">

                                        <Link
                                            to="/admin/orders"
                                            className="btn btn-outline-success w-100 py-3"
                                        >
                                            <i className="bi bi-cart-check me-2"></i>
                                            Check Orders
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* RECENT ORDERS */}

                        <div className="card border-0 shadow-sm mt-4">

                            <div className="card-body">

                                <div className="d-flex justify-content-between mb-3">

                                    <h5 className="fw-bold">
                                        Recent Orders
                                    </h5>

                                    <Link
                                        to="/admin/orders"
                                        className="text-decoration-none"
                                    >
                                        View All
                                    </Link>

                                </div>


                                <div className="table-responsive">

                                    <table className="table table-hover align-middle">

                                        <thead className="table-dark">

                                            <tr>
                                                <th>Order ID</th>
                                                <th>Customer</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>

                                        </thead>


                                        <tbody>
{/* 
                                            <tr>

                                                <td>#1001</td>

                                                <td>Mohit Kumar</td>

                                                <td>₹2,499</td>

                                                <td>
                                                    <span className="badge bg-success">
                                                        Delivered
                                                    </span>
                                                </td>

                                            </tr>


                                            <tr>

                                                <td>#1002</td>

                                                <td>Rahul</td>

                                                <td>₹4,999</td>

                                                <td>
                                                    <span className="badge bg-warning text-dark">
                                                        Pending
                                                    </span>
                                                </td>

                                            </tr>


                                            <tr>

                                                <td>#1003</td>

                                                <td>Amit</td>

                                                <td>₹1,899</td>

                                                <td>
                                                    <span className="badge bg-primary">
                                                        Shipped
                                                    </span>
                                                </td>

                                            </tr> */}

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AdminDashboard;