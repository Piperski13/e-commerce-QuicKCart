import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around">
      <h1>React Store</h1>
      <Navbar />
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default Header;
