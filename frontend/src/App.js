import "./App.css";
import Home from "./screens/Home";
// from react router dom site
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import MyOrder from "./screens/MyOrder";


// linking bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { CartProvider } from "./components/ContextReducer.js";
import LandingPage from "./screens/LandingPage.js";

function App() {
  return (

    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
      <Route exact path="/myorder" element={<MyOrder />} />
      <Route path="/myorder" element={<MyOrder />} />

          </Routes>
        </div>
      </Router>
    </CartProvider>

  );
}

export default App;
