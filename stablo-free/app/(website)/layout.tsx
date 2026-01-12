import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`
  },
  description: siteConfig.description,
  keywords: ["Next.js", "Tailwind CSS"],
  openGraph: {
    images: [
      {
        url: siteConfig.openGraphImage,
        width: 800,
        height: 600
      }
    ]
  },
  twitter: {
    title: siteConfig.title,
    card: "summary_large_image"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Layout({ children }) {
  return (
    <>
      <Navbar {...siteConfig} />
      <div>{children}</div>
      <Footer {...siteConfig} />
    </>
  );
}
