import React from "react";
import "./CategCard.css";
import Fam from "../../assets/fam.svg";
const CategCard = ({ image, type }) => {
  return (
    <div className="cato-card">
      <div className="category-card">
        <img src={image} alt="Category" />
      </div>
      <p>{type}</p>
    </div>
  );
};

export default CategCard;
