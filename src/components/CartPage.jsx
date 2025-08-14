import { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { formatCurrency } from "../utils/format";

import CartPageItem from "./CartPageItem";
import Voucher from "./Voucher";
import CartPageRecommended from "./CartPageRecommended";

const CartPage = () => {
  const { cart, products } = useOutletContext();

  const [itemTotals, setItemTotals] = useState({});
  const [savings, setSavings] = useState(0);

  const handlePrices = (productId, price) => {
    setItemTotals((prev) => ({
      ...prev,
      [productId]: price,
    }));
  };

  const cartListItems = cart.map((product) => {
    return (
      <div key={product.productId}>
        <CartPageItem
          product={product}
          priceData={(productId, price) => handlePrices(productId, price)}
        />
      </div>
    );
  });

  // Recommendation start
  let cartListItemsRecommended;

  if (cart.length > 0) {
    const recommendedCategory = cart[0].productData.category;
    const cartIds = cart.map((item) => item.productId);

    const sameCategory = products.filter(
      (item) =>
        item.category === recommendedCategory && !cartIds.includes(item.id)
    );

    const others = products.filter(
      (item) =>
        item.category !== recommendedCategory && !cartIds.includes(item.id)
    );

    const recommendedProducts = [...sameCategory, ...others].slice(0, 3);

    cartListItemsRecommended = recommendedProducts.map((product) => (
      <div key={product.id}>
        <CartPageRecommended product={product} />
      </div>
    ));
  }

  // Recommendation end

  //Total price summary start

  let totalPriceBeforeTax = 0;

  for (const price of Object.values(itemTotals)) {
    totalPriceBeforeTax += price;
  }

  const originalPrice = formatCurrency(totalPriceBeforeTax);
  const taxPrice = formatCurrency(totalPriceBeforeTax * 0.2);
  const totalPrice = formatCurrency(
    totalPriceBeforeTax + totalPriceBeforeTax * 0.2 - savings
  );

  const handleVoucherDiscount = (discount) => {
    if (discount) {
      setSavings(totalPriceBeforeTax * 0.1);
    }
    console.log("savings: ", savings);
  };

  //Total price summary end

  return (
    <div>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              {cartListItems}
              {/* RECOMMENDED CART ITEMS START */}

              <div className="hidden xl:mt-8 xl:block">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  People also bought
                </h3>
                <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
                  {cartListItemsRecommended}
                </div>
              </div>
              {/* RECOMMENDED CART ITEMS END */}
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                {/* ORDER SUMMARY START */}
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        {originalPrice}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        {savings === 0
                          ? formatCurrency(savings)
                          : "-" + formatCurrency(savings)}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Store Pickup
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        FREE
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tax
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        {taxPrice}
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      {totalPrice}
                    </dd>
                  </dl>
                </div>

                <Link
                  to="/checkout"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Proceed to Checkout
                </Link>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    ></svg>
                  </Link>
                </div>
              </div>
              {/* ORDER SUMMARY END */}
              <Voucher discount={handleVoucherDiscount} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
