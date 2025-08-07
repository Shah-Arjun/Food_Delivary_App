import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();
  const [loading, setLoading] = React.useState(false);

  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem("userEmail");
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/orderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString(),
        }),
      });

      if (response.status === 200) {
        alert("✅ Order placed successfully!");
        dispatch({ type: "DROP" });
      } else {
        alert("❌ Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("⚠️ An error occurred during checkout.");
    } finally {
      setLoading(false);
    }
  };

  const totalPrice = data.reduce((total, item) => total + item.price, 0);

  if (data.length === 0) {
    return (
      <div className="text-center mt-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty cart"
          style={{ width: "150px", opacity: 0.6 }}
        />
        <h3 className="mt-3 text-muted">Your cart is empty!</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-success">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Option</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={food._id || index}>
                <td>{index + 1}</td>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>₹{food.price}</td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => {
                      if (
                        window.confirm("Are you sure you want to remove this item?")
                      ) {
                        dispatch({ type: "REMOVE", index });
                      }
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
        <h4 className="text-success fw-bold mb-3 mb-md-0">
          Total Price: ₹{totalPrice.toLocaleString()}
        </h4>
        <button
          className="btn btn-success px-4 py-2"
          onClick={handleCheckOut}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span>
              Placing Order...
            </>
          ) : (
            "Check Out"
          )}
        </button>
      </div>
    </div>
  );
}
