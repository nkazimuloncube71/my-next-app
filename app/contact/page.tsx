"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "");
    const body = `From: ${name} (${email})\n\n${message}`;

    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#fff8f1] text-[#402b34]">
      <main className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#74344f] shadow-[0_30px_80px_-45px_rgba(143,61,90,0.45)]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <section className="relative overflow-hidden p-8 text-[#fff8f1] sm:p-12 lg:p-14">
              <div aria-hidden="true" className="absolute -bottom-20 -left-24 size-72 rounded-full bg-rose-300/20 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-200">
                  03 / Get in touch
                </p>
                <h1 className="mt-5 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
                  Have an idea?
                  <br />
                  Let&apos;s connect.
                </h1>
                <p className="mt-5 max-w-sm text-sm leading-7 text-rose-50/80">
                  I&apos;d love to hear about a project, opportunity, or
                  creative idea you&apos;re working on. Send a note and let&apos;s
                  start a conversation.
                </p>
                <div className="mt-10 border-t border-rose-100/20 pt-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-rose-100/70">
                    Find me online
                  </p>
                  <div className="mt-4 flex gap-3">
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-rose-100/30 px-4 py-2 text-sm text-rose-50 transition hover:border-rose-200 hover:text-white"
                    >
                      LinkedIn <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-rose-100/30 px-4 py-2 text-sm text-rose-50 transition hover:border-rose-200 hover:text-white"
                    >
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-[#fffdf9] p-7 sm:p-10 lg:p-12">
              <h2 className="text-xl font-semibold">Send a message</h2>
              <p className="mt-2 text-sm text-[#927c80]">
                Complete the form to open a ready-to-send email draft.
              </p>
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-medium text-[#654f58]">
                    Name
                    <input
                      required
                      autoComplete="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-rose-100 bg-[#fffaf5] px-4 py-3 text-sm font-normal text-[#402b34] outline-none transition placeholder:text-[#ad999b] focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
                    />
                  </label>
                  <label className="space-y-2 text-sm font-medium text-[#654f58]">
                    Email
                    <input
                      required
                      autoComplete="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-rose-100 bg-[#fffaf5] px-4 py-3 text-sm font-normal text-[#402b34] outline-none transition placeholder:text-[#ad999b] focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
                    />
                  </label>
                </div>
                <label className="block space-y-2 text-sm font-medium text-[#654f58]">
                  Subject
                  <input
                    required
                    name="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-xl border border-rose-100 bg-[#fffaf5] px-4 py-3 text-sm font-normal text-[#402b34] outline-none transition placeholder:text-[#ad999b] focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
                  />
                </label>
                <label className="block space-y-2 text-sm font-medium text-[#654f58]">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell me a little about it..."
                    className="w-full resize-y rounded-xl border border-rose-100 bg-[#fffaf5] px-4 py-3 text-sm font-normal text-[#402b34] outline-none transition placeholder:text-[#ad999b] focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
                  />
                </label>
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p aria-live="polite" className="text-xs text-[#927c80]">
                    {submitted
                      ? "Your draft is ready. Add a recipient in your email app to send it."
                      : "Your email app will open with the message details filled in."}
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#8f3d5a] px-6 py-3 text-sm font-semibold text-[#fff8f1] transition hover:bg-[#713047]"
                  >
                    send<span aria-hidden="true">↗</span>
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
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
