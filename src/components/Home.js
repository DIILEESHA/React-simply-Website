import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import banner from '../assets/ver.jpg';
import homecss from '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
         <Navbar />
      <div className="container">
    <img src={banner} alt="" />
    <div className="getter">
        <h1>Car Seller</h1>
        <p>Get in your car in your life by own site</p>
        <Link to='/menu'>
        <button>Buy now!</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
