
import { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const loadCart = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("TOKEN:", token);

      const res = await axios.get(
        "https://localhost:7036/api/CartItems",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("GET CART RESPONSE:", res.data);

      setCartItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const removeItem = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `https://localhost:7036/api/CartItems/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("Cart API Response:", res.data);

      loadCart();
    } catch (error) {
      console.log(error);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Buy Now
  const buyNow = (product) => {
    alert(`Buy Now: ${product.name}`);
  };

  return (
    <div className="container mt-4">

      {/* Heading */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">My Cart</h2>

        <span className="badge bg-primary fs-6">
          {cartItems.length} Items
        </span>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center mt-5">
          <h4 className="text-muted">Cart is Empty</h4>
          <p>Add some products to your cart.</p>
        </div>
      ) : (
        <>
          {/* Cart Table */}
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">

              <thead className="table-dark">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>

                    {/* Product */}
                    <td>
                      <div className="d-flex align-items-center">

                        {/* IMAGE */}
                        <img
                          src={item.product?.imageUrl}
                          alt={item.product?.name}
                          width="80"
                          height="80"
                          className="rounded me-3"
                          style={{
                            objectFit: "cover",
                          }}
                        />

                        <div>

                          {/* PRODUCT NAME */}
                          <button
                            className="btn btn-link text-decoration-none fw-bold p-0"
                            onClick={() =>
                              setSelectedProduct(item.product)
                            }
                          >
                            {item.product?.name}
                          </button>

                          {/* BRAND */}
                          <div className="text-muted small">
                            {item.product?.brand}
                          </div>

                          {/* ABOUT PRODUCT */}
                          <button
                            className="btn btn-sm btn-outline-primary mt-2"
                            onClick={() =>
                              setSelectedProduct(item.product)
                            }
                          >
                            About Product
                          </button>

                        </div>

                      </div>
                    </td>

                    {/* PRICE */}
                    <td>
                      ₹{item.price}
                    </td>

                    {/* QUANTITY */}
                    <td>
                      <span className="badge bg-secondary">
                        {item.quantity}
                      </span>
                    </td>

                    {/* SUBTOTAL */}
                    <td className="fw-bold">
                      ₹{item.price * item.quantity}  
                    </td>

                    {/* REMOVE */}
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* ORDER SUMMARY */}
          <div className="row justify-content-end mt-4">

            <div className="col-md-5">

              <div className="card shadow-sm">

                <div className="card-body">

                  <h4 className="fw-bold mb-3">
                    Order Summary
                  </h4>

                  <div className="d-flex justify-content-between mb-2">
                    <span>Total Items</span>
                    <span>{cartItems.length}</span>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <span>₹{totalPrice}</span>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <span>Delivery</span>
                    <span className="text-success">
                      Free
                    </span>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between mb-3">
                    <h4>Total</h4>
                    <h4>₹{totalPrice}</h4>
                  </div>

                  <button className="btn btn-success w-100">
                    Proceed to Checkout
                  </button>

                </div>

              </div>

            </div>

          </div>
        </>
      )}

      {/* PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >

          <div className="modal-dialog modal-lg modal-dialog-centered">

            <div className="modal-content">

              {/* HEADER */}
              <div className="modal-header">

                <h5 className="modal-title fw-bold">
                  Product Details
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedProduct(null)}
                ></button>

              </div>

              {/* BODY */}
              <div className="modal-body">

                <div className="row">

                  {/* PRODUCT IMAGE */}
                  <div className="col-md-5 text-center">

                    <img
                      src={selectedProduct.imageUrl}
                      alt={selectedProduct.name}
                      className="img-fluid rounded"
                      style={{
                        height: "350px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />

                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="col-md-7">

                    <h2 className="fw-bold">
                      {selectedProduct.name}
                    </h2>

                    <p className="text-muted">
                      Brand: {selectedProduct.brand}
                    </p>

                    <h3 className="text-success fw-bold">
                      ₹{selectedProduct.price}
                    </h3>

                    <hr />

                    <p>
                      <strong>Weight:</strong>{" "}
                      {selectedProduct.weight}
                    </p>

                    <p>
                      <strong>Description:</strong>
                    </p>

                    <p className="text-muted">
                      {selectedProduct.description}
                    </p>

                    {/* BUY NOW */}
                    <button
                      className="btn btn-success w-100 mt-3"
                      onClick={() =>
                        buyNow(selectedProduct)
                      }
                    >
                      Buy Now
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Cart;

