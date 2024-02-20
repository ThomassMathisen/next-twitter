import { FaXTwitter } from "react-icons/fa6";
import styles from "./sidebar.module.css";
import {
  MdHomeFilled,
  MdOutlineSearch,
  MdNotificationsNone,
  MdMailOutline,
  MdAccountCircle,
} from "react-icons/md";
import MenuLinks from "./menuLinks/menuLinks";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "Home",
    path: "/home",
    icon: <MdHomeFilled />,
  },
  {
    title: "Explore",
    path: "/",
    icon: <MdOutlineSearch />,
  },
  {
    title: "Notifications",
    path: "/",
    icon: <MdNotificationsNone />,
  },
  {
    title: "Messages",
    path: "/",
    icon: <MdMailOutline />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <MdAccountCircle />,
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <FaXTwitter />
        </Link>
      </div>
      <ul className={styles.linksContainer}>
        {menuItems.map((item) => (
          <li className={styles.list} key={item.title}>
            <MenuLinks item={item} />
          </li>
        ))}
      </ul>
      <button className={styles.button}>Post</button>
      <div className={styles.profileContainer}>
        <div className={styles.profileImg}>
          <Image src="/p1.jpg" alt="" width={48} height={48} />
        </div>
        <div className={styles.userContainer}>
          <div className={styles.username}>
            <span>Thomas Mathisen</span>
          </div>
          <div className={styles.userTag}>
            <span>@thomassmathisen</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
