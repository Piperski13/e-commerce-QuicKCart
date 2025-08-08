import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import SingleProductCard from "./SingleProductCard/SingleProductCard";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <SingleProductCard key={product.id} product={product} />
    </div>
  );
};

export default ProductPage;
