import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export default function ArticleLayout({ title, excerpt, image, children }) {
  return (
    <Container>
      <article className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link
          href="/anusha"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8 mt-8"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          {excerpt}
        </p>

        {/* Featured Image */}
        {image && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        )}

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          {children}
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <Link
            href="/anusha"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </article>
    </Container>
  );
}
