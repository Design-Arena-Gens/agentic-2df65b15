import Image from "next/image";
import type { Product } from "@/data/products";

type ProductGridProps = {
  products: Product[];
  title: string;
  id: string;
  eyebrow?: string;
};

export function ProductGrid({ products, title, id, eyebrow }: ProductGridProps) {
  return (
    <section id={id} className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 lg:px-12">
        <div className="flex flex-col gap-4 pb-10">
          {eyebrow ? (
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_12px_40px_-20px_rgba(15,23,42,0.3)] transition hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority={product.badge === "New"}
                />
                {product.badge ? (
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-900">
                    {product.badge}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {product.price}
                  </span>
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-4 inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-gray-700">
                  Add to bag
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
