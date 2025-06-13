import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Carousel from "../components/Carousel"

export default function Home() {
  return (
    <div>
      <div> <Navbar /> </div>
      <div> <Carousel /> </div>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
      </div>
      <div> <Footer /> </div>
    </div>
  );
}