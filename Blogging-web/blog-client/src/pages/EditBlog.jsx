import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog({ blogs, setBlogs }) {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const navigate = useNavigate();

  const [title, setTitle] = useState(blog?.title || "");
  const [content, setContent] = useState(blog?.content || "");
  const [image, setImage] = useState(blog?.image || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlog = {
      ...blog,
      title,
      content,
      image: image || "https://via.placeholder.com/600x400?text=No+Image",
    };
    setBlogs(blogs.map((b) => (b.id === blog.id ? updatedBlog : b)));
    navigate("/blogs");
  };

  if (!blog) return <p className="text-center mt-12 text-red-500">Blog not found!</p>;

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 border rounded-lg h-40"
          required
        ></textarea>
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
}

export default EditBlog;
