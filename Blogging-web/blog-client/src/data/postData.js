
export const posts = [
  // ====== Travel ======
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
    category: "travel",
    title: "How to Travel on a Budget",
    image: "/images/budget.jpg",
    snippet: "Discover tips for affordable travel without missing out...",
    date: "2025-01-15",
    content: [
      { type: "paragraph", text: "Traveling on a budget is all about smart choices—book early, stay in hostels or guesthouses, eat local street food, use public transport, and seek out free attractions. With a little planning, you can explore the world without breaking the bank." }
    ]
  },

  // ====== Food ======
  {
    id: 3,
    category: "food",
    title: "Best Vegan Recipes in 2025",
    image: "/images/vegan.jpg",
    snippet: "Tasty vegan recipes that everyone will love...",
    date: "2025-02-05",
    content: [
      { type: "list", items: ["🥕 Carrot Lox in Salt Crust" , "🍝 Creamy Vegan Pasta" , "🍫 Avocado Chocolate Mousse"] }
    ]
  },

  // ====== Fitness & Lifestyle ======
  {
    id: 4,
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

  // ====== Health & Wellness ======
  {
    id: 5,
    category: "health & wellness",
    title: "Yoga for Beginners: Start Today",
    image: "/images/meditation.jpg",
    snippet: "Simple yoga poses to kickstart your wellness journey...",
    date: "2025-03-01",
    content: [
      {type: "list" , items: ["🧘 Child’s Pose" , "🌿 Tree Pose" , "💪 Downward Dog" , "🦋 Butterfly Pose" , "🐍 Cobra Pose" , "🌞 Sun Salutation"] }
    ]
  },

  // ====== Tech ======
  {
    id: 6,
    category: "tech",
    title: "AI Trends in 2025",
    image: "/images/tech.jpg",
    snippet: "Artificial intelligence is shaping the future...",
    date: "2025-03-12",
    content: [
      { type: "paragraph", text: "AI in 2025 is transforming how we live and work. From smart agents that handle tasks on their own to systems that understand images, text, and sound together, technology is becoming more intuitive and powerful. Businesses are using AI for faster decisions, personalized experiences, and sustainable solutions, while ethics and security remain key priorities." }
    ]
  },

  // ====== Lifestyle ======
  {
    id: 7,
    category: "lifestyle",
    title: "Top Minimalist Living Hacks",
    image: "/images/lifestyle.jpg",
    snippet: "Learn how to declutter and live minimally...",
    date: "2025-04-05",
    content: [
      { type: "paragraph", text: "Minimalist living in 2025 is all about smart, intentional choices. Declutter your space and sell unused items to turn clutter into cash. Follow the one-in, one-out rule to avoid overbuying, and rent out unused rooms or parking spots for extra income. Simple swaps like energy-efficient appliances help cut utility bills. These hacks save money, reduce stress, and create space for what truly matters." }
    ]
  },

  // ====== Finance ======
  {
    id: 8,
    category: "finance",
    title: "Best Investment Ideas in 2025",
    image: "/images/investment.jpg",
    snippet: "Where to invest in 2025 for maximum returns...",
    date: "2025-04-20",
    content: [
      { type: "paragraph", text: "In 2025, smart investing means tapping into innovation and stability. High-growth sectors like AI, clean energy, healthcare tech, and cybersecurity are attracting attention for their long-term potential. Meanwhile, traditional options like mutual funds, SIPs, and blue-chip stocks remain reliable for steady returns. Diversifying across asset classes and exploring REITs or ETFs can help balance risk while maximizing gains." }
    ]
  },

  // ====== Education ======
  {
    id: 9,
    category: "education",
    title: "Top 5 Online Learning Platforms",
    image: "/images/online-learning.jpg",
    snippet: "Best platforms for online courses in 2025...",
    date: "2025-05-01",
    content: [
      { type: "paragraph", text: "In 2025, online learning is thriving with platforms that offer flexible, skill-focused education. Top picks include **Coursera** for university-level courses, **Udemy** for diverse, affordable options, **edX** for academic depth, **Skillshare** for creative skills, and **Thinkific** for building and selling your own courses. These platforms empower learners to grow anytime, anywhere." }
    ]
  },

  // ====== Fashion ======
  {
    id: 10,
    category: "fashion",
    title: "Sustainable Fashion Brands in 2025",
    image: "/images/beauty.jpg",
    snippet: "Top eco-friendly fashion brands to support...",
    date: "2025-05-15",
    content: [
      { type: "paragraph", text: "In 2025, sustainable fashion is thriving with brands that blend style and ethics. Leading the charge are Reformation, known for trendy eco-conscious designs, and Patagonia, a pioneer in environmental activism. Allbirds continues to impress with natural-material footwear, while Stella McCartney sets the bar for luxury sustainability. Everlane remains a favorite for its transparent pricing and ethical production. These brands are reshaping fashion by prioritizing recycled materials, fair labor, and low-impact manufacturing." }
    ]
  },

  // ====== Popular Picks (also part of posts now) ======
  {
    id: 101,
    category: "fitness & lifestyle",
    title: "How to get good quality sleep",
    image: "/images/sleep.jpg",
    snippet: "Tips and tricks for better sleep hygiene...",
    date: "2025-06-01",
    content: [
      { type: "paragraph", text: "Good quality sleep is essential for overall health and well-being. To improve your sleep hygiene, establish a consistent sleep schedule by going to bed and waking up at the same time every day. Create a relaxing bedtime routine, such as reading or taking a warm bath, to signal your body that it's time to wind down. Make your sleep environment comfortable by keeping your bedroom cool, dark, and quiet. Limit exposure to screens before bedtime, as the blue light can interfere with your body's natural sleep-wake cycle. Avoid caffeine and heavy meals close to bedtime, and consider incorporating relaxation techniques like meditation or deep breathing exercises to help calm your mind." }
    ]
  },
  {
    id: 102,
    category: "food",
    title: "Top 5 Street Foods Around the World",
    image: "/images/streetfood.jpg",
    snippet: "A mouth-watering journey into global street food culture...",
    date: "2025-06-10",
    content: [
      { type: "paragraph", text: "Street food in 2025 continues to capture hearts and taste buds around the world. From Mexico’s flavorful tacos al pastor to India’s spicy pani puri, these bites offer a quick, authentic taste of local culture. American hot dogs remain a global staple, while Belgian waffles and French croissants bring sweet comfort to the streets. Each dish is a delicious reflection of its roots, served fresh and fast to hungry wanderers everywhere." }
    ]
  },
  {
    id: 103,
    category: "health & wellness",
    title: "Yoga for Beginners: Start Today",
    image: "/images/meditation.jpg",
    snippet: "Simple yoga poses to kickstart your wellness journey...",
    date: "2025-03-01",
    content: [
      {type: "list" , items: ["🧘 Child’s Pose" , "🌿 Tree Pose" , "💪 Downward Dog" , "🦋 Butterfly Pose" , "🐍 Cobra Pose" , "🌞 Sun Salutation"] }
    ]
  },
];

export const popularPosts = posts.filter((p) =>
  [101, 102, 103].includes(p.id)
);

export default posts;