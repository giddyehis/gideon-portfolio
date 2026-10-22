"use client";
import { motion } from "framer-motion";
const code = [
  ["const", " gideon ", "= {"],
  ["  ", "stack", ": ['PHP', 'Python', 'TypeScript'],"],
  ["  ", "location", ": 'Lagos, NG',"],
  ["  ", "status", ": 'open to work',"],
  ["};", "", ""],
];
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:py-32 lg:grid-cols-[1.2fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Building the web, one stack at a time.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            I’m Gideon, a Full-Stack Engineer specializing in PHP, Python, and TypeScript. I turn complex problems into elegant, scalable digital solutions.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#works" className="rounded-lg bg-mint px-5 py-3 text-sm font-medium text-ink transition hover:brightness-110">View My Work</a>
            <a href="#contact" className="rounded-lg border border-line px-5 py-3 text-sm font-medium text-white transition hover:border-mint">Hire Me</a>
          </div>
        </motion.div>
        <motion.pre aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="overflow-x-auto rounded-xl border border-line bg-panel p-6 font-mono text-sm leading-7 shadow-[0_0_60px_-20px_#34e0a1]">
          {code.map((l, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.25 }}>
              <span className="text-volt">{l[0]}</span><span className="text-mint">{l[1]}</span><span className="text-slate-400">{l[2]}</span>
            </motion.div>
          ))}
          <span className="inline-block h-4 w-2 translate-y-0.5 bg-mint animate-blink" />
        </motion.pre>
      </div>
    </section>
  );
}
