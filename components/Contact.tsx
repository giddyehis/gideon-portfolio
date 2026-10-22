"use client";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Section from "./Section";
// SWAP: create a form at formspree.io and paste your endpoint (or point this at a Resend API route)
const ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
const field = "w-full rounded-lg border border-line bg-panel px-4 py-3 text-white placeholder:text-slate-600";
export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const r = await fetch(ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
      if (!r.ok) throw new Error();
      setStatus("sent"); form.reset();
    } catch { setStatus("error"); }
  }
  return (
    <Section id="contact" title="Let’s build something together.">
      <div className="grid gap-12 md:grid-cols-2">
        <form onSubmit={submit} className="space-y-4">
          <div><label htmlFor="name" className="mb-1 block text-sm">Name</label><input id="name" name="name" required className={field} /></div>
          <div><label htmlFor="email" className="mb-1 block text-sm">Email</label><input id="email" name="email" type="email" required className={field} /></div>
          <div><label htmlFor="message" className="mb-1 block text-sm">Message</label><textarea id="message" name="message" rows={5} required className={field} /></div>
          <button disabled={status === "sending"} className="rounded-lg bg-mint px-5 py-3 text-sm font-medium text-ink transition hover:brightness-110 disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          <p role="status" className="text-sm">
            {status === "sent" && "Message sent. I’ll reply soon."}
            {status === "error" && "Message not sent. Email me directly at gideonxm@gmail.com."}
          </p>
        </form>
        <ul className="space-y-5">
          <li className="flex gap-3"><Mail aria-hidden className="text-mint" size={20} /><a href="mailto:gideonxm@gmail.com" className="hover:text-white">gideonxm@gmail.com</a></li>
          <li className="flex gap-3"><Phone aria-hidden className="text-mint" size={20} /><a href="tel:+2349075729538" className="hover:text-white">+2349075729538</a></li>
          <li className="flex gap-3"><MapPin aria-hidden className="mt-0.5 shrink-0 text-mint" size={20} /><address className="not-italic">36/38 Oliyide Street, Ijaiye, Lagos State.</address></li>
          <li className="flex gap-4 pt-2">
            <a href="https://linkedin.com/gideonik" aria-label="Gideon on LinkedIn" className="hover:text-mint"><Linkedin /></a>
            <a href="https://github.com/giddyehis" aria-label="Gideon on GitHub" className="hover:text-mint"><Github /></a>
          </li>
        </ul>
      </div>
    </Section>
  );
}
