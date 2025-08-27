import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-600 text-sm mb-3">{blog.snippet}</p>
        <div className="flex justify-between items-center">
          <Link
            to={`/blogs/${blog._id}`}
            className="text-orange-600 hover:underline text-sm font-medium"
          >
            Read More
          </Link>
          <div className="flex gap-3">
            <Link
              to={`/edit/${blog._id}`}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm"
            >
              Edit
            </Link>
            <button
              onClick={() => onDelete(blog._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
