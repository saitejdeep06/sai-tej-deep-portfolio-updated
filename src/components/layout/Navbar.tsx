"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUp } from "lucide-react";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 700);

      const sections = navigation
        .map((item) => document.getElementById(item.href.replace("#", "")))
        .filter(Boolean);

      let current = navigation[0]?.href.replace("#", "") ?? "about";

      sections.forEach((section) => {
        if (section && window.scrollY >= section.offsetTop - 180) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <nav className="border border-white/10 bg-black/65 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">
            <div className="flex items-center justify-between">
              <button
                onClick={() => scrollTo("#top")}
                className="group flex items-center gap-2"
                aria-label="Go to top"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-sm font-bold text-white transition group-hover:border-cyan-400/40 group-hover:text-cyan-300">
                  ST
                </span>
                <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">
                  Sai Tej Deep
                </span>
              </button>

              <div className="hidden items-center gap-1 md:flex">
                {navigation.map((item) => {
                  const id = item.href.replace("#", "");
                  const isActive = active === id;

                  return (
                    <button
                      key={item.href}
                      onClick={() => scrollTo(item.href)}
                      className={cn(
                        "relative rounded-lg px-3 py-2 text-xs font-medium transition",
                        isActive
                          ? "text-white"
                          : "text-white/55 hover:text-white"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-lg bg-white/[0.07]"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="mailto:Saitejchallagali@gmail.com"
                  className="hidden rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/80 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white sm:block"
                >
                  Let&apos;s Talk
                </a>

                <button
                  onClick={() => setMobileOpen((value) => !value)}
                  className="rounded-lg border border-white/10 p-2 text-white/80 transition hover:bg-white/[0.06] md:hidden"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                >
                  {mobileOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-white/10 pt-3 md:hidden"
              >
                <div className="grid gap-1">
                  {navigation.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollTo(item.href)}
                      className={cn(
                        "rounded-lg px-3 py-3 text-left text-sm transition",
                        active === item.href.replace("#", "")
                          ? "bg-white/[0.07] text-white"
                          : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </nav>
        </div>
      </header>

      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          onClick={() => scrollTo("#top")}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white shadow-xl backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}
    </>
  );
}
