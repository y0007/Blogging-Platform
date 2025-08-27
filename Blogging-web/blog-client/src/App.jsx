import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import LatestPost from "./pages/LatestPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CategoryPage from "./pages/CategoryPage";
import PostDetailPage from "./pages/PostDetailPage";
import CategoryPostPage from "./pages/CategoryPostPage";
import Footer from "./components/Footer/Footer";
import SinglePost from "./pages/SinglePost";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./AuthContext";

// 🆕 Import Blog CRUD Pages
import BlogList from "./pages/BlogList";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import SingleBlog from "./pages/SingleBlog";

import { useState } from "react";

function App() {
  // ✅ Centralized Blog State
  const [blogs, setBlogs] = useState([]);

  return (
    <AuthProvider>
      <Router>
        <Header />
        <div className="pt-24 px-6">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/latest" element={<LatestPost />} />
              <Route path="/categories" element={<CategoryPage />} />
              <Route
                path="/category/:categoryName"
                element={<CategoryPostPage />}
              />
              <Route path="/post/:postId" element={<PostDetailPage />} />
              <Route path="/latest-posts/:id" element={<SinglePost />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* 🆕 Blog CRUD Routes with props */}
              <Route
                path="/blogs"
                element={<BlogList blogs={blogs} setBlogs={setBlogs} />}
              />
              <Route
                path="/blogs/add"
                element={<AddBlog blogs={blogs} setBlogs={setBlogs} />}
              />
              <Route
                path="/blogs/edit/:id"
                element={<EditBlog blogs={blogs} setBlogs={setBlogs} />}
              />
              <Route
                path="/blogs/:id"
                element={<SingleBlog blogs={blogs} />}
              />
            </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
