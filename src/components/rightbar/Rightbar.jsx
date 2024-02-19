import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdOutlineSearch } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import Footer from "../footer/Footer";

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
      <div className={styles.trendContainer}>
        <h1 className={styles.trendTitle}>Trend for you</h1>
        <div className={styles.trend}>
          <div className={styles.trendTopic}>
            <span className={styles.trendLocation}>Trending in Norway</span>
            <h2 className={styles.trendName}>Super Bowl</h2>
            <span className={styles.trendPosts}>157K posts</span>
          </div>
          <HiDotsHorizontal />
        </div>
      </div>
      <div className={styles.whoToFollowContainer}>
        <h1 className={styles.whoToFollowTitle}>Who To Follow</h1>
        <div className={styles.whoToFollow}>
          <div className={styles.imgContainer}>
            <Image src="/p1.jpg" alt="" width={48} height={48} />
          </div>
          <div className={styles.whoToFollowNameContainer}>
            <span className={styles.whoToFollowName}>Independent Travel</span>
            <p className={styles.whoToFollowTag}>@IndyTravel</p>
          </div>
          <button className={styles.followButton}>Follow</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rightbar;
