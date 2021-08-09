import Navbar from "./Navbar";
import styles from "../styles/Home.module.scss";
const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <Navbar className={styles.navbar} />
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Layout;
