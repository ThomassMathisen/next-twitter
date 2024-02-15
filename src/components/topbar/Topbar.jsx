import styles from "./topbar.module.css";
import { MdOutlineSettings } from "react-icons/md";

const Topbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.feeds}>
        <span className={styles.forYou}>For you</span>
        <span className={styles.following}>Following</span>
        <span className={styles.settings}>
          <MdOutlineSettings />
        </span>
      </div>
    </div>
  );
};

export default Topbar;
