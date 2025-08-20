import { useOutletContext, Link } from "react-router-dom";
import { useEffect } from "react";
import { handleAddToCart } from "../utils/handleAddToCart";
import { formatCurrency } from "../utils/format";

const CartPageRecommended = (props) => {
  const { cart, setCart } = useOutletContext();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="relative md:h-[470px] space-y-6 overflow-hidden rounded-lg border p-6 shadow-sm border-gray-700 bg-gray-800">
      <Link
        to={`/product/${props.product.id}`}
        className="overflow-hidden rounded"
      >
        <img
          className="mx-auto h-44 w-44"
          src={props.product.image}
          alt="imac image"
        />
        <img
          className="mx-auto hidden h-44 w-44"
          src={props.product.image}
          alt="imac image"
        />
      </Link>
      <div>
        <Link
          to={`/product/${props.product.id}`}
          className="text-lg font-semibold leading-tight text-white hover:underline"
        >
          {props.product.title.split(" ").slice(0, 6).join(" ")}...
        </Link>
        <p className="mt-2 text-base font-normal text-gray-400">
          {props.product.description.split(" ").slice(0, 8).join(" ")}...
        </p>
      </div>
      <div>
        <p className="text-lg font-bold text-white">
          <span className="line-through">
            {formatCurrency(props.product.price * 1.2)}
          </span>
        </p>
        <p className="text-lg font-bold leading-tight text-red-500">
          ${props.product.price}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-2.5">
        <button
          onClick={() =>
            handleAddToCart(props.product.id, 1, props.product, setCart)
          }
          type="button"
          className="absolute bottom-[24px] w-[235px] gap-2 rounded-lg border border-gray-600 bg-gray-800 p-2.5 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-700"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CartPageRecommended;
