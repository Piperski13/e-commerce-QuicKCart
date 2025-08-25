import ErrorPage from "./components/feedback/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./components/CartPage";
import SingleProductPage from "./features/products/pages/SingleProductPage";
import RootLayout from "./components/layout/RootLayout";
import ProductPage from "./features/products/pages/ProductPage";
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
      { path: "products", element: <ProductPage /> },
      { path: "product/:id", element: <SingleProductPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
    ],
  },
];
export default routes;
