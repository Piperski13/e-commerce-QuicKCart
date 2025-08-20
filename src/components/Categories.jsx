const Categories = ({ category, handleCategoryClick = () => {} }) => {
  const categories = [
    "All",
    "Women's clothing",
    "Men's clothing",
    "Jewelery",
    "Electronics",
  ];
  return (
    <div className="absolute bottom-50 right-0 w-[360px] h-60 bg-gray-800 p-4 rounded-xl shadow-lg transition-transform duration-300 font-sans overflow-hidden m-4">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 text-white">
          Categories:
        </h5>
      </div>
      <div className="flow-root">
        <ul className="flex flex-col items-center justify-center">
          {categories.map((cat) => (
            <li
              key={cat.toLowerCase()}
              onClick={() => handleCategoryClick(cat.toLowerCase())}
              className={`cursor-pointer mb-2 ${
                category === cat.toLowerCase()
                  ? "font-bold text-blue-500"
                  : "text-gray-600"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
