export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fff8f1] text-[#402b34]">
      <main>
        <section className="overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-rose-100 bg-[#fffdf9] px-4 py-2 text-xs font-semibold tracking-wide text-rose-800 shadow-sm">
                <span className="size-2 animate-pulse rounded-full bg-rose-500" />
                SOFTWARE DEVELOPER &amp; DIGITAL MARKETING STUDENT
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Hello, I&apos;m
                <span className="mt-2 block text-rose-700">
                  Nkazimulo
                  <br className="hidden sm:block" /> Princess Ncube.
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#76646a] sm:text-lg">
                Welcome to my corner of the web. I&apos;m learning to bring
                thoughtful digital experiences to life through code, creativity,
                and a growing understanding of what helps ideas connect.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="/service"
                  className="inline-flex items-center gap-2 rounded-full bg-[#8f3d5a] px-6 py-3.5 text-sm font-semibold text-[#fff8f1] shadow-lg shadow-rose-900/10 transition hover:-translate-y-0.5 hover:bg-[#713047]"
                >
                  View My Work <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-rose-200 bg-[#fffdf9] px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-50"
                >
                  Contact Me
                </a>
              </div>
              <p className="mt-12 text-xs font-medium uppercase tracking-[0.2em] text-[#927c80]">
                Curious by nature. Intentional by design.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[440px] transition-transform duration-500 hover:-translate-y-1">
              <div
                aria-hidden="true"
                className="absolute -right-7 -top-8 size-36 rounded-full bg-rose-200/60 blur-3xl"
              />
              <div className="relative rounded-[2rem] border border-[#fffdf9] bg-[#fffdf9] p-3 shadow-[0_30px_90px_-40px_rgba(143,61,90,0.32)]">
                <div
                  role="img"
                  aria-label="Profile photo placeholder for Nkazimulo Princess Ncube"
                  className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[#74344f] p-7 text-[#fff8f1] sm:min-h-[490px] sm:p-9"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-24 -top-20 size-80 rounded-full border border-rose-100/15"
                  />
                  <div className="relative flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-rose-100">
                      A little about me
                    </span>
                    <span className="text-sm text-rose-100" aria-hidden="true">
                      ✳
                    </span>
                  </div>
                  <div className="relative flex flex-col items-center py-8 text-center">
                    <div className="grid size-40 place-items-center rounded-full border border-rose-100/25 bg-gradient-to-br from-rose-300/40 via-rose-100/10 to-[#fff8f1]/5 shadow-[0_0_70px_-20px_rgba(244,114,182,0.65)] sm:size-48">
                      <span className="text-6xl font-semibold tracking-[-0.08em] sm:text-7xl">
                        NP
                      </span>
                    </div>
                    <p className="mt-7 text-lg font-medium">
                      Your portrait goes here
                    </p>
                    <p className="mt-2 max-w-[230px] text-sm leading-6 text-rose-100/75">
                      A space for the face behind the ideas.
                    </p>
                  </div>
                  <div className="relative flex items-center justify-between border-t border-rose-100/20 pt-5 text-xs text-rose-100/80">
                    <span>Software · Creativity · Growth</span>
                    <span>01 / 04</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-rose-100 bg-[#fffdf9] px-4 py-3 shadow-xl shadow-rose-900/10 sm:-left-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#927c80]">
                  Currently
                </p>
                <p className="mt-1 text-xs font-semibold">Learning &amp; building</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-rose-100 bg-[#fffdf9] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-700">
                A little about me
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Code meets creativity.
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-[#76646a]">
                I&apos;m a software developer and digital marketing student,
                interested in the intersection of useful technology and
                thoughtful communication. I&apos;m always learning, building,
                and looking for ways to make digital experiences clearer and
                more welcoming.
              </p>
              <a
                href="/about"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-rose-700 transition hover:gap-3"
              >
                More about me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#74344f] text-[#fff8f1]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a href="/home" className="text-sm font-semibold">
            Nkazimulo Princess Ncube
          </a>
          <p className="text-xs text-rose-100/70">
            Growing through code, creativity, and curiosity.
          </p>
          <a
            href="/contact"
            className="text-xs text-rose-100 transition hover:text-white"
          >
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
