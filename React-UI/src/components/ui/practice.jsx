
import { useState } from "react";

function Practice() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphone",
      price: 2500,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3200,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 3,
      name: "Keyboard",
      price: 1800,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: 1200,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
    }
  ];

  const [search, setSearch] = useState("");

  // filter()
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold text-center mb-6">
        My Products
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-80"
        />
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* map() */}
        {filteredProducts.map(product => (

          <div
            key={product.id}
            className="bg-white rounded-xl shadow p-4"
          >

            {/* Image on top */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Name left + Price right */}
            <div className="flex justify-between items-center mt-4">

              <h2 className="font-semibold">
                {product.name}
              </h2>

              <p className="font-bold text-green-600">
                {`৳${product.price}`}
              </p>

            </div>

            

          </div>

        ))}

      </div>

    </div>
  );
}

export default Practice;

