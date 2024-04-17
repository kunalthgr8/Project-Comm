import React from "react";
import "./ProductCard.css";
const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img
          src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="product"
        />
      </div>
      <div className="product-card-details">
        <div className="product-card-title">
          <h1>Product Title</h1>
          <h2>Produced By Silicon Ltd.</h2>
          <p>100 mg</p>
        </div>
        <div className="product-button">
          <div className="product-price">
            <p> $100</p>
          </div>
          <div className="product-add-cart">Add to Cart</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
