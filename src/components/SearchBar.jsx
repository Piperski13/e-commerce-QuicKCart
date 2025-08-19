import { useState } from "react";
import Categories from "./Categories";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const applyFilters = (searchQuery = query, selectedCategory = category) => {
    let result = props.products;

    if (selectedCategory !== "all") {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory
      );
    }

    if (searchQuery.trim() !== "") {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    props.filteredProducts(result);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    applyFilters(query, category);
    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleCategoryClick = (cat) => {
    setCategory(cat);
    applyFilters(query, cat);
  };

  return (
    <>
      <form className="max-w-md ml-4 mt-5">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            onClick={handleSearch}
            className="text-white absolute end-2.5 bottom-2.5 bg-[#1E5483] hover:bg-[#102D46] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:focus:ring-blue-800 cursor-pointer"
          >
            Search
          </button>
        </div>
      </form>
      <Categories
        handleCategoryClick={handleCategoryClick}
        category={category}
      />
    </>
  );
};

export default SearchBar;
