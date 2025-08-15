import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navDiv}>
      <ul className={styles.navbar}>
        <li className={styles.navItem}>
          <Link to="/home" className={`${styles.link} ${styles.active}`}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/products" className={`${styles.link} ${styles.active}`}>
            Products
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={`${styles.link} ${styles.active}`}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
