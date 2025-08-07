import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      response = await response.json();
      if (Array.isArray(response) && Array.isArray(response[0]) && Array.isArray(response[1])) {
        setFoodItem(response[0]);
        setFoodCat(response[1]);
      } else {
        console.error("Unexpected response format:", response);
        setFoodItem([]);
        setFoodCat([]);
      }
    } catch (error) {
      console.error("Failed to load data", error);
      setFoodItem([]);
      setFoodCat([]);
    }
  };

  useEffect(() => {
    loadData();

    // Auto slide carousel every 4 seconds
    const interval = setInterval(() => {
      const nextBtn = document.querySelector('.carousel-control-next');
      nextBtn?.click();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />

      {/* Carousel with search bar overlay */}
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
          {/* Search Bar Overlay */}
          <div className="carousel-caption d-flex justify-content-center align-items-center h-100" style={{ zIndex: 10 }}>
            <input
              className="form-control w-75 w-md-50 w-lg-25 px-4 py-2 rounded-pill"
              type="search"
              placeholder="Search your food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ fontSize: "1.1rem", backgroundColor: "rgba(255, 255, 255, 0.9)", color:"black" }}
            />
          </div>

          {/* Carousel Images */}
          <div className="carousel-item active">
            <img src="https://picsum.photos/seed/burger/900/700" className="d-block w-100" style={{ filter: "brightness(30%)", height: "500px", objectFit: "cover" }} alt="burger" />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/seed/pizza/900/700" className="d-block w-100" style={{ filter: "brightness(30%)", height: "500px", objectFit: "cover" }} alt="pizza" />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/seed/pastry/900/700" className="d-block w-100" style={{ filter: "brightness(30%)", height: "500px", objectFit: "cover" }} alt="pastry" />
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Food Categories + Cards */}
      <div className="container my-5">
        {foodCat.length > 0 ? (
          foodCat.map((category) => (
            <div key={category._id} className="mb-5">
              <h3 className="text-success fw-bold mb-3">{category.CategoryName}</h3>
              <hr />
              <div className="row g-4">
                {foodItem
                  .filter(item =>
                    item.CategoryName === category.CategoryName &&
                    item.name?.toLowerCase().includes(search.toLowerCase())
                  )
                  .map(item => (
                    <Card key={item._id} foodItem={item} options={item.options[0]} />
                  ))}
              </div>
            </div>
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center my-5">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
