"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Profile from "../public/Profile.jpeg"
/**
 * HomePage with hero section:
 * - Profile picture on right
 * - Software Engineer header + description on left
 * - Smooth mouse motion and hover animations
 */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
};

export default function HomePage() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="relative min-h-screen bg-black text-gray-100 overflow-hidden">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,136,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(0,255,136,0.12),transparent_45%)]" />

        {/* HERO SECTION */}
        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <m.div variants={fadeUp} initial="hidden" animate="show">
            <m.span variants={fadeIn} initial="hidden" animate="show" className="inline-block mb-4 text-sm tracking-widest text-green-400">
              SOFTWARE ENGINEER
            </m.span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Building <span className="text-green-400">Digital Products</span>
              <br />
              That Feel Effortless
            </h1>

            <p className="text-gray-400 max-w-xl mb-10">
              I’m Oladimeji, a software engineer focused on crafting high-performance, visually refined applications. My passion is blending engineering precision with design intuition to create products recruiters remember.
            </p>

            <m.div variants={fadeUp} initial="hidden" animate="show" className="flex gap-4">
              <a href="/Profile" className="px-6 py-3 rounded-full bg-green-400 text-black font-medium hover:bg-green-300 transition">
                View Projects
              </a>
              <a href="/Contact" className="px-6 py-3 rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition">
                Contact Me
              </a>
            </m.div>
          </m.div>

          {/* Right: Profile picture with smooth hover animation */}
          <m.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.03, rotate: 1.5 }}
            transition={{ type: "spring", stiffness: 130, damping: 18 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-green-400/30 shadow-[0_0_40px_rgba(0,255,136,0.25)]">
              <Image src={Profile} alt="Profile picture" fill className="object-cover" priority />
            </div>
          </m.div>
        </section>

        {/* Scroll indicator */}
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <m.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }} className="w-6 h-10 rounded-full border border-green-400 flex justify-center pt-2">
            <span className="w-1 h-2 bg-green-400 rounded-full" />
          </m.div>
        </m.div>
      </main>
    </LazyMotion>
  );
}