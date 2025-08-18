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
  return (
    <div className="flex flex-col min-h-screen">
      <Header cart={cart} />
      <main className="flex-grow">
        <Outlet context={{ cart, setCart, products, setProducts }} />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
