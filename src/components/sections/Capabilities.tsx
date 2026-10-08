"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Database,
  Layers,
  Radio,
} from "lucide-react";

import { capabilities } from "@/content/capabilities";

const icons = [
  BrainCircuit,
  Layers,
  Radio,
  Database,
  Cloud,
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300">
            Engineering capabilities
          </p>

          <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
            From intelligent systems
            <br />
            to production platforms.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-white/45">
            I work across frontend applications, backend services, AI systems,
            data infrastructure and cloud deployment.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {capabilities.map((item) => {
            const Icon = icons[Number(item.number) - 1];

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-300/20"
              >
                <div className="flex justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>

                  <span className="font-mono text-xs text-white/25">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/45">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
