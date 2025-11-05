const footerLinks = [
  {
    title: "Shop",
    links: ["Women", "Men", "Accessories", "Lifestyle", "Gift cards"],
  },
  {
    title: "Support",
    links: ["Shipping & returns", "Size guide", "Fabric care", "FAQ", "Contact"],
  },
  {
    title: "About",
    links: ["Our story", "Craftsmanship", "Sustainability", "Careers", "Journal"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <p className="text-lg font-semibold tracking-tight text-gray-900">
              atelier.
            </p>
            <p className="max-w-sm text-sm text-gray-600">
              Elevated essentials responsibly crafted in limited runs. Designed
              in New York, produced with certified partners around the globe.
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              © {new Date().getFullYear()} Atelier Collective
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title} className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  {group.title}
                </p>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li
                      key={link}
                      className="text-sm text-gray-600 transition hover:text-gray-900"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
