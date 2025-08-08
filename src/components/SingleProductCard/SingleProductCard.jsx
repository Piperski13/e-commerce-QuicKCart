import { useState, useRef } from "react";
import StarRating from "../StarRating";
import styles from "./SingleProductCard.module.css";

const SingleProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const inputRef = useRef(null);

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
    setQuantity(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (event.key === "Enter") {
      inputRef.current.blur();
    }
  };

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
              <h1>{product.title}</h1>
              <p className={styles.sub}>{product.category}</p>
              <p className={styles.price}>${product.price}</p>
            </div>
            <div className={styles.image}>
              <img src={product.image} alt={product.title} />
            </div>
          </div>

          <div className={styles.half}>
            <div className={styles.description}>
              <p>{product.description}</p>
            </div>
            <span className={styles.stock}>
              <i className="fa fa-pen"></i> In stock
            </span>
            <div className={styles.reviews}>
              <StarRating rating={product.rating.rate} />
              <span>({product.rating.count})</span>
              <div className={styles.add__order__div}>
                <div className={styles.action}>
                  <button type="button">Add to cart</button>
                </div>

                <label htmlFor="Quantity" className="sr-only">
                  {" "}
                  Quantity{" "}
                </label>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleQuantity}
                    type="button"
                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                  >
                    -
                  </button>

                  <input
                    onChange={handleQuantityChange}
                    type="number"
                    id="Quantity"
                    value={quantity}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                    className="h-10 w-16 rounded-sm border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />

                  <button
                    onClick={() => handleQuantity("plus")}
                    type="button"
                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                  >
                    +
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
