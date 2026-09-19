
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="min-h-[500px] py-12 lg:py-16 flex items-center">

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="text-center md:text-left">

              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                New Collection 2026
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Upgrade Your
                <span className="block text-blue-600">
                  Digital Lifestyle
                </span>
              </h1>

              <p className="mt-5 text-gray-600 text-sm sm:text-base lg:text-lg leading-7 max-w-lg mx-auto md:mx-0">
                Discover the latest smartphones, laptops, accessories,
                and smart gadgets at SMARKET. Quality products,
                competitive prices, and reliable service.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">

                <Link
                  to="/products"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Shop Now
                </Link>

                <Link
                  to="/products"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Explore Products
                </Link>

              </div>

              {/* Features */}
              <div className="mt-8 flex justify-center md:justify-start gap-6 sm:gap-10">

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    500+
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Products
                  </p>
                </div>

                <div className="border-x border-gray-300 px-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    10K+
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Customers
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    4.9★
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Rating
                  </p>
                </div>

              </div>

            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end">

              <img
                src="https://images.unsplash.com/photo-1587829741301-dc798b83add3"
                alt="Electronics products"
                className="
                  w-64
                  sm:w-72
                  md:w-80
                  lg:w-[400px]
                  xl:w-[450px]
                  object-contain
                  rounded-xl
                  shadow-xl
                "
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;
