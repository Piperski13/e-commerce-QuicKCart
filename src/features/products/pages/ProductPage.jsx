import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import Pagination from "../components/Pagination";
import SearchBar from "../components/ProductFilters/SearchBar";
import Spinner from "../../../components/Spinner";

const ProductPage = () => {
  const { products, setProducts } = useOutletContext();
  const { loading, error } = useProducts(setProducts);

  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
    <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
      <SearchBar
        products={products}
        filteredProducts={handleFiltered}
        setCurrentPage={setCurrentPage}
      />

      <Pagination
        products={products}
        filteredData={filteredData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductPage;
