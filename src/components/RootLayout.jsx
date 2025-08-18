import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  return (
    <div>
      <Header cart={cart} />
      <main>
        <Outlet context={{ cart, setCart, products, setProducts }} />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
