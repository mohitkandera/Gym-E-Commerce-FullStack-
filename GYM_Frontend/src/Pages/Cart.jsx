import { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const loadCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://localhost:7036/api/CartItems",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

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
            Authorization: `Bearer ${token}`
          }
        }
      );

      loadCart();
    } catch (error) {
      console.log(error);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">My Cart</h2>

      {cartItems.length === 0 ? (
        <h4>Cart is Empty</h4>
      ) : (
        <>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.productName}</td>
                  <td>₹{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.price * item.quantity}</td>

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

          <div className="card p-3">
            <h4>Total: ₹{totalPrice}</h4>

            <button className="btn btn-success">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;  