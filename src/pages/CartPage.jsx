import React from "react";
import { useLocation } from "react-router-dom"; // To get the cart passed via location state

const CartPage = () => {
  const { state } = useLocation(); // Accessing the state passed from ProductDetail
  const cartItems = state?.cart || []; // If no cart passed, default to an empty array

  const handleRemoveItem = (id) => {
    console.log("Remove item with id:", id);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">Your Cart</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={`https://via.placeholder.com/150?text=${item.name}`}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-500">${item.price}</p>
                    <div className="mt-2 flex items-center space-x-2">
                      <span className="text-sm">Qty:</span>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          console.log("Update quantity", e.target.value)
                        }
                        className="w-16 p-2 border rounded-lg text-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-lg font-semibold">
                    ${item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="mt-2 text-sm text-red-500 hover:underline">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}

        <div className="flex justify-between items-center mt-6">
          <div className="font-medium text-lg">Total:</div>
          <div className="font-semibold text-xl">${getTotalPrice()}</div>
        </div>

        <div className="mt-6 flex justify-center">
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
