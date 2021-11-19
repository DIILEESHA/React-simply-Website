import React from "react";
import { Link } from "react-router-dom";
import banner from '../assets/ver.jpg';
import homecss from '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
    <img src={banner} alt="" />
    <div className="getter">
        <h1>CAR HOMIES</h1>
        <p>YOUR CHOICE!</p>
        <Link to='/menu'>
        <button>Buy now!</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
