import Sidebar from "@/components/sidebar/Sidebar";
import styles from "./profilePage.module.css";
import Feed from "@/components/feed/Feed";
import Rightbar from "@/components/rightbar/Rightbar";

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <Feed />
    </div>
  );
};

export default ProfilePage;
