import React from "react";
import { FaUtensils, FaPlane, FaHeart, FaHome, FaPalette, FaRunning, FaFilm, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { posts, popularPosts } from "../data/postData";

function Home() {
  const posts = [
    {
    id: 1,
    category: "travel",
    title: "Top 10 Destinations to Visit in 2025",
    image: "/images/travel.jpg",
    snippet: "Explore the most beautiful places around the world in 2025...",
    date: "2025-01-10",
    content: [
      { type: "paragraph", text: "Travel opens up new horizons..." },
      { type: "heading", text: "Best Places to Visit" },
      { type: "list", items: ["Bali", "Paris", "Tokyo", "Dubai"] }
    ]
  },
  {
    id: 2,
    category: "food",
    title: "Best Vegan Recipes in 2025",
    image: "/images/vegan.jpg",
    snippet: "Tasty vegan recipes that everyone will love...",
    date: "2025-02-05",
    content: [
      { type: "list", items: ["🥕 Carrot Lox in Salt Crust" , "🍝 Creamy Vegan Pasta" , "🍫 Avocado Chocolate Mousse"] }
    ]
  },
  {
    id: 3,
    category: "fitness & lifestyle",
    title: "10 Morning Habits for a Productive Day",
    image: "/images/fitness.jpg",
    snippet: "Boost your productivity with these simple morning rituals...",
    date: "2025-02-18",
    content: [
      { type: "list", items: ["Wake up early", "Hydrate first thing", "Practice mindfulness or meditation" , "Move your body" , "Eat a Balanced diet" , "Plan your day" , "Express Gratitude" , "Avoid Screens" , 
      "Read or Learn Something New" , "Get Sunlight"] }
    ]
  },
  ];
  const categories = [
    { name: "Food & Recipes", icon: <FaUtensils className="w-8 h-8 mx-auto mb-2 text-orange-500" /> },
    { name: "Travel", icon: <FaPlane className="w-8 h-8 mx-auto mb-2 text-orange-500" /> },
    { name: "Health & Wellness", icon: <FaHeart className="w-8 h-8 mx-auto mb-2 text-orange-500" /> },
    { name: "Home & Decor", icon: <FaHome className="w-8 h-8 mx-auto mb-2 text-orange-500" /> },
    { name: "Beauty & Fashion", icon: <FaPalette className="w-8 h-8 mx-auto mb-2 text-orange-500" /> },
    { name: "Fitness & Lifestyle", icon: <FaRunning className="w-8 h-8 mx-auto mb-2 text-orange-500" /> },
    { name: "Entertainment", icon: <FaFilm className="w-8 h-8 mx-auto mb-2 text-orange-500" /> },
    { name: "Personal Development", icon: <FaBook className="w-8 h-8 mx-auto mb-2 text-orange-500" /> },
  ];

  return (
    <main className="mt-20">


      {/* Hero Section */}
      {/* 3-Image Grid */}
      <section className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <img
              src="https://static.wixstatic.com/media/84770f_579889e3c7ab4551ac493b6e60ebc25a~mv2.jpg/v1/fill/w_836,h_832,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_579889e3c7ab4551ac493b6e60ebc25a~mv2.jpg"
              alt="Workspace"
              className="w-full h-[550px] object-cover"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/75059a_a28bb23346c740cfa809bb26a81ce414~mv2.jpg/v1/fill/w_825,h_832,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/75059a_a28bb23346c740cfa809bb26a81ce414~mv2.jpg"
              alt="Person"
              className="w-full h-[550px] object-cover"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/84770f_c8617aa06c6e43f5a95ebf63003a2347~mv2.jpg/v1/fill/w_825,h_832,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_c8617aa06c6e43f5a95ebf63003a2347~mv2.jpg"
              alt="Plant"
              className="w-full h-[550px] object-cover"
            />
          </div>
        </div>

        {/* Floating Tagline */}
        <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2">
          <h2 className="bg-white px-6 py-3 text-2xl md:text-4xl font-serif">
            My Life. My Blog.
          </h2>
        </div>
      </section>

      {/* Latest Blog Posts */}
       <section className="max-w-7xl mx-auto px-6 mt-20">
        <h3 className="text-3xl text-orange-600 mb-6 mt-26 text-center font-bold">
          Latest Posts
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
                <p className="text-gray-600 mb-4">{post.snippet}</p>

                <Link
                  to={`/latest-posts/${post.id}`}
                  className="text-orange-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category section */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <h3 className="text-2xl font-bold mb-8 text-center text-orange-600">
          Explore Lifestyle Categories
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => navigate("/categories")} // 👈 redirect when card clicked
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer"
            >
              {cat.icon}
              <h4 className="text-lg font-semibold mb-2">{cat.name}</h4>
              <p className="text-gray-500 text-sm">
                Browse articles about {cat.name.toLowerCase()}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* About Preview Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl text-orange-600 font-bold mb-4">About Our Blog</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Welcome to our lifestyle blog where we share tips on food, travel,
          wellness, and more. Our mission is to inspire and guide you in living
          a balanced and creative life.
        </p>
        <Link
          to="/about"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition"
        >
          Learn More
        </Link>
      </section>

      {/* Popular Posts Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-orange-600 text-center mb-10">Popular Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {popularPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{post.snippet}</p>
                  <Link
                    to={`/post/${post.id}`}
                    className="text-orange-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-orange-600">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter and never miss a story!
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg border border-gray-300 w-full sm:w-80 focus:ring-2 focus:ring-orange-500 outline-none"
          />
          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-orange-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore More?</h2>
        <p className="mb-6">Dive into inspiring stories and useful tips curated just for you.</p>
        <Link
          to="/categories"
          className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Browse All Categories
        </Link>
      </section>
        


    </main>
  );
}

export default Home;
