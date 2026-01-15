import Link from "next/link";
import PostList from "@/components/postlist";

export default function PostLink({ post, href, aspect, preloadImage }) {
  return (
    <Link href={href}>
      <PostList post={post} aspect={aspect} preloadImage={preloadImage} />
    </Link>
  );
}
