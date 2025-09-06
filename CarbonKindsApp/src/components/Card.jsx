// src/components/Card.jsx
import React from "react";
import styled from "styled-components";

const Card = ({ title, price, rating, image, onAdd, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <img src={image} alt={title} className="product-image" />
      <div className="info">
        <h3 className="title">{title}</h3>
        <p className="price">${price}</p>
        <p className="rating">⭐ {rating}</p>
        <button
          className="add-cart-btn"
          onClick={(e) => {
            e.stopPropagation();
            onAdd();
          }}
        >
          Add to Cart
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #E3D8C1; /* Secondary Bone for card background */
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  max-width: 220px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }

  .product-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .info {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .title {
    font-size: 1rem;
    font-weight: 600;
    color: #66371B; /* Primary Kobicha */
    margin: 0;
  }

  .price {
    font-weight: bold;
    color: #66371B; /* Primary Kobicha */
    margin: 0;
  }

  .rating {
    font-size: 0.85rem;
    color: #66371B; /* Primary Kobicha */
    margin: 0;
  }

  .add-cart-btn {
    margin-top: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    background: #66371B; /* Primary Kobicha button */
    color: white;
    cursor: pointer;
    transition: 0.2s;
  }

  .add-cart-btn:hover {
    background: #4d2915; /* Slightly darker Kobicha on hover */
  }
`;

export default Card;
