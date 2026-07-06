import { useState } from "react";
import axios from "axios";

const AddProduct = () => {

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        weight: "",
        brand: "",
        imageUrl: "",
        categoryId: ""
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await axios.post(
                "https://localhost:7036/api/Product",
                product,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("Product Added Successfully");

        } catch (err) {

            console.log(err);

            if (err.response)
                alert(err.response.data);

        }

    };

    return (

        <div className="container mt-5">

            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>

                <input
                    className="form-control mb-3"
                    name="name"
                    placeholder="Product Name"
                    onChange={handleChange}
                />

                <textarea
                    className="form-control mb-3"
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    type="number"
                    name="weight"
                    placeholder="Weight"
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    name="brand"
                    placeholder="Brand"
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    name="imageUrl"
                    placeholder="Image Url"
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    type="number"
                    name="categoryId"
                    placeholder="Category Id"
                    onChange={handleChange}
                />

                <button className="btn btn-success">
                    Add Product
                </button>

            </form>

        </div>

    );
};

export default AddProduct;