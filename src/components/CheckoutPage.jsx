import { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import CheckoutPageItem from "./CheckoutPageItem";

const CheckoutPage = () => {
  const { cart, setCart } = useOutletContext();
  const [receipt, setReceipt] = useState("");

  const generateTimestampedReceiptNumber = () => {
    const timestamp = new Date().getTime();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `Receipt-${timestamp}-${randomNumber}`;
  };

  const handlePurchase = () => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify([]));
      setCart([]);
      setReceipt(generateTimestampedReceiptNumber);
    }
  };

  let cartListItems = false;

  cartListItems = cart.map((product) => {
    return (
      <div key={product.productId}>
        <CheckoutPageItem product={product} />
      </div>
    );
  });

  return (
    <div className="flex items-center justify-center flex-col ">
      {receipt !== "" ? (
        <h1 className="text-5xl text-center md:text-6xl font-bold mt-10">
          Thank you for shoping with{" "}
          <span className="bg-gradient-to-r from-purple-400 to-[#101828] bg-clip-text text-transparent">
            QuicKCart.
          </span>
        </h1>
      ) : (
        <h1 className="flex flex-col items-center justify-center text-6xl font-bold mt-10">
          Buy from us !{" "}
          <span className="bg-gradient-to-r from-purple-400 to-[#101828] bg-clip-text text-transparent">
            QuicKCart.
          </span>
        </h1>
      )}

      <p className="text-zinc-400 mb-2 mt-10 w-50 md:w-200 text-center">
        Your one-stop shop for fast, easy, and reliable online shopping.{" "}
      </p>
      <div>{cartListItems}</div>
      <span className="text-green-600 underline">{receipt}</span>
      <div className="flex">
        {cart.length > 0 ? (
          <button
            onClick={handlePurchase}
            className="bg-green-800 rounded-lg p-3 mt-5 mr-5 cursor-pointer"
          >
            Confirm Purchase !
          </button>
        ) : (
          ""
        )}
        <Link
          to="/products"
          className="bg-[#102d46] rounded-lg p-3 mt-5 cursor-pointer"
        >
          Keep Shoping
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
