import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaUser,
  FaCalendarAlt,
  FaPenFancy,
} from "react-icons/fa";

function SingleBlog({ blogs }) {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center mt-12 text-red-500 font-semibold">
        Blog not found!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-2xl shadow-xl">
      {/* Back Button */}
      <Link
        to="/blogs"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition mb-6 font-medium"
      >
        <FaArrowLeft /> Back to Blogs
      </Link>

      {/* Blog Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
        {blog.title}
      </h1>

      {/* Blog Meta Info */}
      <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-6 text-sm">
        <span className="flex items-center gap-2">
          <FaUser className="text-gray-400" /> Author:{" "}
          <span className="font-medium text-gray-700">Admin</span>
        </span>
        <span className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-400" />{" "}
          {new Date().toLocaleDateString()}
        </span>
      </div>

      {/* Blog Image */}
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-xl mb-8 shadow-md"
        />
      )}

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-10">
        {blog.content}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 px-5 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium shadow hover:bg-gray-200 transition"
        >
          <FaArrowLeft /> Back
        </Link>
        <Link
          to={`/blogs/edit/${blog.id}`}
          className="inline-flex items-center gap-2 px-5 py-3 bg-yellow-500 text-white rounded-lg font-semibold shadow hover:bg-yellow-600 transition"
        >
          <FaPenFancy /> Edit Blog
        </Link>
      </div>
    </div>
  );
}

export default SingleBlog;
