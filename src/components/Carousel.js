import React from "react";

export default function Carousel() {
    return (
        <div>
            <div
                id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
               
                <div className="carousel-inner" id="carousel">

                    <div className="carousel-caption" style={{zIndex:"10"}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>

                    <div className="carousel-item active">
                        <img src="https://picsum.photos/seed/burger/900/700" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..." /> 
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/seed/pizza/900/700" className="d-block w-100" style={{  filter: "brightness(30%)" }}alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/seed/pastry/900/700" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

// <div style={{ minHeight: "300px", backgroundColor: "#222" }}>
//     <div id="carouselExampleIndicators" classNameName="carousel slide" data-bs-ride="carousel">
//         <div classNameName="carousel-indicators">
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" classNameName="active" aria-current="true" aria-label="Slide 1"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//         </div>
//         <div classNameName="carousel-inner">
//             <div classNameName="carousel-item active">
//                 <img src="https://source.unsplash.com/random/900x700/?food" classNameName="d-block w-100" style={{ maxHeight: "600px", objectFit: "cover" }} alt="..." />
//             </div>
//             <div classNameName="carousel-item">
//                 <img src="https://source.unsplash.com/random/900x700/?pastry" classNameName="d-block w-100" style={{ maxHeight: "600px", objectFit: "cover" }} alt="..." />
//             </div>
//             <div classNameName="carousel-item">
//                 <img src="https://source.unsplash.com/random/900x700/?barbeque" classNameName="d-block w-100" style={{ maxHeight: "600px", objectFit: "cover" }} alt="..." />
//             </div>
//         </div>
//         <button classNameName="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//             <span classNameName="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span classNameName="visually-hidden">Previous</span>
//         </button>
//         <button classNameName="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//             <span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
//             <span classNameName="visually-hidden">Next</span>
//         </button>
//     </div>
// </div>
