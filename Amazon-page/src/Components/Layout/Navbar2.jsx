import { Link } from "react-router-dom";

const Navbar2 = () => {
  const options = [
    { name: "Medical Care", path: "/product" },
    { name: "Groceries", path: "/product" },
    { name: "Best Sellers", path: "/product" },
    { name: "Amazon Basics", path: "/product" },
    { name: "Prime", path: "/product" },
    { name: "New Releases", path: "/product" },
    { name: "Music", path: "/product" },
    { name: "Customer Service", path: "/product" },
    { name: "Amazon Home", path: "/product" },
    { name: "Registry", path: "/product" },
    { name: "Books", path: "/product" },
    { name: "Pharmacy", path: "/product" },
  ];

  const hoverStyle = "border border-transparent px-2 py-1 hover:border-white cursor-pointer transition-all duration-100 flex items-center whitespace-nowrap h-[32px]";

  return (
    <nav className="bg-[#232f3e] text-white flex items-center h-10 px-2 md:px-4 font-sans antialiased shadow-md">
      
      <div className={`${hoverStyle} gap-1 shrink-0`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="currentColor"
          className="font-bold"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
        <span className="font-bold text-sm tracking-tight">All</span>
      </div>

      <div className="flex items-center flex-1 overflow-x-auto no-scrollbar scroll-smooth">
        <ul className="flex items-center ml-1">
          {options.map((item, ind) => (
            <li key={ind} className="shrink-0">
              <Link 
                to={item.path} 
                className={`${hoverStyle} text-xs md:text-sm `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar2;