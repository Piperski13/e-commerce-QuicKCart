import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PaginationComponent from "./PaginationComponent";

const ProductList = () => {
  const { products, setProducts } = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        localStorage.setItem("products", JSON.stringify(data));
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (loading) return <p>Loading...</p>;

  return <PaginationComponent data={products} />;
};

export default ProductList;
