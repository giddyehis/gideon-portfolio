import { BookOpen, Boxes, Shirt } from "lucide-react";
import Section from "./Section";
const STORE = "https://store.giddytech.space"; // SWAP: your Shopify URL (or per-collection URLs)
const items = [
  { icon: BookOpen, title: "Courses", ex: "Full Stack Masterclass", href: STORE },
  { icon: Boxes, title: "Digital Tools", ex: "Boilerplates and templates", href: STORE },
  { icon: Shirt, title: "Merch", ex: "Developer apparel", href: STORE },
];
export default function Store() {
  return (
    <Section id="store" title="Courses, Tools, and Merch.">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map(({ icon: Icon, title, ex, href }) => (
          <div key={title} className="flex flex-col rounded-xl border border-line bg-panel p-6">
            <Icon className="text-volt" size={26} aria-hidden />
            <h3 className="mt-5 text-lg font-medium text-white">{title}</h3>
            <p className="mt-1 flex-1 text-slate-400">{ex}</p>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Shop ${title} on Shopify (opens in a new tab)`}
              className="mt-6 inline-block rounded-lg border border-line px-4 py-2.5 text-center text-sm text-white transition hover:border-mint hover:text-mint">Shop on Shopify →</a>
          </div>
        ))}
      </div>
    </Section>
  );
}
