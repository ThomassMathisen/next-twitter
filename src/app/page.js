import Feed from "@/components/feed/Feed";
import Post from "@/components/post/Post";
import Topbar from "@/components/topbar/Topbar";

export default function Home() {
  return (
    <div>
      <Topbar />
      <Post />
      <Feed />
    </div>
  );
}
