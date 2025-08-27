// src/pages/BlogsPage.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BlogList from "../components/BlogList";
import AddBlog from "../components/AddBlog";
import EditBlog from "../components/EditBlog";
import BlogDetail from "../components/BlogDetail";

function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<BlogList blogs={blogs} setBlogs={setBlogs} />} />
      <Route path="/add" element={<AddBlog blogs={blogs} setBlogs={setBlogs} />} />
      <Route path="/edit/:id" element={<EditBlog blogs={blogs} setBlogs={setBlogs} />} />
      <Route path="/:id" element={<BlogDetail blogs={blogs} />} />
    </Routes>
  );
}

export default BlogsPage;
