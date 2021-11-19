import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import fo from "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <BsFacebook />
        <AiFillTwitterSquare />
        <BsInstagram />

        <p>Copyright © 2008 Design Shack</p>
      
        <ul>
          <li><h2>LEARN MORE</h2></li>
          <li>Develop</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
