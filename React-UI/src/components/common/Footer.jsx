import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <h2 className="text-white font-bold text-xl">YourLogo</h2>

        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/product" className="hover:text-white">Product</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>

        <p className="text-sm">© {new Date().getFullYear()} YourLogo. All rights reserved.</p>
        
      </div>
    </footer>
  )
}

export default Footer