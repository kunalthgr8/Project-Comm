import React from "react";
import "./AdverCard.css";
import { Link, NavLink } from "react-router-dom";
import Family from "../../assets/fam.svg";

const AdverCard = () => {
  return (
    <>
      <div className="adver-box">
        <div className="content-box">
          <p>#For First order only</p>
          <h1>Mega Welcome Deal</h1>
        </div>
        <div className="announcment-box">
          <div className="deal-box">
            {/* <p>Place Your First Order</p> */}
            <h1>Flat 25% off on Aoushadhi </h1>
          </div>
          <div className="button-box">
            <NavLink to="/offers">See More Offers</NavLink>
          </div>
        </div>
        <div className="image-box">
          <img src={Family} alt="Advertisment" />
        </div>
      </div>
    </>
  );
};

export default AdverCard;
