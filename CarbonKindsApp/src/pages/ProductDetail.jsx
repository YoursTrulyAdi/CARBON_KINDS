import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products";
import { useCart } from "../context/CartContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <img src={product.image} alt={product.title} className="detail-image" />
        <div className="detail-info">
          <h2>{product.title}</h2>
          <p className="price">${product.price}</p>
          <p className="rating">⭐ {product.rating}</p>
          <p className="description">
            This is a dummy description for {product.title}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a velit vitae odio malesuada convallis.
          </p>
          <div className="reviews">
            <h4>Reviews</h4>
            <p>"Excellent product!" - User1</p>
            <p>"Highly recommend." - User2</p>
          </div>
          <button className="add-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
