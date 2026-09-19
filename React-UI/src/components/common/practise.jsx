import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Products", path: "/products" },
  { name: "My Cart", path: "/cart" },
  {name: "About us", path: "/about"}
  
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4">

        <div className="h-16 flex items-center  justify-around md:justify-around">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            SMARKET
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className="hover:text-blue-600"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-8">

            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} />

              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="hidden sm:block bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Login
            </Link>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden"
            >
              {open ? <X /> : <Menu />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col gap-2 pb-4">

            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className="p-3 hover:bg-gray-100 rounded"
              >
                {name}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="sm:hidden bg-blue-600 text-white text-center p-3 rounded-lg"
            >
              Login
            </Link>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;