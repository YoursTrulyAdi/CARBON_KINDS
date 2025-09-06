import React from "react";
import "./FeaturedProducts.css";

const ProductCard = ({ image, title, category, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="category">{category}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default ProductCard;
