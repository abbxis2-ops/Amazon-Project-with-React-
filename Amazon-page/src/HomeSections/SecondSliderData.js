const imagesData = [
  {
    id: "sl2-prod-201",
    title: "Premium Wireless Earbuds Pro",
    img: "https://m.media-amazon.com/images/I/71T+mH4zJOL._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/71T+mH4zJOL._AC_SY200_.jpg",
    price: 129.99,
    oldPrice: 159.00,
    rating: 4.8,
    reviewsCount: "12,450",
    description: "Next-generation noise cancellation and spatial audio for an immersive listening experience."
  },
  {
    id: "sl2-prod-202",
    title: "Ultra-Slim Smart Tablet 11\"",
    img: "https://m.media-amazon.com/images/I/61D9UFpTAEL._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/61D9UFpTAEL._AC_SY200_.jpg",
    price: 499.00,
    oldPrice: 549.99,
    rating: 4.7,
    reviewsCount: "8,200",
    description: "Powerful performance meets elegant design. Perfect for creators and professionals on the go."
  },
  {
    id: "sl2-prod-203",
    title: "Pro Gaming Smartphone 5G",
    img: "https://m.media-amazon.com/images/I/51oKJkR+k9L._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/51oKJkR+k9L._AC_SY200_.jpg",
    price: 899.00,
    oldPrice: 999.00,
    rating: 4.9,
    reviewsCount: "15,600",
    description: "Ultimate gaming phone with high refresh rate display and liquid cooling technology."
  },
  {
    id: "sl2-prod-204",
    title: "Noise Cancelling Over-Ear Headphones",
    img: "https://m.media-amazon.com/images/I/71Ryl5xKbuL._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/71Ryl5xKbuL._AC_SY200_.jpg",
    price: 249.50,
    oldPrice: 299.00,
    rating: 4.6,
    reviewsCount: "22,000",
    description: "Industry-leading noise cancellation and 30-hour battery life for long journeys."
  },
  {
    id: "sl2-prod-205",
    title: "Smart Watch Series Elite",
    img: "https://m.media-amazon.com/images/I/81MnNaaeHAL._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/81MnNaaeHAL._AC_SY200_.jpg",
    price: 199.99,
    oldPrice: 249.00,
    rating: 4.5,
    reviewsCount: "5,400",
    description: "Advanced health tracking and seamless connectivity wrapped in a titanium finish."
  },
  {
    id: "sl2-prod-206",
    title: "High-Speed Wireless Charger",
    img: "https://m.media-amazon.com/images/I/61KPzKeRP7L._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/61KPzKeRP7L._AC_SY200_.jpg",
    price: 39.00,
    oldPrice: 49.99,
    rating: 4.4,
    reviewsCount: "3,100",
    description: "Fast-charging pad compatible with all major smartphone brands and wearable devices."
  },
  {
    id: "sl2-prod-207",
    title: "Portable Bluetooth Soundbar",
    img: "https://m.media-amazon.com/images/I/61UvVTN0IEL._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/61UvVTN0IEL._AC_SY200_.jpg",
    price: 85.00,
    oldPrice: 110.00,
    rating: 4.3,
    reviewsCount: "1,850",
    description: "Compact soundbar with deep bass and crystal clear audio for your home or outdoor setup."
  },
  {
    id: "sl2-prod-208",
    title: "Ergonomic Mechanical Keyboard",
    img: "https://m.media-amazon.com/images/I/71T+mH4zJOL._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/71T+mH4zJOL._AC_SY200_.jpg",
    price: 145.00,
    oldPrice: 175.00,
    rating: 4.8,
    reviewsCount: "6,200",
    description: "Tactile mechanical switches and customizable RGB lighting for the ultimate setup."
  },
  {
    id: "sl2-prod-209",
    title: "4K Action Camera Ultra",
    img: "https://m.media-amazon.com/images/I/61D9UFpTAEL._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/61D9UFpTAEL._AC_SY200_.jpg",
    price: 159.99,
    oldPrice: 199.00,
    rating: 4.7,
    reviewsCount: "4,300",
    description: "Waterproof 4K action camera with advanced stabilization for sports and travel vlogging."
  },
  {
    id: "sl2-prod-210",
    title: "Smart Home Security Hub",
    img: "https://m.media-amazon.com/images/I/51oKJkR+k9L._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/51oKJkR+k9L._AC_SY200_.jpg",
    price: 120.00,
    oldPrice: 150.00,
    rating: 4.6,
    reviewsCount: "9,000",
    description: "Integrated security system with AI motion detection and cloud storage support."
  },
  {
    id: "sl2-prod-211",
    title: "Digital Drawing Pen Display",
    img: "https://m.media-amazon.com/images/I/71Ryl5xKbuL._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/71Ryl5xKbuL._AC_SY200_.jpg",
    price: 350.00,
    oldPrice: 399.00,
    rating: 4.8,
    reviewsCount: "2,150",
    description: "Professional graphics tablet with 8192 levels of pressure sensitivity."
  },
  {
    id: "sl2-prod-212",
    title: "Fitness Tracker Band V2",
    img: "https://m.media-amazon.com/images/I/81MnNaaeHAL._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/81MnNaaeHAL._AC_SY200_.jpg",
    price: 49.00,
    oldPrice: 65.00,
    rating: 4.4,
    reviewsCount: "11,200",
    description: "Lightweight fitness band with heart rate monitor and 14-day battery life."
  },
  {
    id: "sl2-prod-213",
    title: "Mini Portable Projector",
    img: "https://m.media-amazon.com/images/I/61KPzKeRP7L._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/61KPzKeRP7L._AC_SY200_.jpg",
    price: 299.99,
    oldPrice: 350.00,
    rating: 4.5,
    reviewsCount: "1,400",
    description: "Cinema on the go. High-brightness mini projector with built-in speakers."
  },
  {
    id: "sl2-prod-214",
    title: "Professional Desktop Mic",
    img: "https://m.media-amazon.com/images/I/61UvVTN0IEL._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/61UvVTN0IEL._AC_SY200_.jpg",
    price: 115.00,
    oldPrice: 140.00,
    rating: 4.7,
    reviewsCount: "7,300",
    description: "Studio-quality USB microphone for podcasting, streaming, and recording."
  },
  {
    id: "sl2-prod-215",
    title: "Laptop Cooling Stand RGB",
    img: "https://m.media-amazon.com/images/I/71T+mH4zJOL._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/71T+mH4zJOL._AC_SY200_.jpg",
    price: 35.50,
    oldPrice: 45.00,
    rating: 4.3,
    reviewsCount: "2,900",
    description: "Powerful cooling fans and ergonomic angles for high-performance laptop use."
  },
  {
    id: "sl2-prod-216",
    title: "Smart Wi-Fi Router Max",
    img: "https://m.media-amazon.com/images/I/61D9UFpTAEL._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/61D9UFpTAEL._AC_SY200_.jpg",
    price: 189.00,
    oldPrice: 220.00,
    rating: 4.7,
    reviewsCount: "5,800",
    description: "Ultra-fast Wi-Fi 6 router with mesh support for whole-home coverage."
  },
  {
    id: "sl2-prod-217",
    title: "Handheld Game Console V3",
    img: "https://m.media-amazon.com/images/I/51oKJkR+k9L._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/51oKJkR+k9L._AC_SY200_.jpg",
    price: 215.00,
    oldPrice: 260.00,
    rating: 4.8,
    reviewsCount: "3,400",
    description: "Classic portable gaming redefined with modern hardware and OLED display."
  },
  {
    id: "sl2-prod-218",
    title: "Desktop Audio Interface",
    img: "https://m.media-amazon.com/images/I/71Ryl5xKbuL._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/71Ryl5xKbuL._AC_SY200_.jpg",
    price: 130.00,
    oldPrice: 160.00,
    rating: 4.6,
    reviewsCount: "1,200",
    description: "High-resolution audio processing for musicians and voice-over artists."
  },
  {
    id: "sl2-prod-219",
    title: "Smart Lighting Starter Kit",
    img: "https://m.media-amazon.com/images/I/81MnNaaeHAL._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/81MnNaaeHAL._AC_SY200_.jpg",
    price: 89.99,
    oldPrice: 110.00,
    rating: 4.7,
    reviewsCount: "12,000",
    description: "Control your ambiance with millions of colors via phone or voice command."
  },
  {
    id: "sl2-prod-220",
    title: "Solar Power Bank 20000mAh",
    img: "https://m.media-amazon.com/images/I/61KPzKeRP7L._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/61KPzKeRP7L._AC_SY200_.jpg",
    price: 55.00,
    oldPrice: 75.00,
    rating: 4.4,
    reviewsCount: "4,600",
    description: "Rugged outdoor power bank with solar charging panels for emergency use."
  },
  {
    id: "sl2-prod-221",
    title: "Compact Photo Printer",
    img: "https://m.media-amazon.com/images/I/61UvVTN0IEL._AC_SY200_.jpg",
    image: "https://m.media-amazon.com/images/I/61UvVTN0IEL._AC_SY200_.jpg",
    price: 99.00,
    oldPrice: 125.00,
    rating: 4.5,
    reviewsCount: "2,300",
    description: "Print your memories instantly from your phone with premium dye-sub technology."
  }
];

export default imagesData;