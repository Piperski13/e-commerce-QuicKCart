import { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";

import StarRating from "../StarRating";
import Quantity from "../Quantity";
import styles from "./SingleProductCard.module.css";

const SingleProductPage = (props) => {
  const [quantity, setQuantity] = useState("1");

  const { cart, setCart } = useOutletContext();

  const buyNowLink = cart.some((item) => {
    return item.productId === props.product.id;
  });

  const handleAddToCart = (productId) => {
    const parsedQuantity = Number(quantity);

    setCart((prevCart) => {
      const exists = prevCart.some((item) => item.productId === productId);

      if (!exists) {
        return [...prevCart, { productId, quantity: parsedQuantity }];
      }

      return prevCart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + parsedQuantity }
          : item
      );
    });
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
                <Quantity value={quantity} onChange={setQuantity} />
                <div className={styles.action}>
                  <button
                    className={styles.action__button}
                    onClick={() => handleAddToCart(props.product.id)}
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
