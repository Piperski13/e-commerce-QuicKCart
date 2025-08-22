import { useState, useRef, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";

import StarRating from "../StarRating";
import Quantity from "../Quantity";
import styles from "./SingleProductCard.module.css";

import { addToCart } from "../../utils/addToCart";
import { showAddedToCartFeedback } from "../../utils/checkmark";

const SingleProductPage = (props) => {
  const [quantity, setQuantity] = useState("1");
  const { cart, setCart } = useOutletContext();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [checkmark, setCheckmark] = useState(false);
  const timeoutRef = useRef(null);

  const buyNowLink = cart.some((item) => {
    return item.productId === props.product.id;
  });

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

          <div className={`${styles.half}, ${styles.secondHalf}`}>
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
                <Quantity quantityValue={quantity} setQuantity={setQuantity} />
                <div>
                  <div
                    className={`flex items-center justify-center gap-2 text-green-600 ${
                      checkmark ? "" : "hidden"
                    }`}
                  >
                    Added
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <button
                    className={styles.action__button}
                    onClick={() => {
                      addToCart(
                        props.product.id,
                        quantity,
                        props.product,
                        setCart
                      );
                      showAddedToCartFeedback(setCheckmark, timeoutRef);
                    }}
                  >
                    Add to cart
                  </button>
                  {buyNowLink ? (
                    <Link to="/cart" className={styles.action__button}>
                      Buy it now
                    </Link>
                  ) : (
                    ""
                  )}
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
