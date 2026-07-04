import { useState, useRef, useEffect } from "react";

const categories = [
    "All",
  "All Departments",
  "Arts & Crafts",
  "Automotive",
  "Baby",
  "Beauty & Personal Care",
  "Books",
  "Computers",
  "Digital Music",
  "Electronics",
  "Fashion",
  "Girls' Fashion",
  "Boys' Fashion",
  "Health & Household",
  "Home & Kitchen",
  "Industrial & Scientific",
  "Kindle Store",
  "Luggage",
  "Men's Fashion",
  "Movies & TV",
  "Music, CDs & Vinyl",
  "Pet Supplies",
  "Prime Video",
  "Software",
  "Sports & Outdoors",
  "Tools & Home Improvement",
  "Toys & Games",
  "Video Games",
  "Women's Fashion"
];

const CategoryDropdown = () => {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const dropdownRef = useRef();

  /* Outside Click Close */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* Keyboard Navigation */
  const handleKeyDown = (e) => {

    if (!open) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((prev) =>
        prev === 0 ? categories.length - 1 : prev - 1
      );
    }

    if (e.key === "Enter") {
      setSelected(categories[activeIndex]);
      setOpen(false);
    }

    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className="relative h-full hidden md:flex"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >

      {/* Button */}
      <div
  onClick={() => setOpen(!open)}
  className="bg-gray-200 text-black px-2 rounded-l-md w-16 h-full flex items-center justify-between cursor-pointer text-xs border-r overflow-hidden"
>
  <span className="truncate">{selected}</span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="16"
    viewBox="0 -960 960 960"
    width="16"
    fill="#000"
  >
    <path d="M480-360 280-560h400L480-360Z"/>
  </svg>
</div>

      {/* Dropdown */}
      <div
        className={`absolute top-full left-0 w-64 bg-gray-100 text-black border shadow-lg z-50 max-h-60 overflow-y-auto transition-all duration-200 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >

        {categories.map((item, index) => (

          <div
            key={index}
            onClick={() => {
              setSelected(item);
              setOpen(false);
            }}
            className={`px-3 py-2 cursor-pointer text-sm ${
              selected === item
                ? "bg-gray-200"
                : index === activeIndex
                ? "bg-gray-100"
                : ""
            }`}
          >
            {item}
          </div>

        ))}

      </div>

    </div>
  );
};

export default CategoryDropdown;