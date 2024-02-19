import Image from "next/image";
import styles from "./post.module.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdOutlineModeComment, MdOutlineFileUpload } from "react-icons/md";
import { FaRetweet, FaRegHeart } from "react-icons/fa6";
import { BiBarChart } from "react-icons/bi";
import { PiBookmarkSimple } from "react-icons/pi";

const Post = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.user}>
            <div className={styles.avatarContainer}>
              <Image src="/noavatar.png" alt="" width={48} height={48} />
            </div>
            <span className={styles.username}>Username</span>
            <span className={styles.usertag}>@username</span>
            <span className={styles.line}>-</span>
            <span className={styles.postedAt}>2h</span>
          </div>
          <div className={styles.dots}>
            <HiDotsHorizontal />
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.textContainer}>
            <span>Where I would like to be</span>
          </div>
          <div className={styles.imgContainer}>
            <Image src="/p1.jpg" alt="" width={750} height={600} />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <MdOutlineModeComment />
              <span>99</span>
            </div>
            <div className={styles.icon}>
              <FaRetweet />
              <span>24</span>
            </div>
            <div className={styles.icon}>
              <FaRegHeart />
              <span>1.4K</span>
            </div>
            <div className={styles.icon}>
              <BiBarChart />
              <span>1.1M</span>
            </div>
            <div className={styles.icon}>
              <PiBookmarkSimple />
              <MdOutlineFileUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
