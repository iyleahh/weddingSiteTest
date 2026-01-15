import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";
import CountdownHeader from "@/components/CountdownHeader";
import PostLink from "@/components/PostLink";

const traditions = [
  {
    _id: "1",
    title: "Indian Traditions",
    slug: { current: "indian-traditions" },
    excerpt: "Explore the rich and vibrant traditions of Indian culture and wedding ceremonies.",
    mainImage: {
      src: "/img/traditions/indian.jpg",
      alt: "Indian Traditions"
    },
    author: {
      name: "Our Story",
      image: null
    },
    categories: [
      { title: "Traditions", color: "orange" },
      { title: "Culture", color: "yellow" }
    ],
    publishedAt: new Date().toISOString()
  },
  {
    _id: "2",
    title: "Mexican Traditions",
    slug: { current: "mexican-traditions" },
    excerpt: "Discover the colorful and joyful traditions of Mexican culture and celebrations.",
    mainImage: {
      src: "/img/traditions/mexican.jpg",
      alt: "Mexican Traditions"
    },
    author: {
      name: "Our Story",
      image: null
    },
    categories: [
      { title: "Traditions", color: "green" },
      { title: "Culture", color: "red" }
    ],
    publishedAt: new Date().toISOString()
  },
  {
    _id: "3",
    title: "How To Dress",
    slug: { current: "how-to-dress" },
    excerpt: "Get inspired by our dress guide and styling tips for the celebration.",
    mainImage: {
      src: "/img/traditions/dress.jpg",
      alt: "How To Dress"
    },
    author: {
      name: "Our Story",
      image: null
    },
    categories: [
      { title: "Guide", color: "blue" },
      { title: "Fashion", color: "purple" }
    ],
    publishedAt: new Date().toISOString()
  }
];

export default function Home() {
  return (
    <>
      <Container>
        <CountdownHeader />

        <div className="mt-10 mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Our Celebration
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Learn about our traditions and how to be part of our special day
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
          {traditions.slice(0, 2).map((tradition) => (
            <PostLink
              key={tradition._id}
              post={tradition}
              href={`/${tradition.slug.current}`}
              aspect="landscape"
              preloadImage={true}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
          {traditions.slice(2).map((tradition) => (
            <PostLink
              key={tradition._id}
              post={tradition}
              href={`/${tradition.slug.current}`}
              aspect="square"
            />
          ))}
        </div>
      </Container>
    </>
  );
}
