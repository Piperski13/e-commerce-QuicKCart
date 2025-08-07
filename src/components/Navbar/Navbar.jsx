import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <ul className={styles.navbar}>
        <li className={styles.navItem}>
          <a className={`${styles.link} ${styles.active}`}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a className={`${styles.link} ${styles.active}`}>Product</a>
        </li>
        <li className={styles.navItem}>
          <a className={`${styles.link} ${styles.active}`}>About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
