export default function AboutPage() {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "SEO fundamentals",
    "Content strategy",
    "Communication",
    "Creative problem-solving",
  ];

  return (
    <div className="min-h-screen bg-[#fff8f1] text-[#402b34]">
      <main>
        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-700">
              01 / About me
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Building with purpose.
              <span className="text-rose-700"> Designing for people.</span>
            </h1>
            <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
              <div>
                <p className="text-lg leading-8 text-[#654f58]">
                  I&apos;m Nkazimulo Princess Ncube, a software developer and
                  digital marketing student. I enjoy the balance between
                  building a useful experience and understanding how it reaches
                  the people it was made for.
                </p>
                <p className="mt-5 text-base leading-8 text-[#76646a]">
                  My studies in digital marketing complement my growing
                  development skills, giving me a broader perspective on
                  communication, audiences, and the details that make a website
                  feel considered.
                </p>
              </div>
              <div className="space-y-8">
                <div className="rounded-3xl border border-rose-100 bg-[#fffdf9] p-7 shadow-sm sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-700">
                    Education
                  </p>
                  <h2 className="mt-3 text-xl font-semibold">
                    Digital marketing student
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#76646a]">
                    Developing knowledge of digital audiences, content, and
                    marketing strategy alongside practical software development.
                  </p>
                </div>
                <div>
                  <h2 className="text-sm font-semibold">Skills &amp; interests</h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-rose-100 bg-[#fffdf9] px-3.5 py-2 text-xs font-medium text-[#765e67] transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-800"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl bg-[#74344f] p-7 text-[#fff8f1] sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-200">
                    My career goal
                  </p>
                  <p className="mt-3 text-base leading-8 text-rose-50/90">
                    To grow into a versatile developer who pairs strong
                    technical foundations with a thoughtful understanding of
                    digital growth, creating accessible experiences that work
                    for people and businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#74344f] text-[#fff8f1]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a href="/home" className="text-sm font-semibold">Nkazimulo Princess Ncube</a>
          <p className="text-xs text-rose-100/70">Growing through code, creativity, and curiosity.</p>
          <a href="/contact" className="text-xs text-rose-100 transition hover:text-white">Join me <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </div>
  );
}
