import HistoryCard from "../HomeSections/HistoryCard";

const HistoryList = ({ products }) => {
  return (
    <div className="flex space-x-7 overflow-hidden">
      {products.map((product) => (
        <HistoryCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HistoryList;
