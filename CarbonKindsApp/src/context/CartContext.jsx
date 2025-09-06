import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    // prevent duplicates by checking id
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const placeOrder = () => {
    if (cart.length === 0) return;
    setOrders((prev) => [...prev, { id: Date.now(), items: cart }]);
    setCart([]); // ✅ clear cart after checkout
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, placeOrder, orders }}
    >
      {children}
    </CartContext.Provider>
  );
};
