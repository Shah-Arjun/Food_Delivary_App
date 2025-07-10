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
                headers: {
                    "Content-Type": "application/json",
                },
            });

            response = await response.json();
            console.log("API Response:", response);

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
    }, []);

    return (
        <div>
            <Navbar />

            <div>
                <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                    style={{ objectFit: "contain !important" }}
                >
                    <div className="carousel-inner" id="carousel">
                        <div className="carousel-caption" style={{ zIndex: "10" }}>
                            <div className="d-flex justify-content-center">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="carousel-item active">
                            <img
                                src="https://picsum.photos/seed/burger/900/700"
                                className="d-block w-100"
                                style={{ filter: "brightness(30%)" }}
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://picsum.photos/seed/pizza/900/700"
                                className="d-block w-100"
                                style={{ filter: "brightness(30%)" }}
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://picsum.photos/seed/pastry/900/700"
                                className="d-block w-100"
                                style={{ filter: "brightness(30%)" }}
                                alt="..."
                            />
                        </div>
                    </div>

                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="container">
                {foodCat.length > 0 ? (
                    foodCat.map((data) => (
                        <div className="row mb-3" key={data._id}>
                            <div className="fs-3 m-3">{data.CategoryName}</div>
                            <hr />
                            {foodItem.length > 0 ? (
                                foodItem
                                    .filter(
                                        (item) =>
                                            item.CategoryName === data.CategoryName &&
                                            item.name?.toLowerCase().includes(search.toLowerCase())
                                    )
                                    .map((filteredItems) => (
                                        <div key={filteredItems._id} className="col-12 col-md-6 col-lg-3">
                                            <Card
                                                foodItem={filteredItems}
                                                options={filteredItems.options[0]}
                                            ></Card>
                                        </div>
                                    ))
                            ) : (
                                <div>No such data found</div>
                            )}
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>

            <Footer />
        </div>
    );
}
