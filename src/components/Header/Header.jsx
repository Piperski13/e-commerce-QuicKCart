import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <div className="flex justify-around">
      <h1>React Store</h1>
      <Navbar />
      <button>Cart</button>
    </div>
  );
};

export default Header;
