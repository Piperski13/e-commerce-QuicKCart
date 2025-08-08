import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = (props) => {
  console.log("header props.cart: ", props.cart);
  
  return (
    <div className="flex justify-around items-center bg-[#ffefd5] border-b-3 border-b-gray-300 mb-3">
      <h1>Store</h1>
      <Navbar />
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default Header;
