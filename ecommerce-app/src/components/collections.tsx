const collections = [
  {
    title: "City Layers",
    description: "Modular suiting, cocoon coats, and sculpted knitwear.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    href: "#",
    tone: "bg-stone-900 text-white",
    descriptionClass: "text-white/70",
  },
  {
    title: "Coastal Linen",
    description: "Sunwashed linen sets and breathable cotton voile.",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80",
    href: "#",
    tone: "bg-amber-50 text-gray-900",
    descriptionClass: "text-gray-600",
  },
  {
    title: "Studio Accessories",
    description: "Artisan leather goods and hand-polished jewelry.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
    href: "#",
    tone: "bg-white text-gray-900",
    descriptionClass: "text-gray-600",
  },
];

export function Collections() {
  return (
    <section className="bg-white" id="collections">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 lg:px-12">
        <div className="flex flex-col gap-4 pb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Capsules
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
            Curated collections
          </h2>
          <p className="max-w-2xl text-base text-gray-600">
            Tailored assortments built around tactile fabrics and flexible
            styling. Transition each look from morning meetings to evening
            gatherings.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((collection) => (
            <article
              key={collection.title}
              className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_12px_40px_-28px_rgba(15,23,42,0.45)]"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${collection.image})` }}
              />
              <div className={`space-y-3 p-6 ${collection.tone}`}>
                <h3 className="text-lg font-semibold tracking-tight">
                  {collection.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${collection.descriptionClass}`}
                >
                  {collection.description}
                </p>
                <button className="text-xs font-semibold uppercase tracking-[0.2em] underline-offset-4 transition hover:underline">
                  View capsule
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
