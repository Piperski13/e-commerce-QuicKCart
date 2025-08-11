import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import CartPageCards from "./CartPageCards";

const CartPage = () => {
  const { cart, setCart } = useOutletContext();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cart.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    Promise.all(
      cart.map((item) =>
        fetch(`https://fakestoreapi.com/products/${item.productId}`)
          .then((res) => res.json())
          .catch((err) => {
            console.error(`Error fetching product ${item.productId}:`, err);
            return null;
          })
      )
    )
      .then((dataArray) => {
        const validProducts = dataArray.filter((p) => p !== null);
        setProducts(validProducts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [cart]);

  if (error) return <p>Error: {error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <CartPageCards products={products} />
    </div>
  );
};

export default CartPage;
