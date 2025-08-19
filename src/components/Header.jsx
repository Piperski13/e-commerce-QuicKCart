import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import patternImage from "../assets/pattern/wave-pattern.png";
import cartIcon from "../assets/cart.png";

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
      className="sticky top-0 flex justify-around items-center border-b-3 border-b-gray-700 text-zinc-50 bg-cover bg-center bg-[#101828] z-50"
      style={{ backgroundImage: `url(${patternImage})` }}
    >
      <Link
        to="/home"
        className="text-3xl font-bold text-shadow-md text-zinc-300 text-shadow-blue-800"
      >
        QuicKCart.
      </Link>
      <Navbar />
      <Link to="/cart">
        <div className="relative text-zinc-50 hover:text-zinc-500">
          <img width="48" height="48" src={cartIcon} alt="shopping-cart--v1" />
          <p className="absolute -bottom-3 -right-2 font-bold text-red-500 text-xl text-shadow-md text-shadow-zinc-800">
            {quantity}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
