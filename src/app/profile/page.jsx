import styles from "./profilePage.module.css";
import Feed from "@/components/feed/Feed";
import Rightbar from "@/components/rightbar/Rightbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.container}>
        <div className={styles.top}>
          <Image src="/p1.jpg" alt="" width={850} height={300} />
        </div>
        <div className={styles.profile}>
          <div className={styles.profilePic}>
            <Image src="/p1.jpg" alt="" width={124} height={124} />
          </div>
          <button className={styles.button}>Edit Profile</button>
        </div>
        <div className={styles.middle}>
          <div className={styles.user}>
            <h1 className={styles}>Username</h1>
            <span className={styles.usertag}>@username</span>
          </div>
          <div className={styles.bio}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className={styles.joinedAt}>
            <span>Joined February 2024</span>
          </div>
          <div className={styles.followingContainer}>
            <span>11 Following</span>
            <span>17 Followers</span>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>Posts</span>
          <span>Replies</span>
          <span>Media</span>
          <span>Likes</span>
        </div>
        <hr />
        <Feed />
      </div>
      <div className={styles.rightbar}>
        <Rightbar />
      </div>
    </div>
  );
};

export default ProfilePage;
