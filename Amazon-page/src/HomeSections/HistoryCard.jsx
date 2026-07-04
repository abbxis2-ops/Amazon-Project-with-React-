const HistoryCard = ({ product }) => {

    return (
        <div className="w-41.25">

            <img
                className="h-41.25 object-contain cursor-pointer"
                src={product.image}
            />

            <h5 className="text-blue-800 text-[14px] font-medium hover:underline">
                {product.title}
            </h5>

            {product.author && (
                <h6 className="text-blue-800 text-[11px] ml-1">
                    {product.author}
                </h6>
            )}

            <div className="text-orange-400 text-xl">
                ★★★☆☆
            </div>

            <p className="font-semibold">
                <sup>$</sup>{product.price}
            </p>

        </div>
    )

}

export default HistoryCard