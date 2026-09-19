
import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  // Get cart from localStorage
  const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  };

  useEffect(() => {
    loadCart();

    // Navbar থেকে cart update হলে
    window.addEventListener("cartUpdated", loadCart);

    return () => {
      window.removeEventListener("cartUpdated", loadCart);
    };
  }, []);

  // Remove item
  const handleRemove = (id) => {
    const updatedCart = cart.filter(
      (item) => String(item.id) !== String(id)
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);

    // Navbar update
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Total Price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Total Items
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold mb-8">
        My Cart
      </h1>

      {cart.length === 0 ? (

        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-500">
            Your cart is empty
          </h2>

          <p className="text-gray-400 mt-2">
            Add some products to your cart.
          </p>
        </div>

      ) : (

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ================= CART ITEMS ================= */}

          <div className="lg:col-span-2 space-y-4">

            {cart.map((item) => (

              <div
                key={item.id}
                className="border rounded-xl p-4 flex gap-4 items-center"
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Product Info */}
                <div className="flex-1">

                  <h2 className="font-bold text-lg">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 text-sm">
                    {item.category}
                  </p>

                  <p className="text-blue-600 font-bold mt-1">
                    ${item.price}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Quantity: {item.quantity}
                  </p>

                </div>

                {/* Item Total */}
                <div className="text-right">

                  <p className="font-bold text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="mt-3 text-red-500 hover:text-red-700 text-sm font-semibold"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>


          {/* ================= CART SUMMARY ================= */}

          <div className="border rounded-xl p-6 h-fit">

            <h2 className="text-xl font-bold mb-6">
              Cart Summary
            </h2>

            <div className="flex justify-between mb-3">
              <span>Total Items</span>
              <span className="font-semibold">
                {totalItems}
              </span>
            </div>

            <div className="flex justify-between border-t pt-4">

              <span className="text-lg font-semibold">
                Total Price
              </span>

              <span className="text-2xl font-bold text-blue-600">
                ${totalPrice.toFixed(2)}
              </span>

            </div>

            <button
              className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Checkout
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;



 