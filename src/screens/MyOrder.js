import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/myOrderData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: localStorage.getItem('userEmail')
        })
      });

      const data = await response.json();
      setOrderData(data.orderData?.order_data || []);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2 className="mb-4">My Orders</h2>
        <div className="row">
          {orderData.length === 0 ? (
            <div>No orders found.</div>
          ) : (
            [...orderData].reverse().map((orderGroup, groupIndex) => (
              <div key={groupIndex} className="w-100">
                {orderGroup[0]?.Order_date && (
                  <div className="mt-5 mb-3">
                    <h5>Order Date: {orderGroup[0].Order_date}</h5>
                    <hr />
                  </div>
                )}

                <div className="row">
                  {orderGroup.map((item, index) => (
                    <div
                      key={`${groupIndex}-${index}`}
                      className="col-12 col-md-6 col-lg-3 mb-4"
                    >
                      <div className="card" style={{ width: "16rem", maxHeight: "360px" }}>
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <div className="container w-100 p-0">
                            <span className="m-1">Qty: {item.qty}</span>
                            <span className="m-1">Size: {item.size}</span>
                            <div className="d-inline ms-2 fs-5">
                              NPR {item.price}/-
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
