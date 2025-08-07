import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="border-5 border-gray-500/20 rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <p>id: {product.id}</p>
          <img src={product.images[0]} alt={product.title} />
          <h2>{product.title}</h2>
          <p className="text-sm text-gray-600 mb-4">
            {product.description.split(" ").slice(0, 5).join(" ")}...
          </p>
          <button>{product.category.name}</button>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
