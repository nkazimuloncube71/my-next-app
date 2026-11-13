export default function ServicePage() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Thoughtful, reliable websites that bring ideas to life and make it easy for people to find what they need.",
    },
    {
      number: "02",
      title: "Responsive Website Design",
      description:
        "Clear, comfortable experiences designed to work beautifully across phones, tablets, and desktop screens.",
    },
    {
      number: "03",
      title: "Digital Marketing",
      description:
        "Audience-focused digital ideas that connect useful content with the people who need to discover it.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff8f1] text-[#402b34]">
      <main>
        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-700">
              02 / Services
            </p>
            <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
                Thoughtful work,
                <span className="text-rose-700"> made for people.</span>
              </h1>
              <p className="max-w-md text-sm leading-7 text-[#76646a]">
                I bring a learning mindset to each project, connecting
                functional development with clear, audience-aware design.
              </p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="group rounded-3xl border border-rose-100 bg-[#fffdf9] p-7 transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-[0_20px_50px_-35px_rgba(143,61,90,0.3)] sm:p-8"
                >
                  <p className="font-mono text-xs text-[#927c80]">
                    SERVICE / {service.number}
                  </p>
                  <h2 className="mt-8 text-xl font-semibold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#76646a]">
                    {service.description}
                  </p>
                  <a
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-rose-700 transition group-hover:gap-3"
                  >
                    Let&apos;s talk <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#74344f] text-[#fff8f1]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a href="/home" className="text-sm font-semibold">Nkazimulo Princess Ncube</a>
          <p className="text-xs text-rose-100/70">Growing through code, creativity, and curiosity.</p>
          <a href="/contact" className="text-xs text-rose-100 transition hover:text-white">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </div>
  );
}
