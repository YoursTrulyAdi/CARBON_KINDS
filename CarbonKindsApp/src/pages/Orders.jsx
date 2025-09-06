import React from "react";
import { useCart } from "../context/CartContext";

const Orders = () => {
  const { orders } = useCart();

  if (orders.length === 0) return <h2>No orders yet</h2>;

  return (
    <div className="orders-page">
      <h2>My Orders</h2>
      {orders.map((item, i) => (
        <div key={i} className="order-item">
          <h4>{item.title}</h4>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
