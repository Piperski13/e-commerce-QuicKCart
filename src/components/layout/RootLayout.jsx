import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });

  const [savings, setSavings] = useState(() => {
    const saved = localStorage.getItem("savings");
    return saved ? JSON.parse(saved) : 0;
  });

  const [totalPriceBeforeTax, setTotalPriceBeforeTax] = useState(() => {
    const saved = localStorage.getItem("totalPriceBeforeTax");
    return saved ? JSON.parse(saved) : 0;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header cart={cart} />
      <main className="flex-grow">
        <Outlet
          context={{
            cart,
            setCart,
            products,
            setProducts,
            savings,
            setSavings,
            totalPriceBeforeTax,
            setTotalPriceBeforeTax,
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
