"use client";
import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
const links = ["About", "Works", "Store", "News", "Contact"];
const icon = "rounded-md p-2 text-slate-400 transition hover:text-mint";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-mono text-sm text-white">&lt;<span className="text-mint">Gideon</span> /&gt;</a>
        <ul className="hidden gap-8 text-sm md:flex">
          {links.map((l) => (<li key={l}><a href={`#${l.toLowerCase()}`} className="transition hover:text-white">{l}</a></li>))}
        </ul>
        <div className="flex items-center">
          <a className={icon} href="https://github.com/giddyehis" aria-label="Gideon on GitHub"><Github size={18} /></a>
          <a className={icon} href="https://linkedin.com/gideonik" aria-label="Gideon on LinkedIn"><Linkedin size={18} /></a>
          <button className={`${icon} md:hidden`} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-ink px-5 py-3 md:hidden">
          {links.map((l) => (<li key={l}><a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} className="block py-3 text-slate-200">{l}</a></li>))}
        </ul>
      )}
    </header>
  );
}
