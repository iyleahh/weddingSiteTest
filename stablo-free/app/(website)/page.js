import HomePage from "./home";
import { samplePosts } from "@/lib/config";

export default function IndexPage() {
  return <HomePage posts={samplePosts} />;
}
