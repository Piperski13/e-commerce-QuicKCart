import { useOutletContext } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, products } = useOutletContext();
  const generateTimestampedReceiptNumber = () => {
    const timestamp = new Date().getTime();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `Receipt-${timestamp}-${randomNumber}`;
  };
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <h1 className="text-6xl font-bold">
        Thank you for shoping with{" "}
        <span class="bg-gradient-to-r from-purple-400 to-[#101828] bg-clip-text text-transparent">
          QuicKCart.
        </span>
      </h1>
      <p className="text-zinc-400 mb-2 mt-10 w-200 text-center">
        Your one-stop shop for fast, easy, and reliable online shopping.{" "}
      </p>
      <span className="text-green-600">
        {generateTimestampedReceiptNumber()}
      </span>
    </div>
  );
};

export default CheckoutPage;
