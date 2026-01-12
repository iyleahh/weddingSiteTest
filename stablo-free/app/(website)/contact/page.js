import Contact from "./contact";
import { siteConfig } from "@/lib/config";

export default function ContactPage() {
  return <Contact settings={siteConfig} />;
}
