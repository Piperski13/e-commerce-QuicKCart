import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";

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
    <div className="flex justify-around items-center bg-[#ffefd5] border-b-3 border-b-gray-300 mb-3">
      <h1>Store</h1>
      <Navbar />
      <Link to="/cart">Cart {quantity}</Link>
    </div>
  );
};

export default Header;
