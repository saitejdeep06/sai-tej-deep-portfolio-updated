import { ArrowUpRight } from "lucide-react";

import { profile } from "@/content/profile";
import { navigation } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#top"
              className="font-semibold tracking-tight text-white"
            >
              SAI TEJ DEEP
            </a>

            <p className="mt-2 text-sm text-white/35">
              Full Stack Developer · AI & Web Application Engineer
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/40 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {profile.name}. All rights reserved.
          </p>

          <a
            href="mailto:Saitejchallagali@gmail.com"
            className="inline-flex items-center gap-2 transition hover:text-white/60"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

