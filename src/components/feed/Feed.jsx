import styles from "./feed.module.css";
import Post from "../post/Post";

const Feed = () => {
  return (
    <div className={styles.container}>
      <Post />
      <hr />
      <Post />
      <hr />
      <Post />
      <hr />
      <Post />
      <hr />
      <Post />
      <hr />
    </div>
  );
};

export default Feed;
