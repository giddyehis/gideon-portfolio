export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="mb-10 text-3xl font-semibold tracking-tight text-white">{title}</h2>
        {children}
      </div>
    </section>
  );
}
