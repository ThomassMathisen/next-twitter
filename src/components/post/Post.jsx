import Image from "next/image";
import styles from "./post.module.css";
import { AiOutlinePicture } from "react-icons/ai";
import {
  MdOutlineGifBox,
  MdOutlinePoll,
  MdOutlineSchedule,
  MdOutlineLocationOn,
} from "react-icons/md";
import { PiSmiley } from "react-icons/pi";

const Post = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" width={36} height={36} />
        </div>
        <input className={styles.input} placeholder="What's happening?!" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.logoContainer}>
          <AiOutlinePicture />
          <MdOutlineGifBox />
          <MdOutlinePoll />
          <PiSmiley />
          <MdOutlineSchedule />
          <MdOutlineLocationOn />
        </div>
        <button className={styles.button}>Post</button>
      </div>
    </div>
  );
};

export default Post;
