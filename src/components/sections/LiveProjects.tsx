"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe2 } from "lucide-react";
import { liveProjects } from "@/data/project-links";

export default function LiveProjects() {
  return (
    <section id="live-builds" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/80">
            <Globe2 className="h-4 w-4" />
            Live Builds
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Projects you can
            <span className="text-white/40"> explore right now.</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-white/50 sm:text-base">
            Selected deployed work demonstrating practical product
            development across AI, web applications, dashboards and
            real-time experiences.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {liveProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-violet-400/20 hover:bg-white/[0.04]"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-500/[0.05] blur-3xl transition group-hover:bg-violet-500/[0.12]" />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <ExternalLink className="h-4 w-4 text-violet-300" />
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
                </div>

                <h3 className="text-base font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/40">
                  {project.description}
                </p>

                <div className="mt-5 text-[10px] font-semibold uppercase tracking-wider text-violet-300/70">
                  Live Deployment
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}