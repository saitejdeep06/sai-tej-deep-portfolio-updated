"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { skillGroups } from "@/content/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-cyan-300">
            <Code2 className="h-4 w-4" />
            Technical stack
          </div>

          <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
            Tools I use to
            <br />
            <span className="text-white/40">build products.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-white/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
