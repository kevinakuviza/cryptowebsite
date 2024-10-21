import React from "react";
import web from "./images/portfolio1.jpg"
import { NavLink } from "react-router-dom";


const Card = (props) => {
  return (
    <>
                <div Class="col-md-4 col-10 mx-auto">
                <div Class="card">
                  <img src={props.imgsrc} Class="card-img-top" alt={props.imgsrc} />
                    <div Class="card-body">
                      <h5 Class="card-title font-weight-bold">{props.title}</h5>
                        <p Class="card-text">It’s essential to choose a bot that offers backtesting and simulation capabilities. This allows you to test your strategies on historical data before executing them in real-time.</p>
                        <NavLink to="#" Class="btn btn-primary">Go somewhere</NavLink>
                    </div>
                  </div>
                </div>
              
    </>
  );
};

export default Card;
