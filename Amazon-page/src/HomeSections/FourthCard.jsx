import FourthCardCompo from "./FourthCardCompo";
import FourthCardData from "./FourthCardData";

const FourthCard = () => {
  return (
    <section className="bg-[#e3e6e6] py-5">
      <div className="max-w-375 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {FourthCardData.map((card) => (
            <FourthCardCompo key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourthCard;