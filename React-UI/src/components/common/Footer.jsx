
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Cart", path: "/cart" },
  { name: "Contact", path: "/contact" }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Logo & Description */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-white"
            >
              SMARKET
            </Link>

            <p className="mt-3 text-sm leading-6 max-w-sm">
              Your trusted online marketplace for quality electronics,
              gadgets, and computer accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {footerLinks.map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-sm hover:text-white transition"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>

            <div className="space-y-2 text-sm">
              <p>Email: support@smarket.com</p>
              <p>Phone: +880 1234-567890</p>
              <p>Bangladesh</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">

          <p className="text-sm text-center sm:text-left">
            © {new Date().getFullYear()} SMARKET. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm">
            <Link
              to="/privacy"
              className="hover:text-white transition"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="hover:text-white transition"
            >
              Terms
            </Link>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
