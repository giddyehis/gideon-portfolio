import Section from "./Section";
const stack = ["PHP", "Python", "TypeScript", "React", "Next.js", "Node.js", "Laravel", "Django", "Tailwind CSS", "MySQL", "PostgreSQL"];
export default function About() {
  const row = [...stack, ...stack];
  return (
    <Section id="about" title="About">
      <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
        As a versatile developer, I bridge the gap between robust backend architecture and fluid frontend experiences. My toolkit includes PHP, Python, and TypeScript, backed by the modern frameworks that power today’s tech landscape.
      </p>
      {/* SWAP: replace text badges with real logos (e.g. simple-icons) if you want */}
      <div className="mt-12 overflow-hidden" role="img" aria-label={`Tech stack: ${stack.join(", ")}`}>
        <ul className="flex w-max animate-marquee gap-3" aria-hidden>
          {row.map((s, i) => (<li key={i} className="rounded-full border border-line bg-panel px-4 py-2 font-mono text-sm text-slate-200">{s}</li>))}
        </ul>
      </div>
    </Section>
  );
}
