import { Link } from "react-router-dom";



const AdminDashboard = () => {
    return (
       
        <div>
                  <div className="container mt-5">
            <h2 className="mb-4 mt-5">Admin Dashboard</h2>
            <button><Link to="/">Product Page</Link></button>
            <div className="row">

                <div className="col-md-4 mb-4">
                    <div className="card shadow p-3">
                        <h4>Add Product</h4>
                        <p>Add new gym products.</p>

                        <Link
                            to="/admin/AddProduct"
                            className="btn btn-success"
                        >
                            Add Product
                        </Link>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card shadow p-3">
                        <h4>Manage Products</h4>
                        <p>Edit or delete products.</p>

                        <Link
                            to="/admin/products"
                            className="btn btn-primary"
                        >
                            Products
                        </Link>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card shadow p-3">
                        <h4>Orders</h4>
                        <p>View customer orders.</p>

                        <Link
                            to="/admin/orders"
                            className="btn btn-warning"
                        >
                            Orders
                        </Link>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card shadow p-3">
                        <h4>Users</h4>
                        <p>Manage users.</p>

                        <Link
                            to="/admin/users"
                            className="btn btn-info"
                        >
                            Users
                        </Link>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default AdminDashboard;