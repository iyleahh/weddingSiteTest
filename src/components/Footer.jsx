import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#fbf7f0]/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-neutral-700/80 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <Heart className="h-4 w-4" />
          <span>Made with love. Update the date and names in src/config.js</span>
        </div>
        <div className="text-xs">© {new Date().getFullYear()} Iyleah & Partner</div>
      </div>
    </footer>
  );
}
