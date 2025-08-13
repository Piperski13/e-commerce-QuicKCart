import { Link } from "react-router-dom";

const CartPageRecommended = (props) => {
  return (
    <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
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
        <a
          href="#"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >
          {props.product.title}
        </a>
        <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
          {props.product.description.split(" ").slice(0, 12).join(" ")}...
        </p>
      </div>
      <div>
        <p className="text-lg font-bold text-gray-900 dark:text-white">
          <span className="line-through">${props.product.price * 1.2}</span>
        </p>
        <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
          ${props.product.price}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-2.5">
        <button
          data-tooltip-target="favourites-tooltip-1"
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          ></svg>
        </button>
        <div
          id="favourites-tooltip-1"
          role="tooltip"
          className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
        >
          Add to favourites
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <svg
            className="-ms-2 me-2 h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          ></svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CartPageRecommended;
