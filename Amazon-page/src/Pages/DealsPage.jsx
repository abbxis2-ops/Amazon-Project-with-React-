// import DealsHeader from "../Components/deals/DealsHeader"
// import ProductGrid from "../Components/deals/ProductGrid"

// const DealsPage = () => {

// return (

// <div className="bg-gray-100 min-h-screen">

// <DealsHeader/>

// <div className=" px-6 py-6">

// <ProductGrid/>

// </div>

// </div>

// )

// }

// export default DealsPage


// import React, { useState } from "react";
// import ProductGrid from "../Components/deals/ProductGrid";
// import DealsHeader from "../Components/deals/DealsHeader"
// import { products as allProducts } from "../Data/product"; // Sare products yahan import honge
// import React, { useMemo } from "react";

// const DealsPage = ({ searchTerm }) => {
      
//   // 3. OPTIMIZED FILTER LOGIC
//   const filteredProducts = useMemo(() => {
//     // Agar search bar khali hai toh saare products dikhao
//     if (!searchTerm) return products;

//     // Title ke hisab se filter karna (Case insensitive)
//     return products.filter((item) =>
//       item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [searchTerm]); // Yeh sirf tab dubara chalega jab searchTerm change ho

// }
//   // State: Jo products grid mein nazar ayenge
//   const [filteredData, setFilteredData] = useState(allProducts);

//   // Example Search Logic (Aap ise Navbar se bhi connect kar sakte hain)
//   const handleFilter = (searchTerm) => {
// //     const filtered = allProducts.filter(item => 
// //       item.title.toLowerCase().includes(searchTerm.toLowerCase())
// //     );
// //     setFilteredData(filtered);
// //   };

//   return (
//     <div className="bg-[#f2f2f2] min-h-screen">
//        {/* 1. Header/Filters yahan ayenge */}
//        <DealsHeader/>

//        {/* 2. ProductGrid ko 'props' ke zariye filtered data pass karna */}
//        <ProductGrid products={filteredProducts} />
//     </div>
//   );
// };

// export default DealsPage;
















import React, { useMemo } from "react"; // Memo import kiya
import ProductGrid from "../Components/deals/ProductGrid";
import DealsHeader from "../Components/deals/DealsHeader";
import { products as allProducts } from "../Data/product"; 

const DealsPage = ({ searchTerm }) => {
      
  // 1. OPTIMIZED FILTER LOGIC (Fixed variable name to allProducts)
  const filteredProducts = useMemo(() => {
    if (!searchTerm) return allProducts; // products ki jagah allProducts

    return allProducts.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allProducts]); 

  // Return statement ab function ke andar hai
  return (
    <div className="bg-[#f2f2f2] min-h-screen">
       <DealsHeader/>
       <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default DealsPage;