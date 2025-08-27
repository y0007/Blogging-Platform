import { Link } from "react-router-dom";

const categories = [
  { name: "Food", image: "/images/food.jpg" },
  { name: "Travel", image: "/images/travel.jpg" },
  { name: "Health & Wellness", image: "/images/fitness.jpg" },
  { name: "Home Decor", image: "/images/decor.jpg" },
  { name: "Beauty & Fashion", image: "/images/beauty.jpg" },
  { name: "Fitness & Lifestyle", image: "/images/lifestyle.jpg" },
  { name: "Entertainment", image: "/images/entertainment.jpg" },
  { name: "Personal Development", image: "/images/personal.jpg" }
];

function CategoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Explore Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/category/${cat.name.toLowerCase()}`}
            className="block rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center font-semibold bg-white">{cat.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;