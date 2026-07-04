const sliderData = [
  {
    id: "sl1-prod-101",
    title: "The Art of Creative Thinking",
    image: "https://m.media-amazon.com/images/I/717Qd-IsDsL._AC_SY200_.jpg",
    price: 18.99,
    oldPrice: 25.00,
    rating: 4.8,
    reviewsCount: "14,200",
    description: "A comprehensive guide to unlocking your creative potential with daily exercises and insights."
  },
  {
    id: "sl1-prod-102",
    title: "Mastery: The Complete Guide",
    image: "https://m.media-amazon.com/images/I/81+oQBvBR-L._AC_SY200_.jpg",
    price: 22.50,
    oldPrice: 30.00,
    rating: 4.7,
    reviewsCount: "8,900",
    description: "Learn the secrets of world-class performers and how to achieve mastery in any field."
  },
  {
    id: "sl1-prod-103",
    title: "Mindset: The New Psychology",
    image: "https://m.media-amazon.com/images/I/61x-LF9fyYL._AC_SY200_.jpg",
    price: 15.99,
    oldPrice: 19.99,
    rating: 4.6,
    reviewsCount: "22,150",
    description: "Discover how a simple belief about yourself guides every part of your life."
  },
  {
    id: "sl1-prod-104",
    title: "Digital Minimalism",
    image: "https://m.media-amazon.com/images/I/71Re2d3PWwL._AC_SY200_.jpg",
    price: 14.00,
    oldPrice: 22.00,
    rating: 4.5,
    reviewsCount: "5,400",
    description: "A strategy for focused living in an increasingly noisy world."
  },
  {
    id: "sl1-prod-105",
    title: "The Power of Habit",
    image: "https://m.media-amazon.com/images/I/813VxDa8veL._AC_SY200_.jpg",
    price: 12.99,
    oldPrice: 18.00,
    rating: 4.9,
    reviewsCount: "45,600",
    description: "Why we do what we do in life and business, and how to change for the better."
  },
  {
    id: "sl1-prod-106",
    title: "Deep Work: Focused Success",
    image: "https://m.media-amazon.com/images/I/717M3HyuMEL._AC_SY200_.jpg",
    price: 24.99,
    oldPrice: 35.00,
    rating: 4.8,
    reviewsCount: "12,800",
    description: "Rules for focused success in a distracted world. A must-read for professionals."
  },
  {
    id: "sl1-prod-107",
    title: "Atomic Habits - Hardcover",
    image: "https://m.media-amazon.com/images/I/71GX5QGOKsL._AC_SY200_.jpg",
    price: 20.00,
    oldPrice: 28.00,
    rating: 4.9,
    reviewsCount: "98,000",
    description: "An easy and proven way to build good habits and break bad ones."
  },
  {
    id: "sl1-prod-108",
    title: "The Subtle Art",
    image: "https://m.media-amazon.com/images/I/712937-9MSL._AC_SY200_.jpg",
    price: 11.50,
    oldPrice: 15.00,
    rating: 4.4,
    reviewsCount: "66,300",
    description: "A counterintuitive approach to living a good life that focuses on what truly matters."
  },
  {
    id: "sl1-prod-109",
    title: "Focus: The Hidden Driver",
    image: "https://m.media-amazon.com/images/I/717Qd-IsDsL._AC_SY200_.jpg",
    price: 17.50,
    oldPrice: 22.00,
    rating: 4.3,
    reviewsCount: "3,200",
    description: "Understanding the science of attention and how to excel in the age of distraction."
  },
  {
    id: "sl1-prod-110",
    title: "Ego is the Enemy",
    image: "https://m.media-amazon.com/images/I/81+oQBvBR-L._AC_SY200_.jpg",
    price: 19.99,
    oldPrice: 24.99,
    rating: 4.7,
    reviewsCount: "9,500",
    description: "The fight to master our greatest internal opponent."
  },
  {
    id: "sl1-prod-111",
    title: "Limitless Living",
    image: "https://m.media-amazon.com/images/I/61x-LF9fyYL._AC_SY200_.jpg",
    price: 21.00,
    oldPrice: 29.00,
    rating: 4.6,
    reviewsCount: "2,100",
    description: "Upgrade your brain, learn anything faster, and unlock your exceptional life."
  },
  {
    id: "sl1-prod-112",
    title: "The 5 AM Club",
    image: "https://m.media-amazon.com/images/I/71Re2d3PWwL._AC_SY200_.jpg",
    price: 13.40,
    oldPrice: 19.00,
    rating: 4.5,
    reviewsCount: "18,400",
    description: "Own your morning. Elevate your life. A guide to world-class productivity."
  },
  {
    id: "sl1-prod-113",
    title: "Thinking, Fast and Slow",
    image: "https://m.media-amazon.com/images/I/813VxDa8veL._AC_SY200_.jpg",
    price: 22.99,
    oldPrice: 32.00,
    rating: 4.7,
    reviewsCount: "31,000",
    description: "A Nobel Prize winner's exploration of the two systems that drive the way we think."
  },
  {
    id: "sl1-prod-114",
    title: "Good to Great",
    image: "https://m.media-amazon.com/images/I/717M3HyuMEL._AC_SY200_.jpg",
    price: 28.00,
    oldPrice: 38.00,
    rating: 4.8,
    reviewsCount: "15,200",
    description: "Why some companies make the leap and others don't."
  },
  {
    id: "sl1-prod-115",
    title: "Daring Greatly",
    image: "https://m.media-amazon.com/images/I/71GX5QGOKsL._AC_SY200_.jpg",
    price: 16.50,
    oldPrice: 22.00,
    rating: 4.6,
    reviewsCount: "25,000",
    description: "How the courage to be vulnerable transforms the way we live, love, and parent."
  },
  {
    id: "sl1-prod-116",
    title: "Quiet: The Power of Introverts",
    image: "https://m.media-amazon.com/images/I/712937-9MSL._AC_SY200_.jpg",
    price: 14.50,
    oldPrice: 20.00,
    rating: 4.7,
    reviewsCount: "42,000",
    description: "The world that can't stop talking needs to hear the power of introversion."
  },
  {
    id: "sl1-prod-117",
    title: "Start With Why",
    image: "https://m.media-amazon.com/images/I/717Qd-IsDsL._AC_SY200_.jpg",
    price: 15.00,
    oldPrice: 21.00,
    rating: 4.8,
    reviewsCount: "35,400",
    description: "How great leaders inspire everyone to take action."
  },
  {
    id: "sl1-prod-118",
    title: "The 4-Hour Workweek",
    image: "https://m.media-amazon.com/images/I/81+oQBvBR-L._AC_SY200_.jpg",
    price: 19.00,
    oldPrice: 26.00,
    rating: 4.5,
    reviewsCount: "28,000",
    description: "Escape 9-5, live anywhere, and join the new rich."
  },
  {
    id: "sl1-prod-119",
    title: "Man's Search for Meaning",
    image: "https://m.media-amazon.com/images/I/61x-LF9fyYL._AC_SY200_.jpg",
    price: 10.99,
    oldPrice: 14.00,
    rating: 4.9,
    reviewsCount: "82,000",
    description: "A psychiatrist's memoir of surviving the Holocaust and finding hope."
  },
  {
    id: "sl1-prod-120",
    title: "Essentialism: Focused Pursuit",
    image: "https://m.media-amazon.com/images/I/71Re2d3PWwL._AC_SY200_.jpg",
    price: 17.00,
    oldPrice: 24.00,
    rating: 4.7,
    reviewsCount: "13,500",
    description: "The disciplined pursuit of less, helping you regain control of your own choices."
  },
  {
    id: "sl1-prod-121",
    title: "The Alchemist",
    image: "https://m.media-amazon.com/images/I/813VxDa8veL._AC_SY200_.jpg",
    price: 14.20,
    oldPrice: 18.00,
    rating: 4.8,
    reviewsCount: "105,000",
    description: "A fabled story about following your dreams and listening to your heart."
  },
  {
    id: "sl1-prod-122",
    title: "Zero to One",
    image: "https://m.media-amazon.com/images/I/717M3HyuMEL._AC_SY200_.jpg",
    price: 20.50,
    oldPrice: 28.00,
    rating: 4.6,
    reviewsCount: "19,000",
    description: "Notes on startups, or how to build the future."
  },
  {
    id: "sl1-prod-123",
    title: "The Lean Startup",
    image: "https://m.media-amazon.com/images/I/71GX5QGOKsL._AC_SY200_.jpg",
    price: 21.99,
    oldPrice: 30.00,
    rating: 4.7,
    reviewsCount: "24,300",
    description: "How constant innovation creates radically successful businesses."
  },
  {
    id: "sl1-prod-124",
    title: "The Hard Thing About Hard Things",
    image: "https://m.media-amazon.com/images/I/712937-9MSL._AC_SY200_.jpg",
    price: 23.00,
    oldPrice: 33.00,
    rating: 4.8,
    reviewsCount: "11,200",
    description: "Building a business when there are no easy answers."
  },
  {
    id: "sl1-prod-125",
    title: "Creativity, Inc.",
    image: "https://m.media-amazon.com/images/I/717Qd-IsDsL._AC_SY200_.jpg",
    price: 18.00,
    oldPrice: 26.00,
    rating: 4.9,
    reviewsCount: "9,800",
    description: "Overcoming the unseen forces that stand in the way of true inspiration."
  },
  {
    id: "sl1-prod-126",
    title: "Originals: Non-Conformists",
    image: "https://m.media-amazon.com/images/I/81+oQBvBR-L._AC_SY200_.jpg",
    price: 16.99,
    oldPrice: 23.00,
    rating: 4.5,
    reviewsCount: "7,400",
    description: "How non-conformists move the world and how you can join them."
  },
  {
    id: "sl1-prod-127",
    title: "Grit: Power of Passion",
    image: "https://m.media-amazon.com/images/I/61x-LF9fyYL._AC_SY200_.jpg",
    price: 15.50,
    oldPrice: 20.00,
    rating: 4.7,
    reviewsCount: "16,000",
    description: "Discover why passion and perseverance are the secrets to success."
  }
];

export default sliderData;