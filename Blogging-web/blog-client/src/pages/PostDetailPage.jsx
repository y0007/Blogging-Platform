// PostDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { posts } from "../data/postData";

export default function PostDetailPage() {
  const { postId } = useParams();

  
  const post = posts.find((p) => String(p.id) === String(postId));

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <p className="mb-4 text-gray-600 text-lg">❌ Oops! Post not found.</p>
        <Link
          to="/"
          className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Go Home
        </Link>
      </div>
    );
  }

 
  const renderSection = (section, idx) => {
    switch (section.type) {
      case "paragraph":
        return (
          <p key={idx} className="mb-4 leading-relaxed text-gray-700">
            {section.text}
          </p>
        );
      case "heading":
        return (
          <h2
            key={idx}
            className="text-2xl font-semibold mt-6 mb-3 text-gray-900"
          >
            {section.text}
          </h2>
        );
      case "list":
        return (
          <ul key={idx} className="list-disc pl-6 mb-4 text-gray-700">
            {section.items?.map((it, i) => (
              <li key={i} className="mb-1">
                {it}
              </li>
            ))}
          </ul>
        );
      case "image":
        return (
          <img
            key={idx}
            src={section.url}
            alt="blog section"
            className="my-4 rounded-lg shadow w-full object-cover"
          />
        );
      default:
        return null;
    }
  };

  const hasContent = Array.isArray(post.content) && post.content.length > 0;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Cover Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg shadow"
      />

      {/* Title + Meta */}
      <h1 className="text-3xl font-bold mt-6 mb-2 text-gray-900">
        {post.title}
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        🏷️ {post.category} | 📅 {post.date || "Unknown date"}
      </p>

      {/* Blog Content */}
      <div>
        {hasContent ? (
          post.content.map(renderSection)
        ) : (
          <>
            <p className="mb-4 text-gray-700">{post.snippet}</p>
            <p className="text-gray-500 italic">Full content coming soon...</p>
          </>
        )}
      </div>

      {/* Back to Category */}
      <div className="mt-8">
        <Link
          to={`/category/${post.category?.toLowerCase() || "all"}`}
          className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          ← Back to {post.category || "Posts"}
        </Link>
      </div>
    </div>
  );
}
