import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProductCard from "../components/SingleProductCard/SingleProductCard";
import Spinner from "../../../components/Spinner";

const SingleProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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
