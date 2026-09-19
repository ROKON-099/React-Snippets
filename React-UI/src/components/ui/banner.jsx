import { useState } from "react";

function Banner() {
  const [product] = useState({
    name: "Wireless Headphone",
    price: 2500,
    category: "Electronics",
    id: 101
  });

  // Template literals
  const productUrl = `/products/${product.id}`;

  const message = `You selected ${product.name} for ৳${product.price}`;

  return (
    <div className="border p-5 rounded-lg w-80">
      <h2 className="text-xl font-bold">
        {product.name}
      </h2>

      <p>Category: {product.category}</p>

      <p className="text-lg">
        Price: ৳{product.price}
      </p>

      {/* Dynamic URL */}
      <a href={productUrl} className="text-blue-500">
        View Product
      </a>

      <button
        onClick={() => alert(message)}
        className="bg-black text-white px-4 py-2 mt-4"
      >
        Buy Now
      </button>
    </div>
  );
}

export default Banner;