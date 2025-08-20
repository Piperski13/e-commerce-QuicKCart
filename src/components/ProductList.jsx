import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PaginationComponent from "./PaginationComponent";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";

const ProductList = () => {
  const { products, setProducts } = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );

  const handleFiltered = (data) => {
    setFilteredData(data);
  };

  return (
    <div>
      <SearchBar
        products={products}
        filteredProducts={handleFiltered}
        setCurrentPage={setCurrentPage}
      />

      <PaginationComponent
        products={products}
        filteredData={filteredData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;
