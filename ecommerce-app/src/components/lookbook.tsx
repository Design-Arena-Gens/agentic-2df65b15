const editorials = [
  {
    title: "Monochrome Movement",
    description:
      "Layered charcoal textures with our signature topcoat and tailored vest. Shot in Soho.",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Gallery Opening",
    description:
      "Silk midi dressed down with utility outerwear and sculptural accessories.",
    image:
      "https://images.unsplash.com/photo-1529694157870-59a6d986b7f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sunlit Studio",
    description:
      "Organic cotton separates in desert tones and handwoven sandals for summer evenings.",
    image:
      "https://images.unsplash.com/photo-1542293787938-4d2226c7896e?auto=format&fit=crop&w=1200&q=80",
  },
];

export function Lookbook() {
  return (
    <section id="stories" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 lg:px-12">
        <div className="flex flex-col gap-4 pb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            In the studio
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
            Stories from the season
          </h2>
          <p className="max-w-2xl text-base text-gray-600">
            Our atelier team documents each capsule in motion. Explore how we
            bring tactile fabrics and sculptural silhouettes to life.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {editorials.map((story) => (
            <article
              key={story.title}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_12px_40px_-24px_rgba(15,23,42,0.4)]"
            >
              <div
                className="h-64 bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${story.image})` }}
              />
              <div className="space-y-3 p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {story.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {story.description}
                </p>
                <button className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-900 underline-offset-4 transition hover:underline">
                  Read story
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
