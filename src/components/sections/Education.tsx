"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, MapPin } from "lucide-react";

import { education } from "@/content/education";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-violet-300">
            <GraduationCap className="h-4 w-4" />
            Education
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Academic foundation.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]"
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-300/5">
                <GraduationCap className="h-5 w-5 text-violet-300" />
              </div>

              <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-white/25">
                2021 — 2025
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                {education.degree}
              </h3>

              <p className="mt-4 text-white/55">
                {education.institution}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-white/35">
                <MapPin className="h-4 w-4" />
                {education.location}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-white/50">
                  GPA {education.gpa}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-white/50">
                  {education.percentage}
                </span>
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-cyan-300" />

                <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-white/45">
                  Relevant coursework
                </h3>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {education.coursework.map((course, index) => (
                  <div
                    key={course}
                    className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-4"
                  >
                    <span className="font-mono text-xs text-cyan-300/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm leading-6 text-white/55">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
