import { Link, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import Quantity from "./Quantity";

import { formatCurrency } from "../utils/format";

const CartPageItem = (props) => {
  const [quantity, setQuantity] = useState(props.product.quantity);
  const { cart, setCart } = useOutletContext();

  const handleDeleteItem = (id) => {
    setCart((prev) => prev.filter((item) => item.productId !== id));
    props.priceData(id, 0);
  };

  const totalPrice = quantity * props.product.productData.price;
  const formattedTotal = formatCurrency(totalPrice);

  useEffect(() => {
    props.priceData(props.product.productData.id, totalPrice);
  }, [quantity]);

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
            <Quantity
              quantityValue={quantity}
              setQuantity={setQuantity}
              setCart={setCart}
              productId={props.product.productData.id}
            />
            <div className="text-end md:order-4 md:w-32">
              <p className="text-base font-bold text-gray-900 dark:text-white">
                {formattedTotal}
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
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="me-1.5 h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                ></svg>
                Add to Favorites
              </button>

              <button
                onClick={() => {
                  handleDeleteItem(props.product.productData.id);
                }}
                type="button"
                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
              >
                <svg
                  className="me-1.5 h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                ></svg>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageItem;
