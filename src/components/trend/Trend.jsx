import styles from "./trend.module.css";
import { HiDotsHorizontal } from "react-icons/hi";

const Trend = () => {
  return (
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
      <div className={styles.trend}>
        <div className={styles.trendTopic}>
          <span className={styles.trendLocation}>Trending in Norway</span>
          <h2 className={styles.trendName}>Super Bowl</h2>
          <span className={styles.trendPosts}>157K posts</span>
        </div>
        <HiDotsHorizontal />
      </div>
      <div className={styles.trend}>
        <div className={styles.trendTopic}>
          <span className={styles.trendLocation}>Trending in Norway</span>
          <h2 className={styles.trendName}>Super Bowl</h2>
          <span className={styles.trendPosts}>157K posts</span>
        </div>
        <HiDotsHorizontal />
      </div>
      <div className={styles.trend}>
        <div className={styles.trendTopic}>
          <span className={styles.trendLocation}>Trending in Norway</span>
          <h2 className={styles.trendName}>Super Bowl</h2>
          <span className={styles.trendPosts}>157K posts</span>
        </div>
        <HiDotsHorizontal />
      </div>
      <div className={styles.trend}>
        <div className={styles.trendTopic}>
          <span className={styles.trendLocation}>Trending in Norway</span>
          <h2 className={styles.trendName}>Super Bowl</h2>
          <span className={styles.trendPosts}>157K posts</span>
        </div>
        <HiDotsHorizontal />
      </div>
      <div className={styles.trend}>
        <div className={styles.trendTopic}>
          <span className={styles.trendLocation}>Trending in Norway</span>
          <h2 className={styles.trendName}>Super Bowl</h2>
          <span className={styles.trendPosts}>157K posts</span>
        </div>
        <HiDotsHorizontal />
      </div>
    </div>
  );
};

export default Trend;
