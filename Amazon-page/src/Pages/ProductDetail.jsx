// import { useParams } from "react-router-dom";
// import FourthCardData from "../HomeSections/FourthCardData"

// const ProductDetail = () => {
//   const { id } = useParams();

//   // items ko flatten karna
//   const allProducts = FourthCardData.flatMap((card) => card.items);

//   const product = allProducts.find((item) => item.id === Number(id));

//   if (!product) {
//     return <h2>Product not found</h2>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10 p-10">
//       {/* LEFT IMAGE */}

//       <div>
//         <img src={product.image} className="w-full" />
//       </div>

//       {/* RIGHT DETAILS */}

//       <div>
//         <h2 className="text-3xl font-bold mb-3">{product.name}</h2>

//         <p className="text-gray-600 mb-4">
//           Luxury product description example text
//         </p>

//         <p className="text-2xl font-bold mb-5">$7200</p>

//         <button className="bg-black text-white w-60 py-3">Add to cart</button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
