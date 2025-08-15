import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const RootLayout = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  return (
    <div className="bg-gray-900">
      <Header cart={cart} />
      <main>
        <Outlet context={{ cart, setCart, products, setProducts }} />
      </main>
    </div>
  );
};

export default RootLayout;
