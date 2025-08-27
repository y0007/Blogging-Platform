import React from 'react'
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Life & Style</h2>
          <p className="text-sm leading-relaxed">
            A lifestyle blog sharing ideas on travel, food, personal growth,
            and inspiration for everyday living.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500">Categories</Link></li>
            <li><Link to="/categories" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><Link to="/category/travel" className="hover:text-orange-500">Travel</Link></li>
            <li><Link to="/category/food" className="hover:text-orange-500">Food</Link></li>
            <li><Link to="/category/health" className="hover:text-orange-500">Health</Link></li>
            <li><Link to="/category/lifestyle" className="hover:text-orange-500">Lifestyle</Link></li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition text-white px-4 py-2 rounded-lg"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-orange-500"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-500"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-500"><FaGlobe /></a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Life & Style. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer;
