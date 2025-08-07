const ProductCard = ({ product }) => {
  return (
    <div className="w-[360px] bg-white rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl font-sans overflow-hidden relative cursor-pointer m-4">
      <div className="absolute top-2 right-2 bg-gradient-to-r from-red-800 via-red-400 to-red-700 text-white text-[11px] font-semibold px-2 py-1 rounded-md shadow z-10 uppercase tracking-wider">
        Hot Sale
      </div>

      <div className="overflow-hidden">
        <div className="h-[200px] overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain mb-2"
          />
        </div>
      </div>

      <div className="p-5">
        <div className="text-[11px] text-zinc-500 uppercase font-semibold tracking-wider mb-1">
          {product.category}
        </div>
        <h2 className="text-lg font-bold text-zinc-800 mb-2 leading-tight">
          {product.title}
        </h2>
        <p className="text-[13px] text-zinc-600 mb-3 leading-relaxed">
          {product.description.split(" ").slice(0, 12).join(" ")}...
        </p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <span className="text-sm line-through text-zinc-400">
              ${Math.floor(product.price * 1.2)}
            </span>
            <span className="text-xl font-bold text-zinc-800">
              ${product.price}
            </span>
          </div>
          <button className="relative bg-gradient-to-r from-zinc-800 to-zinc-700 text-white rounded-md px-4 py-2 text-sm font-semibold flex items-center gap-2 shadow hover:shadow-md hover:-translate-y-0.5 transition-transform">
            <span>Add to Cart</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-zinc-100">
          <div className="flex items-center gap-1 text-yellow-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                fill="#FFD700"
                stroke="#FFD700"
                strokeWidth="0.5"
                className="w-4 h-4"
              >
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 
                                  5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
            ))}
            <span className="ml-1 text-[11px] text-zinc-500">245 Reviews</span>
          </div>
          <div className="text-[11px] font-semibold text-green-500">
            In Stock
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
