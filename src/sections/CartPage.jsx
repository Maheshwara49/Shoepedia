import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, updateItemQuantity, removeItem, calculateTotal } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const handleCheckout = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart ({cartItems.length} items)</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty!</p>
      ) : (
        <div>
          {/* Cart Items Table */}
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border border-gray-300">Item</th>
                <th className="p-4 border border-gray-300">Price</th>
                <th className="p-4 border border-gray-300">Quantity</th>
                <th className="p-4 border border-gray-300">Total</th>
                <th className="p-4 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="p-4 border border-gray-300 text-left">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      {item.description && <p className="text-sm">{item.description}</p>}
                    </div>
                  </td>
                  <td className="p-4 border border-gray-300">${item.price.toFixed(2)}</td>
                  <td className="p-4 border border-gray-300">
                    <div className="flex justify-center items-center gap-2">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-4 border border-gray-300">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="p-4 border border-gray-300">
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Summary Section */}
          <div className="mt-6 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">Subtotal: ${calculateTotal().toFixed(2)}</p>
              <p className="text-sm text-gray-600">* Taxes and shipping calculated at checkout</p>
            </div>
            <button
              className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleCheckout}
            >
              Check Out
            </button>
          </div>
        </div>
      )}

      {/* Checkout Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">Thank you for your purchase!</h2>
            <p className="text-gray-600 mb-6">Your order has been placed successfully.</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
