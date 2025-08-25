import { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import CheckoutPageItem from "../components/CheckoutPageItem";
import { formatCurrency } from "../../../utils/format";

const CheckoutPage = () => {
  const {
    cart,
    setCart,
    savings,
    setSavings,
    totalPriceBeforeTax,
    setTotalPriceBeforeTax,
  } = useOutletContext();
  const [receipt, setReceipt] = useState("");

  const generateTimestampedReceiptNumber = () => {
    const timestamp = new Date().getTime();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `Receipt-${timestamp}-${randomNumber}`;
  };

  const handlePurchase = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);

    localStorage.setItem("totalPriceBeforeTax", JSON.stringify(0));
    setTotalPriceBeforeTax(0);

    localStorage.setItem("savings", JSON.stringify(0));
    setSavings(0);

    setReceipt(generateTimestampedReceiptNumber());
  };

  const cartListItems = cart.map((product) => {
    return (
      <div key={product.productId}>
        <CheckoutPageItem product={product} />
      </div>
    );
  });

  const totalPriceCheckout = formatCurrency(
    totalPriceBeforeTax + totalPriceBeforeTax * 0.2 - savings
  );

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
      <div>
        {receipt !== "" ? (
          ""
        ) : (
          <div>
            <p className="mt-3">
              {savings !== 0 && (
                <>
                  Savings:{" "}
                  <span className="text-green-600">
                    -{formatCurrency(savings)}
                  </span>
                </>
              )}
            </p>
            <p>
              {savings !== 0 && (
                <>
                  Total price with tax and discount:
                  <span className="text-green-600"> {totalPriceCheckout}</span>
                </>
              )}
              {savings === 0 && totalPriceBeforeTax !== 0 && (
                <>
                  Total price with tax:
                  <span className="text-green-600"> {totalPriceCheckout}</span>
                </>
              )}
            </p>
          </div>
        )}
      </div>
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
