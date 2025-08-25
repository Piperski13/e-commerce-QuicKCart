const Quantity = ({
  quantityValue,
  setQuantity,
  setCart = () => {},
  productId = null,
}) => {
  const handleQuantity = (action) => {
    if (action === "plus") {
      setQuantity(Number(quantityValue) + 1);

      setCart((prev) =>
        prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else if (action === "minus" && Number(quantityValue) > 1) {
      setQuantity(Number(quantityValue) - 1);

      setCart((prev) =>
        prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleQuantityChange = (e) => {
    const cleanedInput = e.target.value.replace(/\D/g, "");
    setQuantity(cleanedInput);
  };

  const handleBlurOrEnter = (e) => {
    if (e.type === "keydown" && e.key !== "Enter") return;

    let newQty = quantityValue;
    if (!newQty || newQty === "0") {
      newQty = "1";
      setQuantity(newQty);
    }

    //manual input value for cart page update
    if (productId) {
      setCart((prev) =>
        prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: Number(newQty) }
            : item
        )
      );
    }

    if (e.type === "keydown") {
      e.target.blur();
    }
  };

  return (
    <>
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
          value={quantityValue}
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
