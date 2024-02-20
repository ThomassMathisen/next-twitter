import Image from "next/image";
import styles from "./follow.module.css";

const Follow = () => {
  return (
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
  );
};

export default Follow;
