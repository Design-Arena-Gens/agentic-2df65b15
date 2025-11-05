const values = [
  {
    title: "Circular Wardrobe",
    description:
      "We design for longevity and offer complimentary repairs to keep each piece in rotation.",
  },
  {
    title: "Regenerative Fibers",
    description:
      "Natural fabrics sourced from verified regenerative farms with traceable supply chains.",
  },
  {
    title: "Small-Batch Production",
    description:
      "Thoughtfully produced in limited runs to reduce waste while maintaining atelier-level detail.",
  },
];

export function ValueProps() {
  return (
    <section className="bg-stone-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-3 md:px-10 lg:px-12">
        {values.map((value) => (
          <article key={value.title} className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">
              {value.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              {value.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
