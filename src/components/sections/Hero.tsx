"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  ArrowUpRight,
  Mail,
} from "lucide-react";

import { profile } from "@/content/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="portfolio-grid relative flex min-h-screen items-center overflow-hidden pt-28"
    >

      {/* Background Orbs */}
      <div
        aria-hidden
        className="hero-orb left-[8%] top-[20%] h-72 w-72 bg-[#7cffe1]/10"
      />

      <div
        aria-hidden
        className="hero-orb right-[5%] top-[25%] h-80 w-80 bg-[#8b7cff]/10"
        style={{ animationDelay: "-4s" }}
      />

      {/* Center Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7cffe1]/[0.025] blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7cffe1] opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#7cffe1]" />
          </span>

          <span className="font-mono text-xs tracking-[0.18em] text-white/50 uppercase">
            Full Stack Developer · AI Engineer
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-[-0.055em]"
        >
          I build{" "}
          <span className="text-gradient">
            intelligent,
          </span>

          <br />

          scalable software
          <br />

          for the real world.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg"
        >
          I design and build full-stack web applications, AI-powered
          products, real-time systems, and data-driven platforms from
          architecture to deployment.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.45,
          }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >

          <a
            href="#projects"
            className="group inline-flex h-12 items-center gap-2 rounded-xl bg-[#7cffe1] px-6 text-sm font-semibold text-[#05100d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#96ffe8] hover:shadow-[0_15px_50px_rgba(124,255,225,0.18)]"
          >
            View My Work

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href={profile.resume}
            download
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            <Download size={17} />
            Resume
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            <Mail size={17} />
            Contact
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.65,
          }}
          className="mt-8 flex items-center gap-5"
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
          >
            <ArrowUpRight size={16} />

            <span>ArrowUpRight</span>
          </a>

          <span className="h-4 w-px bg-white/10" />

          <a
            href={profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/40 transition-colors hover:text-white"
          >
            LeetCode
          </a>

          <span className="h-4 w-px bg-white/10" />

          <span className="text-sm text-white/30">
            {profile.location}
          </span>
        </motion.div>

        {/* Tech Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="mt-20 grid max-w-4xl grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] sm:grid-cols-4"
        >
          {[
            ["01", "AI Systems"],
            ["02", "Full Stack"],
            ["03", "Real-Time"],
            ["04", "Data Products"],
          ].map(([number, label]) => (
            <div
              key={number}
              className="border-b border-white/[0.07] p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <div className="font-mono text-[10px] tracking-widest text-[#7cffe1]/60">
                {number}
              </div>

              <div className="mt-2 text-sm font-medium text-white/75">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/30 transition-colors hover:text-white/60 sm:flex"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase">
          Scroll
        </span>

        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <span className="scroll-line absolute inset-x-0 top-0 h-full bg-[#7cffe1]" />
        </span>

        <ArrowDown size={14} />
      </a>
    </section>
  );
}


