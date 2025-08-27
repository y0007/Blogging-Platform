// LatestPost.jsx
import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/postData";

const LatestPost = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h3 className="text-3xl text-orange-600 mb-6 text-center font-bold">
        Latest Posts
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {/* Post Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />

            {/* Post Info */}
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
              <p className="text-gray-600 mb-4">{post.snippet}</p>

              {/* Read More Link (dynamic) */}
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
  );
};

export default LatestPost;
