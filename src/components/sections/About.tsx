"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { profile } from "@/content/profile";

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-cyan-300">
              <Sparkles className="h-4 w-4" />
              About
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Engineering with{" "}
              <span className="text-white/40">purpose.</span>
            </h2>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
              <MapPin className="h-4 w-4 text-cyan-300" />
              {profile.location}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl leading-9 text-white/75">
              {profile.about}
            </p>

            <p className="mt-6 leading-8 text-white/45">
              {profile.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
