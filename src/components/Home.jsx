import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="container-fluid home-container vh-100">
        <div className="centered-text">
          Welcome to Anna's World!
          <p className="text-center">
            <Link to="/shop" className="shop-link">
              SHOP HERE
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
