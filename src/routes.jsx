import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CartPage from "./components/CartPage";
import SingleProductPage from "./components/SingleProductPage";
import RootLayout from "./components/RootLayout";
import ProductList from "./components/ProductList";
import CheckoutPage from "./components/CheckoutPage";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "products", element: <ProductList /> },
      { path: "product/:id", element: <SingleProductPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
    ],
  },
];
export default routes;
