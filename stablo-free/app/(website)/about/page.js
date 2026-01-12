import About from "./about";
import { siteConfig, sampleAuthors } from "@/lib/config";

export default function AboutPage() {
  return <About settings={siteConfig} authors={sampleAuthors} />;
}
