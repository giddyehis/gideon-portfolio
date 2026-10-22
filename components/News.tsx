import Section from "./Section";
const posts = [
  { date: "2024-06-01", title: "New Python tool released", body: "[One or two lines about the update]" },
  { date: "2024-05-12", title: "Speaking at a tech event", body: "[One or two lines about the update]" },
  { date: "2024-04-20", title: "[Another update]", body: "[One or two lines about the update]" },
];
export default function News() {
  return (
    <Section id="news" title="Latest from the lab.">
      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="border-l border-line pl-5">
            <time dateTime={p.date} className="font-mono text-xs text-mint">{p.date}</time>
            <h3 className="mt-2 text-lg font-medium text-white">{p.title}</h3>
            <p className="mt-2 text-slate-400">{p.body}</p>
            <a href="#" aria-label={`Read more: ${p.title}`} className="mt-3 inline-block text-sm text-volt hover:underline">Read More</a>
          </article>
        ))}
      </div>
    </Section>
  );
}
