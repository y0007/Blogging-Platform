import React, { useState, useEffect } from "react";

const BlogForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    snippet: "",
    content: "",
    image: ""
  });

  useEffect(() => {
    if (initialData) {
      setFormData({ ...formData, ...initialData });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 max-w-2xl mx-auto"
    >
      <div className="mb-4">
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Snippet</label>
        <input
          type="text"
          name="snippet"
          value={formData.snippet}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows="5"
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
      >
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
