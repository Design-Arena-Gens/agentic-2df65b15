const testimonials = [
  {
    quote:
      "Each piece feels intentional, from the fabric hand-feel to the tailoring. They wear beautifully season after season.",
    name: "Alina Torres",
    role: "Fashion Editor, Curated",
  },
  {
    quote:
      "Finally a label that delivers modern silhouettes without compromising on craft. The repair program is unmatched.",
    name: "Marcus Lee",
    role: "Stylist & Consultant",
  },
  {
    quote:
      "I reach for these layers every day. They elevate my wardrobe while still feeling effortless and comfortable.",
    name: "Priya Anand",
    role: "Architect & Atelier Member",
  },
];

export function Testimonials() {
  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Testimonials
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              Loved by modern minimalists worldwide
            </h2>
            <p className="text-base text-gray-600">
              Atelier members receive priority access, complimentary tailoring,
              and annual wardrobe checks with our stylists.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_36px_-24px_rgba(15,23,42,0.3)]"
              >
                <p className="text-sm leading-relaxed text-gray-700">
                  “{testimonial.quote}”
                </p>
                <div className="pt-6">
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
