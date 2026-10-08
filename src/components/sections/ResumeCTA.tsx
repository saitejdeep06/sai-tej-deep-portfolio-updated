"use client";

import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpRight,
  FileText,
  Sparkles,
} from "lucide-react";

import { profile } from "@/content/profile";

export default function ResumeCTA() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/5">
            <FileText className="h-5 w-5 text-cyan-300" />
          </div>

          <div className="mt-7 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.2em] text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Resume
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Let's build something
            <br />
            <span className="text-white/40">meaningful.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/45">
            Explore my background, technical experience and projects through
            my resume.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/70 transition hover:border-white/20 hover:text-white"
            >
              Let's Talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
