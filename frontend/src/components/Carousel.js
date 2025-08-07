import React from "react";

export default function Carousel() {
  return (
    <div className="container-fluid px-0">
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="1000"   //picture slices in 1 sec
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/1600x700/?food"
              className="d-block w-100"
              alt="Delicious food"
              style={{ objectFit: "cover", maxHeight: "700px", filter: "brightness(30%)" }}
            />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
              <h1 className="text-white fw-bold display-4 mb-4 shadow-lg text-center">
                Crave. Order. Enjoy.
              </h1>
              <form className="d-flex flex-wrap justify-content-center w-75 w-md-50">
                <input
                  className="form-control me-2 rounded-pill px-4 py-2"
                  type="search"
                  placeholder="Search your cravings..."
                  aria-label="Search"
                  style={{ minWidth: "200px" }}
                />
                <button
                  className="btn btn-success rounded-pill px-4 py-2 mt-2 mt-md-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/1600x700/?pizza"
              className="d-block w-100"
              alt="Pizza"
              style={{ objectFit: "cover", maxHeight: "700px", filter: "brightness(30%)" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white">Piping Hot Pizza</h5>
              <p>Enjoy a slice of cheesy happiness.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/1600x700/?dessert"
              className="d-block w-100"
              alt="Dessert"
              style={{ objectFit: "cover", maxHeight: "700px", filter: "brightness(30%)" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white">Delicious Desserts</h5>
              <p>Sweeten your day with treats.</p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
