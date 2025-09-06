// src/pages/Browse.jsx
import React, { useState } from "react";
import productsData from "../data/products";
import { useCart } from "../context/CartContext";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import "./Browse.css";

// Import all 10 SVGs
import product1 from "../assets/product1.svg";
import product2 from "../assets/product2.svg";
import product3 from "../assets/product3.svg";
import product4 from "../assets/product4.svg";
import product5 from "../assets/product5.svg";
import product6 from "../assets/product6.svg";
import product7 from "../assets/product7.svg";
import product8 from "../assets/product8.svg";
import product9 from "../assets/product9.svg";
import product10 from "../assets/product10.svg";

// Map product.image key to actual imported SVG
const productImages = {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
};

const categories = [
  "All", "Electronics", "Furniture", "Clothing", "Books",
  "Home & Garden", "Sports", "Toys", "Other"
];

const Browse = () => {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const filtered = productsData.filter(
    (p) => category === "All" || p.category === category
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "latest") return a.id - b.id;
    return b.id - a.id; // newest
  });

  return (
    <div
      className="browse-page"
      style={{ backgroundColor: "#E3D8C1", minHeight: "100vh", padding: "20px" }}
    >
      <h1 style={{ color: "#66371B" }}>Browse Products</h1>

      {/* Filters */}
      <div className="filters">
        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cat === category ? "active" : ""}
              style={{
                background: cat === category ? "#66371B" : "#fff",
                color: cat === category ? "#fff" : "#66371B",
                border: "1px solid #66371B",
                borderRadius: "8px",
                padding: "6px 12px",
                marginRight: "6px",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="sort-dropdown">
          <select
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              border: "1px solid #66371B",
              color: "#66371B",
              fontWeight: "600",
            }}
          >
            <option value="newest">Newest</option>
            <option value="latest">New → Old</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* Product List */}
      <div
        className="product-list"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}
      >
        {sorted.map((p) => (
          <Card
            key={p.id}
            title={p.title}
            price={p.price}
            rating={p.rating}
            image={productImages[p.image]} // pass actual SVG
            onAdd={() => addToCart(p)}
            onClick={() => navigate(`/product/${p.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
