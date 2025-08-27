import { useParams, Link } from "react-router-dom";
import { posts } from "../data/postData";

function CategoryPostPage() {
  const { categoryName } = useParams();

  // filter posts by category (case-insensitive)
  const filteredPosts = posts.filter(
    (post) =>
      post.category.toLowerCase() === decodeURIComponent(categoryName).toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {categoryName} Posts
      </h1>

      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-500">No posts found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link
              to={`/post/${post.id}`}
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition block"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.snippet}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPostPage;
