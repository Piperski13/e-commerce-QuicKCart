import { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
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
      <div className="flex justify-center items-center">
        <MobileNavbar />
        <Link
          to="/home"
          className="text-3xl font-bold text-shadow-md text-zinc-300 text-shadow-blue-800"
        >
          QuicKCart.
        </Link>
      </div>
      <Navbar />
      <Link to="/cart">
        <div className="relative text-zinc-50 hover:text-zinc-500">
          <img
            src={cartIcon}
            alt="shopping-cart--v1"
            className="lg:w-12 lg:h-12 w-9 h-9"
          />
          <p className="absolute -bottom-3 -right-2 font-bold text-red-500 lg:text-xl md:text-l text-shadow-md text-shadow-zinc-800">
            {quantity}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
