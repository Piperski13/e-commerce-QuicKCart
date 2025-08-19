import { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";

import CartPageItem from "./CartPageItem";
import CartPageRecommended from "./CartPageRecommended";
import CheckoutSummary from "./CheckoutSummary";

const CartPage = () => {
  const { cart, products } = useOutletContext();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [itemTotals, setItemTotals] = useState({});

  const handlePrices = (productId, price) => {
    setItemTotals((prev) => ({
      ...prev,
      [productId]: price,
    }));
  };

  let cartListItems = false;
  let cartListItemsRecommended = false;

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

    cartListItems = cart.map((product) => {
      return (
        <div key={product.productId}>
          <CartPageItem
            product={product}
            priceData={(productId, price) => handlePrices(productId, price)}
          />
        </div>
      );
    });
  }

  return (
    <div>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            {cartListItems ? "Shopping Cart" : "No items in cart"}
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              {cartListItems}
              {/* RECOMMENDED CART ITEMS START */}

              <div className="hidden xl:mt-8 xl:block">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {cartListItemsRecommended ? "People also bought" : ""}
                </h3>
                <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
                  {cartListItemsRecommended}
                </div>
              </div>
              {/* RECOMMENDED CART ITEMS END */}
            </div>
            {cart.length > 0 ? <CheckoutSummary itemTotals={itemTotals} /> : ""}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
