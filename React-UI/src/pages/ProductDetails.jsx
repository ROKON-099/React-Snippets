
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  // Get product by ID
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        const singleProduct = data.find(
          (item) => String(item.id) === String(id)
        );

        setProduct(singleProduct);
      });
  }, [id]);

  // Quantity Increase
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Quantity Decrease
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Add To Cart
  const handleAddToCart = () => {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check product already exists
    const existingProduct = oldCart.find(
      (item) => String(item.id) === String(product.id)
    );

    let updatedCart;

    if (existingProduct) {
      // Existing product → increase quantity
      updatedCart = oldCart.map((item) =>
        String(item.id) === String(product.id)
          ? {
              ...item,
              quantity: item.quantity + quantity,
            }
          : item
      );
    } else {
      // New product → add
      updatedCart = [
        ...oldCart,
        {
          ...product,
          quantity: quantity,
        },
      ];
    }

    // Save cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setMessage(`${product.name} added to cart!`);
  };

  // Loading
  if (!product) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <p className="text-lg text-gray-500">
          Loading product...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Back Button */}
      <Link
        to="/products"
        className="inline-block mb-8 text-blue-600 hover:underline"
      >
        ← Back to Products
      </Link>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* ================= IMAGE ================= */}

        <div className="bg-gray-100 rounded-2xl overflow-hidden">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover"
          />

        </div>


        {/* ================= DETAILS ================= */}

        <div className="flex flex-col justify-center">

          {/* Category */}
          <p className="text-sm text-blue-600 font-semibold uppercase">
            {product.category}
          </p>

          {/* Name */}
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">

            <span className="text-yellow-500 text-lg">
              ⭐
            </span>

            <span className="font-semibold">
              {product.rating}
            </span>

            <span className="text-gray-500">
              / 5
            </span>

          </div>

          {/* Price */}
          <p className="text-3xl font-bold text-blue-600 mt-5">
            ${product.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-7 mt-5">
            {product.description ||
              "This is a high-quality product. It is designed with modern features and provides excellent performance and user experience."}
          </p>


          {/* ================= QUANTITY ================= */}

          <div className="mt-7">

            <p className="font-semibold mb-2">
              Quantity
            </p>

            <div className="flex items-center">

              <button
                onClick={decreaseQuantity}
                className="w-10 h-10 border rounded-l-lg text-xl hover:bg-gray-100"
              >
                -
              </button>

              <span className="w-14 h-10 border-t border-b flex items-center justify-center font-semibold">
                {quantity}
              </span>

              <button
                onClick={increaseQuantity}
                className="w-10 h-10 border rounded-r-lg text-xl hover:bg-gray-100"
              >
                +
              </button>

            </div>

          </div>


          {/* Total Price */}
          <div className="mt-5">

            <p className="text-gray-600">
              Total:
            </p>

            <p className="text-2xl font-bold">
              ${(product.price * quantity).toFixed(2)}
            </p>

          </div>


          {/* ================= ADD TO CART ================= */}

          <button
            onClick={handleAddToCart}
            className="mt-6 w-full md:w-72 bg-black text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Add {quantity} to Cart
          </button>


          {/* Success Message */}
          {message && (
            <p className="mt-4 text-green-600 font-medium">
              ✓ {message}
            </p>
          )}

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;

