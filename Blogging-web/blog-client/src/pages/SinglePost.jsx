// src/pages/SinglePost.jsx
import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data/postData";

const SinglePost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Post not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />

      
      <div className="text-gray-700 text-lg space-y-4">
        {post.content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return <p key={index}>{block.text}</p>;
            case "heading":
              return <h2 key={index} className="text-2xl font-semibold">{block.text}</h2>;
            case "list":
              return (
                <ul key={index} className="list-disc list-inside">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default SinglePost;
