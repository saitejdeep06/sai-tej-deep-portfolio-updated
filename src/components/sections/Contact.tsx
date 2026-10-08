"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { profile } from "@/content/profile";
import { contactLinks } from "@/data/social-links";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Contact
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Have a project
              <br />
              <span className="text-white/40">in mind?</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/45">
              I'm open to discussing full-stack development, AI applications,
              real-time systems and software engineering opportunities.
            </p>

            <a
              href={contactLinks.email}
              className="group mt-8 inline-flex items-center gap-3 text-white"
            >
              {profile.email}
              <ArrowUpRight className="h-4 w-4 text-cyan-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <a
              href={contactLinks.email}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-300/20 hover:bg-white/[0.04]"
            >
              <Mail className="h-5 w-5 text-cyan-300" />

              <h3 className="mt-7 font-semibold text-white">
                Email
              </h3>

              <p className="mt-2 break-all text-sm text-white/40">
                {profile.email}
              </p>
            </a>

            <a
              href={contactLinks.phone}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-300/20 hover:bg-white/[0.04]"
            >
              <Phone className="h-5 w-5 text-cyan-300" />

              <h3 className="mt-7 font-semibold text-white">
                Phone
              </h3>

              <p className="mt-2 text-sm text-white/40">
                {profile.phone}
              </p>
            </a>

            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-300/20 hover:bg-white/[0.04]"
            >
              <ArrowUpRight className="h-5 w-5 text-cyan-300" />

              <h3 className="mt-7 font-semibold text-white">
                LinkedIn
              </h3>

              <p className="mt-2 text-sm text-white/40">
                Connect professionally
              </p>
            </a>

            <a
              href={contactLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-300/20 hover:bg-white/[0.04]"
            >
              <ArrowUpRight className="h-5 w-5 text-cyan-300" />

              <h3 className="mt-7 font-semibold text-white">
                LeetCode
              </h3>

              <p className="mt-2 text-sm text-white/40">
                View coding profile
              </p>
            </a>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:col-span-2">
              <div className="flex items-center gap-3 text-sm text-white/40">
                <MapPin className="h-4 w-4 text-cyan-300" />
                Based in {profile.location}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
