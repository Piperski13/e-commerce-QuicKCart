import { Link } from "react-router-dom";
import { formatCurrency } from "../../../utils/format";

const CheckoutPageItem = (props) => {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
          <Link
            to={`/product/${props.product.productData.id}`}
            href="#"
            className="shrink-0 md:order-1"
          >
            <img
              className="h-20 w-20 dark:hidden"
              src={props.product.productData.image}
              alt={props.product.productData.title}
            />
            <img
              className="hidden h-20 w-20 dark:block"
              src={props.product.productData.image}
              alt={props.product.productData.title}
            />
          </Link>

          <label className="sr-only">Choose quantity:</label>
          <div className="flex items-center justify-between md:order-3 md:justify-end">
            <div className="text-end md:order-4 md:w-32">
              <p className="text-base text-gray-900 dark:text-white">
                Quantity : {props.product.quantity}
              </p>
            </div>
            <div className="text-end md:order-4 md:w-32">
              <p className="text-base font-bold text-gray-900 dark:text-white">
                {formatCurrency(
                  props.product.quantity * props.product.productData.price
                )}
              </p>
            </div>
          </div>

          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
            <Link
              to={`/product/${props.product.productData.id}`}
              href="#"
              className="text-base font-medium text-gray-900 hover:underline dark:text-white"
            >
              {props.product.productData.title}
            </Link>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center text-sm font-medium text-gray-500"
              >
                {props.product.productData.category}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPageItem;
