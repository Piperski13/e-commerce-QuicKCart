import ProductCard from "./ProductCard";

const itemsPerPage = 3;

const PaginationComponent = ({
  products,
  filteredData,
  currentPage,
  setCurrentPage,
}) => {
  let items = "";

  if (filteredData.length > 0) {
    items = filteredData;
  } else {
    items = products;
  }

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
          {currentItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div>
          <button
            className="bg-[#1E5483] hover:bg-[#102D46] w-27 rounded-lg p-3 mr-3 cursor-pointer"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            className="bg-[#1E5483] hover:bg-[#102D46] w-27 rounded-lg p-3 ml-3 cursor-pointer"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default PaginationComponent;
