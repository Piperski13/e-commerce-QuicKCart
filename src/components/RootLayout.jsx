import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const RootLayout = () => {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header cart={cart} />
      <main>
        <Outlet context={{ cart, setCart }} />
      </main>
    </>
  );
};

export default RootLayout;
