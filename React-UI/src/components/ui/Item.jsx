

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Item() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("All");

  // Fetch Products
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Search + Category
  let filtered = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  // Sort
  if (sort === "low") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  // Add To Cart
  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("Added to cart:", product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* ================= TOP FILTER ================= */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">

        {/* LEFT - Search + Category */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-2/3">

          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 border border-gray-300 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full sm:w-48 border border-gray-300 px-4 py-2 rounded-lg"
          >
            <option value="All">All Category</option>
            <option value="Phone">Phone</option>
            <option value="Laptop">Laptop</option>
            <option value="Watch">Watch</option>
          </select>

        </div>

        {/* RIGHT - Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full md:w-52 border border-gray-300 px-4 py-2 rounded-lg"
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
          <option value="rating">Rating: High → Low</option>
        </select>

      </div>


      {/* ================= PRODUCT SECTION ================= */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {filtered.map((item) => (

          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="group border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-xl transition duration-300"
          >

            {/* Image */}
            <div className="h-48 bg-gray-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>


            {/* Card Content */}
            <div className="p-4">

              {/* Name + Price */}
              <div className="flex justify-between items-center gap-2">

                <h2 className="font-semibold text-gray-800 truncate">
                  {item.name}
                </h2>

                <p className="font-bold text-blue-600 whitespace-nowrap">
                  ${item.price}
                </p>

              </div>

              {/* Category + Rating */}
              <div className="flex justify-between items-center mt-2">

                <p className="text-sm text-gray-500">
                  {item.category}
                </p>

                <p className="text-sm">
                  ⭐ {item.rating}
                </p>

              </div>


              {/* Add To Cart */}
              <button
                onClick={(e) => handleAddToCart(e, item)}
                className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>

            </div>

          </Link>

        ))}

      </div>


      {/* No Product */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold text-gray-500">
            No products found
          </h2>
        </div>
      )}

    </div>
  );
}

export default Item;

