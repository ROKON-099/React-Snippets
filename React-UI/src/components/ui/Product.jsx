
import { useState } from "react";

function Product() {

  // ============================================
  // 1. PRODUCT DATA - 20 OBJECTS
  // ============================================

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 70000,
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
      id: 2,
      name: "iPhone",
      price: 85000,
      img: "https://images.unsplash.com/photo-1592286927505-2fd0d6a9e7f1"
    },
    {
      id: 3,
      name: "Samsung Phone",
      price: 35000,
      img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c"
    },
    {
      id: 4,
      name: "Headphone",
      price: 2500,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      id: 5,
      name: "Keyboard",
      price: 1800,
      img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
    },
    {
      id: 6,
      name: "Gaming Mouse",
      price: 1500,
      img: "https://images.unsplash.com/photo-1527814050087-3793815479db"
    },
    {
      id: 7,
      name: "Smart Watch",
      price: 4500,
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 8,
      name: "Tablet",
      price: 28000,
      img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
    },
    {
      id: 9,
      name: "Camera",
      price: 55000,
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
    },
    {
      id: 10,
      name: "Speaker",
      price: 3500,
      img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7c1"
    },
    {
      id: 11,
      name: "Backpack",
      price: 2200,
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
    },
    {
      id: 12,
      name: "Sneakers",
      price: 3200,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 13,
      name: "T-Shirt",
      price: 800,
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      id: 14,
      name: "Jacket",
      price: 4500,
      img: "https://images.unsplash.com/photo-1551028719-00167b16eac5"
    },
    {
      id: 15,
      name: "Sunglasses",
      price: 1800,
      img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
    },
    {
      id: 16,
      name: "Wallet",
      price: 1200,
      img: "https://images.unsplash.com/photo-1627123424574-724758594e93"
    },
    {
      id: 17,
      name: "Watch",
      price: 6500,
      img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d"
    },
    {
      id: 18,
      name: "Power Bank",
      price: 1800,
      img: "https://images.unsplash.com/photo-1609592424722-7c7f9f6e7c8c"
    },
    {
      id: 19,
      name: "USB Cable",
      price: 500,
      img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0"
    },
    {
      id: 20,
      name: "Monitor",
      price: 25000,
      img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
    }
  ];


  // ============================================
  // 2. STATE
  // ============================================

  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("");

  const [cart, setCart] = useState([]);


  // ============================================
  // 3. SEARCH + FILTER
  // ============================================

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  // ============================================
  // 4. SORT
  // ============================================

  const sortedProducts = [...filteredProducts].sort(
    (a, b) => {

      if (sort === "low") {
        return a.price - b.price;
      }

      if (sort === "high") {
        return b.price - a.price;
      }

      return 0;
    }
  );


  // ============================================
  // 5. ADD TO CART
  // ============================================

  const addToCart = (product) => {

    // SOME
    const alreadyExists = cart.some(
      (item) => item.id === product.id
    );

    if (alreadyExists) {
      alert("Product already in cart!");
      return;
    }

    setCart([
      ...cart,
      {
        ...product,
        quantity: 1
      }
    ]);
  };


  // ============================================
  // 6. REMOVE FROM CART
  // ============================================

  const removeFromCart = (id) => {

    setCart(
      cart.filter((item) => item.id !== id)
    );

  };


  // ============================================
  // 7. FIND
  // ============================================

  const featuredProduct = products.find(
    (product) => product.id === 1
  );


  // ============================================
  // 8. REDUCE
  // ============================================

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* =====================================
          HEADER
      ====================================== */}

      <h1 className="text-4xl font-bold text-center mb-10">
        My Product Shop
      </h1>


      {/* =====================================
          MAIN SECTION
      ====================================== */}

      <div className="flex gap-8">


        {/* ===================================
            LEFT SIDE
        ==================================== */}

        <aside className="w-64 bg-white p-5 rounded-xl shadow h-fit">

          <h2 className="text-xl font-bold mb-5">
            Search & Filter
          </h2>


          {/* SEARCH */}

          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 rounded-lg w-full mb-5"
          />


          {/* FILTER */}

          <h3 className="font-semibold mb-2">
            Category
          </h3>

          <button className="block mb-2">
            All Products
          </button>

          <button className="block mb-2">
            Electronics
          </button>

          <button className="block">
            Fashion
          </button>

        </aside>


        {/* ===================================
            RIGHT SIDE
        ==================================== */}

        <main className="flex-1">


          {/* SORT */}

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold">
              Products
            </h2>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border p-3 rounded-lg"
            >

              <option value="">
                Sort By
              </option>

              <option value="low">
                Price Low → High
              </option>

              <option value="high">
                Price High → Low
              </option>

            </select>

          </div>


          {/* =================================
              PRODUCT CARDS
          ================================== */}

          <div className="grid grid-cols-3 gap-6">

            {sortedProducts.map(
              ({ id, name, price, img }) => (

              <div
                key={id}
                className="bg-white rounded-xl shadow overflow-hidden"
              >

                {/* IMAGE */}

                <img
                  src={img}
                  alt={name}
                  className="w-full h-48 object-cover"
                />


                {/* CONTENT */}

                <div className="p-5">

                  <h3 className="text-xl font-bold">
                    {name}
                  </h3>


                  {/* TEMPLATE LITERAL */}

                  <p className="text-green-600 font-bold mt-2">
                    {`৳${price}`}
                  </p>


                  <button
                    onClick={() =>
                      addToCart({
                        id,
                        name,
                        price,
                        img
                      })
                    }
                    className="bg-black text-white px-4 py-2 mt-4 rounded-lg w-full"
                  >
                    Add To Cart
                  </button>

                </div>

              </div>

            ))}

          </div>

        </main>

      </div>


      {/* =====================================
          FEATURED PRODUCT
      ====================================== */}

      <div className="bg-white p-6 rounded-xl shadow mt-10">

        <h2 className="text-2xl font-bold">
          Featured Product
        </h2>

        <p className="mt-2">
          {featuredProduct.name}
        </p>

        <p>
          {`Price: ৳${featuredProduct.price}`}
        </p>

      </div>


      {/* =====================================
          CART SECTION
      ====================================== */}

      <div className="bg-white p-8 rounded-xl shadow mt-10">

        <h2 className="text-3xl font-bold mb-6">
          Shopping Cart
        </h2>


        {cart.length === 0 ? (

          <p className="text-gray-500">
            Cart is empty
          </p>

        ) : (

          cart.map(
            ({ id, name, price, img }) => (

            <div
              key={id}
              className="flex items-center justify-between border-b py-4"
            >

              <div className="flex items-center gap-4">

                <img
                  src={img}
                  alt={name}
                  className="w-16 h-16 object-cover rounded"
                />

                <div>

                  <h3 className="font-bold">
                    {name}
                  </h3>

                  <p>
                    {`৳${price}`}
                  </p>

                </div>

              </div>


              {/* REMOVE */}

              <button
                onClick={() => removeFromCart(id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>

            </div>

          ))

        )}


        {/* TOTAL */}

        <div className="text-right mt-6">

          <h2 className="text-2xl font-bold">
            {`Total: ৳${totalPrice}`}
          </h2>

        </div>

      </div>

    </div>
  );
}

export default Product;

