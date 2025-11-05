import Link from "next/link";

const navItems = [
  { name: "Women", href: "#women" },
  { name: "Men", href: "#men" },
  { name: "Accessories", href: "#accessories" },
  { name: "Stories", href: "#stories" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-gray-900"
        >
          atelier.
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-gray-950"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5 text-sm font-medium">
          <button className="hidden items-center gap-2 text-gray-600 transition-colors hover:text-gray-900 md:flex">
            <span aria-hidden className="text-lg">
              ⌕
            </span>
            Search
          </button>
          <button className="relative text-gray-700 transition-colors hover:text-gray-950">
            <span className="sr-only">View saved items</span>
            <span aria-hidden className="text-lg">
              ♡
            </span>
          </button>
          <button className="relative text-gray-700 transition-colors hover:text-gray-950">
            <span className="sr-only">Open cart</span>
            <span aria-hidden className="text-lg">
              🛒
            </span>
            <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[10px] text-white">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
