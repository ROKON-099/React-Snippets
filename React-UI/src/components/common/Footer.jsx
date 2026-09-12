import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Github, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo + About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">YourLogo</h2>
            <p className="text-sm text-gray-400 mb-4">
              We build modern web apps and software solutions for your business. 
              Fast, secure, and scalable.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-pink-500 transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gray-100 transition"><Github size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition">Dashboard</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +880 1XXXXXXXXX
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> support@yourlogo.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} YourLogo. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ by Your Team</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer