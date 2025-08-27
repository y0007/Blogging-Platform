// Dummy data (ye ek initial state ke liye use hoga)
let blogs = [
  {
    id: 1,
    title: "First Blog",
    content: "This is the first blog post content.",
    author: "Admin",
  },
  {
    id: 2,
    title: "Second Blog",
    content: "This is the second blog post content.",
    author: "Jeelsi",
  },
];

// Get all blogs
export const getBlogs = () => Promise.resolve(blogs);

// Get single blog
export const getBlogById = (id) =>
  Promise.resolve(blogs.find((blog) => blog.id === parseInt(id)));

// Add blog
export const addBlog = (blogData) => {
  const newBlog = { id: Date.now(), ...blogData };
  blogs.push(newBlog);
  return Promise.resolve(newBlog);
};

// Update blog
export const updateBlog = (id, blogData) => {
  blogs = blogs.map((blog) =>
    blog.id === parseInt(id) ? { ...blog, ...blogData } : blog
  );
  return Promise.resolve(blogData);
};

// Delete blog
export const deleteBlog = (id) => {
  blogs = blogs.filter((blog) => blog.id !== parseInt(id));
  return Promise.resolve(true);
};
