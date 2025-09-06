import React from "react";
import ProductCard from "./ProductCard";
import "./FeaturedProducts.css";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";

const products = [
  { image: product1, title: "Vintage Vase", category: "Decor", price: "$25" },
  { image: product2, title: "Retro Jacket", category: "Apparel", price: "$40" },
  { image: product1, title: "Wooden Chair", category: "Furniture", price: "$60" },
  { image: product2, title: "Classic Lamp", category: "Decor", price: "$30" },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Fresh on the Feed</h2>
      <div className="product-grid">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
      <a href="/browse" className="browse-btn">
        Browse All Items
      </a>
    </section>
  );
};

export default FeaturedProducts;
