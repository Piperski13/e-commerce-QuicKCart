import ProductGrid from "./ProductGrid";

const itemsPerPage = 6;

const Pagination = ({
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
        <ProductGrid currentItems={currentItems} />

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
export default Pagination;
