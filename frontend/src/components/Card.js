import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
  const dispatch = useDispatchCart();
  const data = useCart();
  const priceRef = useRef();

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const options = props.options;
  const priceOptions = Object.keys(options);
  const finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  const handleAddToCart = async () => {
    let existingItem = data.find(item => item.id === props.foodItem._id && item.size === size);

    if (existingItem) {
      await dispatch({
        type: "UPDATE",
        id: props.foodItem._id,
        price: finalPrice,
        qty,
      });
    } else {
      await dispatch({
        type: "ADD",
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: finalPrice,
        qty,
        size,
      });
    }
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
      <div className="card shadow-lg border-0 rounded-4" style={{ width: "100%", maxWidth: "320px", background: "linear-gradient(135deg, #198754, #157347)", color: "#fff" }}>
        {/* Food Image */}
        <img
          src={props.foodItem.img}
          alt={props.foodItem.name}
          className="card-img-top rounded-top-4"
          style={{ height: "180px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          {/* Food Title */}
          <h5 className="card-title fw-bold text-center">{props.foodItem.name}</h5>

          {/* Select Quantity & Size */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <select
              className="form-select bg-light text-dark rounded"
              style={{ width: "48%" }}
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>

            <select
              className="form-select bg-light text-dark rounded"
              style={{ width: "48%" }}
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((sizeOption) => (
                <option key={sizeOption} value={sizeOption}>
                  {sizeOption}
                </option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div className="text-center fs-5 fw-semibold mb-3">
            ₹{finalPrice}/-
          </div>

          {/* Add to Cart Button */}
          <div className="d-grid">
            <button
              className="btn btn-warning text-dark fw-bold"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
