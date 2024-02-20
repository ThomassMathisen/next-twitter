import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdOutlineSearch } from "react-icons/md";
import Footer from "../footer/Footer";
import Trend from "../trend/Trend";
import Follow from "../follow/Follow";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchbar}>
        <MdOutlineSearch />
        <input className={styles.input} placeholder="Search" />
      </div>
      <div className={styles.subscribeContainer}>
        <h1 className={styles.subscribeTitle}>Subscribe to Premium!</h1>
        <p className={styles.subscribeDesc}>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button className={styles.subscribeButton}>Subscribe</button>
      </div>
      <Trend />
      <Follow />
      <Footer />
    </div>
  );
};

export default Rightbar;
