import ErrorPage from "./components/ErrorPage";
import App from "./App";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CartPage from "./components/CartPage";
import SingleProductPage from "./components/SingleProductPage";

const routes = [
  {
    path: "/",
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <SingleProductPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
];
export default routes;
