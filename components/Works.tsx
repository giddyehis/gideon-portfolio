import { ArrowUpRight, ImageIcon } from "lucide-react";
import Section from "./Section";
// SWAP: Add real project links, images and descriptions. Ideas: GiddyTech, Righteous Lifestyle.
const projects = [
  { title: "GiddyTech", desc: "[Short description of the project]", tech: ["Next.js", "TypeScript"], href: "#" },
  { title: "Righteous Lifestyle", desc: "[Short description of the project]", tech: ["Laravel", "MySQL"], href: "#" },
  { title: "[Project three]", desc: "[Short description of the project]", tech: ["Python", "Django"], href: "#" },
  { title: "[Project four]", desc: "[Short description of the project]", tech: ["React", "Node.js"], href: "#" },
];
export default function Works() {
  return (
    <Section id="works" title="Works">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <a key={p.title} href={p.href} className="group block overflow-hidden rounded-xl border border-line bg-panel transition hover:border-mint">
            {/* SWAP: replace this placeholder with <Image src="/projects/x.png" ... /> */}
            <div className="flex aspect-video items-center justify-center bg-ink text-slate-600"><ImageIcon aria-hidden size={32} /></div>
            <div className="p-6">
              <h3 className="flex items-center justify-between text-lg font-medium text-white">{p.title}<ArrowUpRight size={18} className="text-slate-500 transition group-hover:text-mint" aria-hidden /></h3>
              <p className="mt-2 text-slate-400">{p.desc}</p>
              <p className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-mint">{p.tech.map((t) => (<span key={t}>[Tech: {t}]</span>))}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
