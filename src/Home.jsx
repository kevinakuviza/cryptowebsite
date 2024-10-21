import React from "react";
import web from "../src/images/homepage1.jpg";
import {NavLink} from "react-router-dom";
import Common from "./common";


const Home = () => {
  return (
    <>
      <Common
      name="Crypto trading app for best cryptocurrency trading" 
      imgsrc={web} 
      visit="/service" 
      btname="Start tradfing using excellent cryptocurrency trading bot" 
      />
    </>
  );
};

export default Home;
