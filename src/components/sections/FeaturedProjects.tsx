"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Database,
  Layers3,
  Server,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { featuredProjects } from "@/content/projects";
import { cn } from "@/lib/utils";

const filters = ["All", "AI", "Full Stack", "Real-Time", "Data", "Web"];

const icons = {
  AI: BrainCircuit,
  "Full Stack": Layers3,
  "Real-Time": Zap,
  Data: Database,
  Web: Server,
};

export default function FeaturedProjects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof featuredProjects)[number] | null>(null);

  const filteredProjects = useMemo(() => {
    if (filter === "All") return featuredProjects;
    return featuredProjects.filter((project) => project.categories?.includes(filter as any));
  }, [filter]);

  return (
    <section id="projects" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              <Sparkles className="h-4 w-4" />
              Selected Engineering Work
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Systems built to solve
              <span className="text-white/40"> real problems.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              A selection of AI-powered, full-stack and real-time systems
              spanning intelligent applications, data platforms,
              automation and production-ready web experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-medium transition",
                  filter === item
                    ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                    : "border-white/10 bg-white/[0.025] text-white/50 hover:border-white/20 hover:text-white"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-5 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const category = project.categories?.[0] ?? "Full Stack";
              const Icon = icons[category as keyof typeof icons] ?? Layers3;

              return (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-7"
                >
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/[0.04] blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.09]" />

                  <div className="relative">
                    <div className="mb-8 flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>

                      <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                        {category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/50">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack?.slice(0, 5).map((technology: string) => (
                        <span
                          key={technology}
                          className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] text-white/45"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                      <button
                        onClick={() => setSelected(project)}
                        className="text-xs font-semibold text-white/70 transition hover:text-cyan-300"
                      >
                        View case study →
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#090909] p-6 shadow-2xl sm:p-8"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/60 transition hover:bg-white/[0.08] hover:text-white"
                aria-label="Close case study"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="max-w-3xl pr-10">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                  Case Study
                </div>

                <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {selected.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-white/55">
                  {selected.description}
                </p>
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="mb-4 text-sm font-semibold text-white">
                    Technology
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {selected.stack?.map((technology: string) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-white/60"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-sm font-semibold text-white">
                    Categories
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {selected.categories?.map((category) => (
                      <span
                        key={category}
                        className="rounded-lg border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-2 text-xs text-cyan-200"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {selected.features && selected.features.length > 0 && (
                <div className="mt-10">
                  <h4 className="mb-5 text-sm font-semibold text-white">
                    Key Features
                  </h4>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {selected.features.map((feature) => (
                      <div
                        key={feature}
                        className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 text-white/55"
                      >
                        <span className="mr-2 text-cyan-300">•</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selected.architecture && (
                <div className="mt-10">
                  <h4 className="mb-4 text-sm font-semibold text-white">
                    Architecture
                  </h4>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm leading-7 text-white/50">
                    {selected.architecture}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}