import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";

const traditions = [
  {
    id: "indian",
    title: "Indian Traditions",
    slug: "indian-traditions",
    excerpt: "Explore the rich and vibrant traditions of Indian culture and wedding ceremonies.",
    image: "/img/traditions/indian.jpg",
    color: "from-orange-500 to-yellow-500"
  },
  {
    id: "mexican",
    title: "Mexican Traditions",
    slug: "mexican-traditions",
    excerpt: "Discover the colorful and joyful traditions of Mexican culture and celebrations.",
    image: "/img/traditions/mexican.jpg",
    color: "from-green-500 to-red-500"
  },
  {
    id: "dress",
    title: "How To Dress",
    slug: "how-to-dress",
    excerpt: "Get inspired by our dress guide and styling tips for the celebration.",
    image: "/img/traditions/dress.jpg",
    color: "from-pink-500 to-rose-500"
  }
];

export default function Home() {
  return (
    <>
      <Container>
        <div className="mt-10 mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore our traditions and celebrations
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-10">
          {traditions.map((tradition) => (
            <Link
              key={tradition.id}
              href={`/${tradition.slug}`}
              className="group cursor-pointer transform transition hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg h-64 mb-4 bg-gradient-to-br opacity-90 group-hover:opacity-100 transition"
                style={{
                  backgroundImage: `url('${tradition.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <h2 className="text-white text-2xl font-bold">{tradition.title}</h2>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm group-hover:text-gray-900 dark:group-hover:text-gray-200">
                {tradition.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
