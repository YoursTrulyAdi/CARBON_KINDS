// src/pages/Cart.jsx
import React, { useState, useEffect } from "react";
import Card from "../components/Card"; // Reuse your Card component
import { ShoppingCart, ShoppingBag, Undo, CreditCard, CheckCircle } from "lucide-react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [checkoutStep, setCheckoutStep] = useState("cart"); // cart, shipping, payment, success
  const [loading, setLoading] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    payOnPickup: false,
  });

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("carbonkind-cart");
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("carbonkind-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCartItems(items =>
      items.map(item => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const removeItem = id => {
    setCartItems(items => items.filter(item => item.id !== id));
    alert("Item removed from cart"); // simple replacement for toast
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setDiscount(0.1);
      alert("Promo code applied! 10% discount");
    } else {
      alert("Invalid promo code");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const shippingCost = subtotal > 50 ? 0 : 99;
  const tax = (subtotal - discountAmount + shippingCost) * 0.18;
  const total = subtotal - discountAmount + shippingCost + tax;

  const hasDonatedItems = cartItems.some(item => item.isDonated);
  const allItemsDonated = cartItems.every(item => item.isDonated);

  const handleCheckout = () => setCheckoutStep("shipping");

  const processShipping = () => {
    if (!shippingDetails.name || !shippingDetails.email || !shippingDetails.address) {
      alert("Please fill all required fields");
      return;
    }
    setCheckoutStep("payment");
  };

  const processPayment = () => {
    if (!paymentDetails.payOnPickup && (!paymentDetails.cardNumber || !paymentDetails.expiryDate || !paymentDetails.cvv)) {
      alert("Please fill payment details or select pay on pickup");
      return;
    }
    setCheckoutStep("success");
    setCartItems([]);
  };

  const resetCheckout = () => {
    setCheckoutStep("cart");
    setShippingDetails({ name: "", email: "", address: "", city: "", postalCode: "" });
    setPaymentDetails({ cardNumber: "", expiryDate: "", cvv: "", payOnPickup: false });
  };

  if (checkoutStep === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[#E3D8C1]">
        <div className="max-w-xl w-full">
          <Card>
            <div className="p-8 text-center">
              <CheckCircle size={64} className="mx-auto mb-4 text-[#66371B]" />
              <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
              <p className="mb-6">Thank you for your order. You'll receive a confirmation email shortly.</p>
              <button
                className="bg-[#66371B] text-[#E3D8C1] px-4 py-2 rounded hover:opacity-90"
                onClick={resetCheckout}
              >
                Continue Shopping
              </button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0 && checkoutStep === "cart") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[#E3D8C1]">
        <div className="max-w-xl w-full">
          <Card>
            <div className="p-8 text-center">
              <ShoppingCart size={64} className="mx-auto mb-4 text-[#66371B]" />
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="mb-6">Start browsing our products to add items to your cart.</p>
              <button
                className="bg-[#66371B] text-[#E3D8C1] px-4 py-2 rounded hover:opacity-90"
                onClick={() => window.location.href = "/browse"}
              >
                Continue Shopping
              </button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-[#E3D8C1]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <ShoppingBag size={24} /> Shopping Cart ({cartItems.length} items)
          </h1>
          {cartItems.map(item => (
            <Card key={item.id}>
              <div className="flex gap-4 p-4">
                <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-500">by {item.seller}</p>
                      {item.isDonated && <span className="text-xs bg-gray-200 px-2 py-1 rounded">Donated</span>}
                    </div>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="px-2 py-1 border rounded"
                      >-</button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 border rounded"
                      >+</button>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{item.isDonated ? "FREE" : `₹${(item.price * item.quantity).toFixed(2)}`}</p>
                      {!item.isDonated && <p className="text-sm text-gray-500">₹{item.price.toFixed(2)} each</p>}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-80 space-y-4">
          <Card>
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-700">
                  <span>Discount</span>
                  <span>-₹{discountAmount.toFixed(2)}</span>
                </div>
              )}
              {!allItemsDonated && (
                <>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shippingCost === 0 ? "FREE" : `₹${shippingCost.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (18%)</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                </>
              )}
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{allItemsDonated ? "FREE" : `₹${total.toFixed(2)}`}</span>
              </div>

              <input
                placeholder="Promo code"
                value={promoCode}
                onChange={e => setPromoCode(e.target.value)}
                className="w-full border px-2 py-1 rounded"
              />
              <button
                className="w-full bg-[#66371B] text-[#E3D8C1] px-4 py-2 rounded hover:opacity-90"
                onClick={applyPromoCode}
              >
                Apply Promo Code
              </button>
              <button
                className="w-full bg-[#66371B] text-[#E3D8C1] px-4 py-2 rounded hover:opacity-90"
                onClick={handleCheckout}
              >
                {allItemsDonated ? "Arrange Pickup" : "Checkout"}
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
