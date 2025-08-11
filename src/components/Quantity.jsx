const Quantity = ({ value, onChange }) => {
  const handleQuantity = (action) => {
    if (action === "plus") {
      onChange(Number(value) + 1);
    } else if (action === "minus" && Number(value) > 1) {
      onChange(Number(value) - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const cleanedInput = e.target.value.replace(/\D/g, "");
    onChange(cleanedInput);
  };

  const handleBlurOrEnter = (e) => {
    if (e.type === "keydown" && e.key !== "Enter") return;

    if (!value || value === "0") {
      onChange("1");
    }
    if (e.type === "keydown") {
      e.target.blur();
    }
  };

  return (
    <>
      <label htmlFor="Quantity"> Quantity </label>
      <div className="flex items-center gap-1">
        <button
          onClick={() => handleQuantity("minus")}
          className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
        >
          -
        </button>

        <input
          onChange={handleQuantityChange}
          type="text"
          id="Quantity"
          value={value}
          onKeyDown={handleBlurOrEnter}
          onBlur={handleBlurOrEnter}
          className="h-10 w-16 rounded-sm border-gray-200 text-center sm:text-sm"
        />

        <button
          onClick={() => handleQuantity("plus")}
          className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
        >
          +
        </button>
      </div>
    </>
  );
};

export default Quantity;
