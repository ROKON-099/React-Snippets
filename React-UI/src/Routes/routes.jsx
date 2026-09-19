import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout.jsx";


import Home from "../pages/home.jsx";
import About from "../pages/about.jsx";
import Contact from "../pages/Contact.jsx";
import Product from "../pages/Product.jsx";
import Cart from "../pages/Cart.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      
      {
        path: "products", 
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },
]);

export default router;