import React from "react";
import "./Product.css";
import ProductCard from "./ProductCard/ProductCard";

const Product = () => {
  return (
    <div className="product">
      <div className="left-product">
        <div className="heading-product">
          <h1>Showing All Products...</h1>
        </div>
        <div className="product-cards">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="right-product">
        <div className="product-details">
          <h1>Product Details</h1>
          <div className="product-details-content">
            <h2>Product Name</h2>
            <p>Product Description</p>
            <h3>Price: $100</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
