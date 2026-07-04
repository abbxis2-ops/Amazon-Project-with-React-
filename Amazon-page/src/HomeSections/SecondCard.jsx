import SecondCardCampo from "./SecondCardCompo";
import categoriesData from "./SecondCardData";

const SecondCard = () => {
  return (
    <section className="bg-[#e3e6e6]">
      <div className="max-w-375 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {categoriesData.map((card) => (
            <SecondCardCampo key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondCard;