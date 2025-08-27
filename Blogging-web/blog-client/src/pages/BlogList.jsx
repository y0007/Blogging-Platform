import { Link } from "react-router-dom";
import { FaPlus, FaBookOpen, FaEdit, FaTrash } from "react-icons/fa";

function BlogList({ blogs, setBlogs }) {
  // ✅ Delete blog
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      const updatedBlogs = blogs.filter((blog) => blog.id !== id);
      setBlogs(updatedBlogs);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-12 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
        Blog Management
      </h1>

      {/* Add New Blog */}
      <div className="text-center mb-10">
        <Link
          to="/blogs/add"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow hover:opacity-90 transition"
        >
          <FaPlus /> Add New Blog
        </Link>
      </div>

      {/* Blog Cards */}
      {blogs.length === 0 ? (
        <p className="text-center text-lg text-gray-500">No blogs available. Add one!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-2xl transition flex flex-col"
            >
              {/* Blog Image */}
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                />
              )}

              {/* Blog Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-5 text-sm line-clamp-3">
                  {blog.content.length > 120
                    ? blog.content.substring(0, 120) + "..."
                    : blog.content}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-medium shadow hover:bg-green-600 transition"
                  >
                    <FaBookOpen /> Read More
                  </Link>
                  <Link
                    to={`/blogs/edit/${blog.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 text-white text-sm font-medium shadow hover:bg-yellow-600 transition"
                  >
                    <FaEdit /> Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium shadow hover:bg-red-600 transition"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogList;
