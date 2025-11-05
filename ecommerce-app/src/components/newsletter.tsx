export function Newsletter() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 px-8 py-14 text-white shadow-[0_20px_60px_-40px_rgba(0,0,0,0.7)]">
        <div className="space-y-5 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Atelier membership
          </span>
          <h2 className="text-3xl font-semibold tracking-tight">
            Join for early access and styling sessions
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-white/70">
            Be the first to view capsule drops, receive invites to in-store
            ateliers, and access one-on-one wardrobe appointments with our
            stylists.
          </p>
          <form className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Email address"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-900 transition hover:bg-white/80"
            >
              Join
            </button>
          </form>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
