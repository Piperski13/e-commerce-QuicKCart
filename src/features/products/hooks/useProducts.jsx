import { useEffect, useState } from "react";

export const useProducts = (setProducts) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("products");
    if (saved) {
      setLoading(false);
      return;
    }
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
  }, [setProducts]);

  return { loading, error };
};
