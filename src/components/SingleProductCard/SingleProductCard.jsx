import { useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";

import StarRating from "../StarRating";
import styles from "./SingleProductCard.module.css";

const SingleProductPage = (props) => {
  const [quantity, setQuantity] = useState(1);
  const inputRef = useRef(null);

  const { cart, setCart } = useOutletContext();

  const handleQuantity = (action) => {
    if (action === "plus") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  const handleQuantityChange = (e) => {
    const userInput = e.target.value;
    // Remove all non-digit characters regex
    const cleanedInput = userInput.replace(/\D/g, "");
    setQuantity(cleanedInput);
  };

  const handleBlurOrEnter = (e) => {
    if (e.type === "keydown" && e.key !== "Enter") return;

    if (e.target.value === "" || e.target.value === "0") {
      setQuantity(1);
    }
    if (e.type === "keydown") {
      inputRef.current.blur();
    }
  };

  const handleAddToCart = (productId) => {
    setCart((prevCart) => {
      const exists = prevCart.some((item) => item.productId === productId);

      if (!exists) {
        return [...prevCart, { productId, quantity }];
      }

      return prevCart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    });
  };

  console.log("cart: ", cart);

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.card__title}>
          <div className={styles.icon}>
            <a href="#">
              <i className="fa fa-arrow-left"></i>
            </a>
          </div>
        </div>

        <div className={styles.card__body}>
          <div className={styles.half}>
            <div className={styles.featured_text}>
              <h1>{props.product.title}</h1>
              <p className={styles.sub}>{props.product.category}</p>
              <p className={styles.price}>${props.product.price}</p>
            </div>
            <div className={styles.image}>
              <img src={props.product.image} alt={props.product.title} />
            </div>
          </div>

          <div className={styles.half}>
            <div className={styles.description}>
              <p>{props.product.description}</p>
            </div>
            <span className={styles.stock}>
              <i className="fa fa-pen"></i> In stock
            </span>
            <div className={styles.reviews}>
              <StarRating rating={props.product.rating.rate} />
              <span>({props.product.rating.count})</span>
              <div className={styles.add__order__div}>
                <label htmlFor="Quantity"> Quantity </label>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleQuantity}
                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                  >
                    -
                  </button>

                  <input
                    onChange={handleQuantityChange}
                    type="number"
                    id="Quantity"
                    value={quantity}
                    onKeyDown={handleBlurOrEnter}
                    onBlur={handleBlurOrEnter}
                    ref={inputRef}
                    className="h-10 w-16 rounded-sm border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />

                  <button
                    onClick={() => handleQuantity("plus")}
                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                  >
                    +
                  </button>
                </div>

                <div className={styles.action}>
                  <button onClick={() => handleAddToCart(props.product.id)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card__footer}></div>
      </div>
    </main>
  );
};

export default SingleProductPage;
