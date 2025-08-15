import { useOutletContext, Link } from "react-router-dom";
import { handleAddToCart } from "../utils/handleAddToCart";
import { formatCurrency } from "../utils/format";

const CartPageRecommended = (props) => {
  const { setCart } = useOutletContext();

  return (
    <div className="relative h-[470px] space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <Link
        to={`/product/${props.product.id}`}
        className="overflow-hidden rounded"
      >
        <img
          className="mx-auto h-44 w-44 dark:hidden"
          src={props.product.image}
          alt="imac image"
        />
        <img
          className="mx-auto hidden h-44 w-44 dark:block"
          src={props.product.image}
          alt="imac image"
        />
      </Link>
      <div>
        <Link
          to={`/product/${props.product.id}`}
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >
          {props.product.title.split(" ").slice(0, 6).join(" ")}...
        </Link>
        <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
          {props.product.description.split(" ").slice(0, 8).join(" ")}...
        </p>
      </div>
      <div>
        <p className="text-lg font-bold text-gray-900 dark:text-white">
          <span className="line-through">
            {formatCurrency(props.product.price * 1.2)}
          </span>
        </p>
        <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
          ${props.product.price}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-2.5">
        <button
          onClick={() =>
            handleAddToCart(props.product.id, 1, props.product, setCart)
          }
          type="button"
          className="absolute bottom-[24px] w-[235px] gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CartPageRecommended;
