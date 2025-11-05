import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-100 via-white to-stone-100">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:px-10 lg:px-12">
        <div className="flex flex-col justify-center space-y-8">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-700">
            Atelier Spring / Summer 24
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Crafted layers for every city moment.
          </h1>
          <p className="max-w-xl text-lg text-gray-600">
            Discover the new capsule of refined essentials, tailored in natural
            fibers and versatile silhouettes. Designed to move effortlessly
            through the week.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#women"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-gray-700"
            >
              Shop new arrivals
            </Link>
            <Link
              href="#stories"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-medium tracking-wide text-gray-800 transition hover:border-gray-400 hover:text-gray-900"
            >
              Explore the lookbook
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-4">
            <div>
              <dt className="text-xs uppercase tracking-wide text-gray-500">
                Natural fibers
              </dt>
              <dd className="text-lg font-semibold text-gray-900">92%</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-gray-500">
                Certified makers
              </dt>
              <dd className="text-lg font-semibold text-gray-900">48</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-gray-500">
                Carbon neutral
              </dt>
              <dd className="text-lg font-semibold text-gray-900">Since 2021</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-gray-500">
                Repair guarantee
              </dt>
              <dd className="text-lg font-semibold text-gray-900">5 years</dd>
            </div>
          </dl>
        </div>
        <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">
              Featured look
            </p>
            <p className="mt-3 text-xl font-medium">The Linen Story</p>
            <p className="mt-1 text-sm text-white/70">
              Breezy shades layered with textured staples.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
