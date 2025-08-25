export function addToCart(productId, quantity, product, setCart) {
  const parsedQuantity = Number(quantity);

  setCart((prevCart) => {
    const exists = prevCart.some((item) => item.productId === productId);

    if (!exists) {
      return [
        ...prevCart,
        { productId, quantity: parsedQuantity, productData: product },
      ];
    }

    return prevCart.map((item) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + parsedQuantity }
        : item
    );
  });
}
