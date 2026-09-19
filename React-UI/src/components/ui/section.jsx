

import { useState } from "react"

const products = [
  { id: 1, name: "Wireless Headphone", price: 2500, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 2, name: "Smart Watch", price: 3500, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
  { id: 3, name: "Gaming Mouse", price: 1200, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500" },
  { id: 4, name: "Keyboard", price: 4500, image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=500" },
]

function Section() {
  const [search, setSearch] = useState("")

  // filter by name
  const filtered = products.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">My Products</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded-lg mb-6 w-full md:w-80"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div key={item.id} className="border rounded-xl p-4 shadow-sm">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="font-semibold mt-3">{item.name}</h2>
            <p className="text-sm text-gray-500">ID: {item.id}</p>
            <p className="font-bold mt-1">৳ {item.price}</p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && <p className="text-center mt-6 text-gray-500">No product found</p>}
    </div>
  )
}

export default Section
