import Feed from "@/components/feed/Feed";
import Share from "@/components/share/Share";
import Topbar from "@/components/topbar/Topbar";

export default function Home() {
  return (
    <div>
      <Topbar />
      <Share />
      <Feed />
    </div>
  );
}
