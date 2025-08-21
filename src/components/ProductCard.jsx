import { Link, useOutletContext } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import StarRating from "./StarRating";
import { handleAddToCart } from "../utils/handleAddToCart";
import { addedToCartCheckmark } from "../utils/checkmark";

const ProductCard = ({ product }) => {
  const { cart, setCart } = useOutletContext();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [checkmark, setCheckmark] = useState(false);
  const timeoutRef = useRef(null);

  return (
    <div className="w-[360px] bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl font-sans overflow-hidden relative m-4">
      <div className="absolute top-2 right-2 bg-gradient-to-r from-red-800 via-red-400 to-red-700 text-white text-[11px] font-semibold px-2 py-1 rounded-md shadow z-10 uppercase tracking-wider">
        Hot Sale
      </div>

      <Link
        to={`/product/${product.id}`}
        className="overflow-hidden cursor-pointer"
      >
        <div className="h-[200px] overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain my-3"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="text-[11px] text-zinc-400 uppercase font-semibold tracking-wider mb-1">
          {product.category}
        </div>
        <h2 className="text-lg font-bold text-zinc-200 mb-2 leading-tight">
          {product.title.split(" ").slice(0, 6).join(" ")}...
        </h2>
        <p className="text-[13px] text-zinc-500 mb-3 leading-relaxed">
          {product.description.split(" ").slice(0, 12).join(" ")}...
        </p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <span className="text-sm line-through text-zinc-400">
              ${Math.floor(product.price * 1.2)}
            </span>
            <span className="text-xl font-bold text-zinc-50">
              ${product.price}
            </span>
          </div>
          <div
            className={`flex items-center gap-2 text-green-600 ${
              checkmark ? "" : "hidden"
            }`}
          >
            Added
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <button
            onClick={() => {
              handleAddToCart(product.id, 1, product, setCart);
              addedToCartCheckmark(setCheckmark, timeoutRef);
            }}
            className="relative bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-md px-4 py-2 text-sm font-semibold flex items-center gap-2 shadow hover:shadow-md hover:-translate-y-0.5 transition-transform cursor-pointer"
          >
            <span className="text-[#f8fafc]">Add to Cart</span>
            <svg
              className="w-5 h-5 text-[#f8fafc]"
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
            <StarRating rating={product.rating.rate} />
            <span className="ml-1 text-[11px] text-zinc-500">
              {product.rating.count} Reviews
            </span>
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
