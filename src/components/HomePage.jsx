import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <h1 className="text-6xl font-bold">
        Shop quickly with{" "}
        <span className="bg-gradient-to-r from-purple-400 to-[#101828] bg-clip-text text-transparent">
          QuicKCart.
        </span>
      </h1>
      <p className="text-zinc-400 mb-2 mt-10 w-200 text-center">
        Your one-stop shop for fast, easy, and reliable online shopping. Get
        what you need in just a few clicks.
      </p>
      <div className="mt-4">
        <Link
          to="/products"
          className="bg-purple-900 rounded-lg p-3 mr-3 cursor-pointer"
        >
          Start Shoping
        </Link>
        <Link
          to="/about"
          className="bg-[#102d46] rounded-lg p-3 cursor-pointer"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
