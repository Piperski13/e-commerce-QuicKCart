import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProductCard from "./SingleProductCard/SingleProductCard";
import Spinner from "./Spinner";

const SingleProductPage = () => {
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
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );

  return (
    <div>
      <SingleProductCard key={product.id} product={product} />
    </div>
  );
};

export default SingleProductPage;
