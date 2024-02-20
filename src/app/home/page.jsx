import Feed from "@/components/feed/Feed";
import Share from "@/components/share/Share";
import Topbar from "@/components/topbar/Topbar";
import styles from "./home.module.css";
import "../globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Rightbar from "@/components/rightbar/Rightbar";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Topbar />
          <Share />
          <Feed />
        </div>
        <div className={styles.side}>
          <Rightbar />
        </div>
      </div>
    </div>
  );
}
