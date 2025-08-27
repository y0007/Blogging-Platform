import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";

export default function Header() {
  const { loggedIn, logout } = useAuth();

  const handleLogout = () => {
    fetch("/api/v1/users/logout", {
      method: "POST",
      credentials: "include",
    }).then(() => {
      logout();
      window.location.reload();
    });
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50 p-4">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
            <h1 className="text-2xl font-bold text-orange-600">
              Life & Style
            </h1>
          </Link>
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium">
            Home
          </Link>
          <Link to="/latest" className="text-gray-700 hover:text-orange-600 font-medium">
            Latest Posts
          </Link>
          <Link to="/categories" className="text-gray-700 hover:text-orange-600 font-medium">
            Categories
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium">
            About
          </Link>
          <Link to="/blogs" className="text-gray-700 hover:text-orange-600 font-medium">
            Manage Blogs
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-orange-600 font-medium">
            Contact
          </Link>
        </nav>
        <div className="space-x-3 flex items-center">
          {loggedIn ? (
            <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-medium">Logout</button>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium">Login</Link>
              <Link to="/register" className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 font-medium">Register</Link>
            </>
          )}
        </div>
        {/* Mobile menu toggle (optional) */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            {/* Hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
