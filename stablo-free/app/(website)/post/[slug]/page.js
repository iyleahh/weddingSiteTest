import PostPage from "./default";

import { getAllPostsSlugs, getPostBySlug } from "@/lib/sanity/client";

// Required for static export - no fallback pages
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllPostsSlugs();
  // Return empty array if no posts (Sanity not configured)
  return slugs || [];
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: post.title };
}

export default async function PostDefault({ params }) {
  const post = await getPostBySlug(params.slug);
  return <PostPage post={post} />;
}

// export const revalidate = 60;
