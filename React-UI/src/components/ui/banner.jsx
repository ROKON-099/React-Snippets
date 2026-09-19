

import { useState } from "react";

function Banner() {
  const products = [
    {
      id: 1,
      name: "Headphone",
      price: 2500
    },
    {
      id: 2,
      name: "Keyboard",
      price: 1800
    },
    {
      id: 3,
      name: "Mouse",
      price: 1200
    }
  ];

  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart([
      ...cart,
      {
        ...product,
        quantity: 1
      }
    ]);
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Products
      </h1>

      {/* Products */}
      <div className="flex gap-5">

        {products.map((product) => (
          <div
            key={product.id}
            className="border p-5 rounded-lg"
          >
            <h2 className="text-xl font-bold">
              {product.name}
            </h2>

            <p>৳{product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className="bg-black text-white px-4 py-2 mt-3 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}

      </div>


      {/* Cart */}
      <h1 className="text-2xl font-bold mt-10 mb-4">
        Cart
      </h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-2"
        >
          <h2>{item.name}</h2>
          <p>Price: ৳{item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}

    </div>
  );
}

export default Banner;

