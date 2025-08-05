import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from './ContextReducer'

export default function Card(props) {

  let dispacth = useDispatchCart();
  let options = props.options;
  let data = useCart();
  const priceRef = useRef();
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");


  const handleAddToCart = async () => {

    //update of food in cart
    let food = [];
    for (let item of data) {
      if (item.id === props.foodItem._id) {
        food = data;
        break;
      }
    }
    if (food !== []) {
      if (food.size === size) {//this case update food qty in cart not size
        await dispacth({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) { //if food of new size-half,full then add to cart
        await dispacth({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
        return
      }
      return
    }
    await dispacth({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
  }

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}>
          <img src={props.foodItem.img} alt="Indian food" className="card-img-top" style={{ height: "120px", objectFit: "fill" }} />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded" onClick={(e) => setQty(e.target.value)} >

                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>

                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100 bg-success rounded" ref={priceRef} onClick={(e) => setSize(e.target.value)}>
                {priceOptions.map((data) => {
                  return <option key={data} value={data}>{data}</option>
                })}
              </select>

              <div className="d-inline fs-5">
                ₹{finalPrice}/-
              </div>
            </div>
            <hr></hr>
            <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
