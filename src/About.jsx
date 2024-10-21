import React from "react";
import web from "../src/images/homepage2.png";
import {NavLink} from "react-router-dom";
import Common from "./common";


const About = () => {
  return (
    <>
      <Common 
      name="Welcome to best crypto-currency trading bot for optimal results." 
      imgsrc={web} 
      visit="/contact" 
      btname="Contact for the best crypto-trading results" />
    </>
  );
};

export default About;
