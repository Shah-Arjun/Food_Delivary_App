import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <div> <Navbar /> </div>

      <div> <Card /> </div>

      <div> <Footer /> </div>
    </div>
  );
}
