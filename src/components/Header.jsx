import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import patternImage from "../assets/pattern/wave-pattern.png";

const Header = (props) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let total = 0;
    props.cart.forEach((item) => {
      total += item.quantity;
    });
    setQuantity(total);
  }, [props.cart]);
  return (
    <div
      className="flex justify-around items-center border-b-3 border-b-gray-700 text-zinc-50 bg-cover bg-center"
      style={{ backgroundImage: `url(${patternImage})` }}
    >
      <h1 className="text-3xl font-bold text-shadow-md text-zinc-300 text-shadow-blue-800">
        QuicKCart.
      </h1>
      <Navbar />
      <Link to="/cart">
        <div className="relative text-zinc-50 hover:text-zinc-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="w-8 h-8"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2M7 13L5.4 5M17 17a2 2 0 11-4 0 2 2 0 014 0zm-6 0a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p className="absolute -bottom-3 -right-1 font-bold text-red-400">
            {quantity}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
