"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { signIn } from "next-auth/react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Lightbulb,
  LineChart,
  LogIn,
  Rocket,
  Sparkles,
  Users,
  Video,
  WalletCards,
} from "lucide-react";

const curriculum = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Shape the idea",
    description:
      "Turn a rough idea into a clear business plan with a real audience, a real problem, and a reason to exist.",
    color: "bg-[#f8d66d]",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Build the product",
    description:
      "Learn how to ship useful software, not just a pretty demo. Make something people can actually use.",
    color: "bg-[#ff8066]",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Find your first users",
    description:
      "Explore growth, community, feedback loops, and the practical steps behind getting your product noticed.",
    color: "bg-[#9ee6c5]",
  },
  {
    number: "04",
    icon: WalletCards,
    title: "Think bigger",
    description:
      "Understand funding, sustainability, and how to keep improving when your first users show up.",
    color: "bg-[#c6b5f5]",
  },
];

const submissionItems = [
  "A working website for your business idea",
  "A clear explanation of the problem and your audience",
  "A GitHub repository with your source code",
  "A fast, accessible, responsive experience",
];

export default function SkyLandingPage() {
  const [isJoining, setIsJoining] = useState(false);

  const handleRsvp = () => {
    setIsJoining(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f8d66d", "#ff8066", "#9ee6c5", "#ffffff"],
    });
    window.open(
      "https://rsvp.hackclub.community/fortune-ysws",
      "_blank",
      "noopener,noreferrer",
    );
    window.setTimeout(() => setIsJoining(false), 1200);
  };

  return (
    <div className="fortune-site min-h-screen overflow-hidden bg-[#10131d] text-[#f9f7f2]">
      <header className="relative z-20 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f8d66d] text-lg font-black text-[#10131d] shadow-[3px_3px_0_#ff8066]">
              F
            </span>
            <span className="text-lg font-bold tracking-tight">
              Fortune<span className="text-[#ff8066]">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/65 md:flex">
            <a href="#why-fortune" className="transition hover:text-white">
              Why Fortune
            </a>
            <a href="#curriculum" className="transition hover:text-white">
              What you&apos;ll learn
            </a>
            <a href="#ship" className="transition hover:text-white">
              The challenge
            </a>
          </nav>

          <button
            onClick={() => signIn("hackclub")}
            className="hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition hover:border-white/50 hover:bg-white/10 sm:flex"
          >
            <LogIn className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </header>

      <main>
        <section className="relative isolate">
          <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#ff8066]/20 blur-[120px]" />
          <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[520px] w-[520px] rounded-full bg-[#6c5ce7]/20 blur-[130px]" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:pb-32">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f8d66d]/30 bg-[#f8d66d]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#f8d66d]">
                <Sparkles className="h-3.5 w-3.5" />
                Hack Club YSWS for teen founders
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-[5.6rem]">
                Your idea could be
                <span className="block text-[#ff8066]">a real business.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/65 sm:text-xl">
                Fortune helps you go from &quot;what if?&quot; to shipped product.
                Learn the business, build the website, and get ready for your
                first real users.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleRsvp}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#f8d66d] px-6 py-3.5 font-bold text-[#10131d] shadow-[4px_4px_0_#ff8066] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_#ff8066]"
                >
                  {isJoining ? "Opening RSVP..." : "RSVP for Fortune"}
                  <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <a
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white/80 transition hover:border-white/50 hover:bg-white/10"
                >
                  Explore the program
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm text-white/45">
                <span className="flex -space-x-2">
                  {["P", "A", "K"].map((letter, index) => (
                    <span
                      key={letter}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#10131d] text-xs font-bold text-[#10131d] ${
                        index === 0
                          ? "bg-[#9ee6c5]"
                          : index === 1
                            ? "bg-[#c6b5f5]"
                            : "bg-[#f8d66d]"
                      }`}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
                Built for curious people who ship
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="absolute -right-3 -top-5 z-10 rounded-2xl border border-[#ff8066]/40 bg-[#ff8066] px-4 py-3 text-sm font-black text-[#10131d] shadow-[4px_4px_0_#f8d66d] -rotate-3">
                build something people want ↗
              </div>
              <div className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-3 shadow-2xl backdrop-blur">
                <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#181d2b]">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff8066]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#f8d66d]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#9ee6c5]" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                      fortune / founder mode
                    </span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="mb-10 flex items-start justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9ee6c5]">
                          Your next move
                        </p>
                        <h2 className="mt-2 text-3xl font-black tracking-tight">
                          Ship the useful thing.
                        </h2>
                      </div>
                      <span className="rounded-full bg-[#f8d66d] px-2.5 py-1 text-xs font-black text-[#10131d]">
                        01
                      </span>
                    </div>
                    <div className="space-y-3">
                      {["Find the problem", "Build the first version", "Talk to users"].map(
                        (item, index) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3"
                          >
                            <span
                              className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                                index === 0
                                  ? "bg-[#f8d66d] text-[#10131d]"
                                  : "bg-white/10 text-white/50"
                              }`}
                            >
                              {index === 0 ? <Check className="h-4 w-4" /> : index + 1}
                            </span>
                            <span className="text-sm font-semibold text-white/80">{item}</span>
                            {index === 0 && (
                              <span className="ml-auto text-[10px] font-bold uppercase text-[#9ee6c5]">
                                done
                              </span>
                            )}
                          </div>
                        ),
                      )}
                    </div>
                    <div className="mt-8 rounded-xl bg-[#f8d66d] p-4 text-[#10131d]">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
                        <Users className="h-4 w-4" />
                        Founder note
                      </div>
                      <p className="mt-2 text-sm font-semibold leading-5">
                        You don&apos;t need a perfect plan. You need a first useful step.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-8 hidden rounded-2xl border border-white/15 bg-[#9ee6c5] px-4 py-3 text-sm font-black text-[#10131d] shadow-[4px_4px_0_#10131d] rotate-3 sm:block">
                learn → build → grow
              </div>
            </div>
          </div>
        </section>

        <section id="why-fortune" className="border-y border-white/10 bg-[#f8d66d] text-[#10131d]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-3 md:items-center md:gap-0">
            <div className="border-[#10131d]/15 md:border-r md:pr-8">
              <p className="text-4xl font-black tracking-tight">01</p>
              <p className="mt-1 font-semibold text-[#10131d]/65">idea to opportunity</p>
            </div>
            <div className="border-[#10131d]/15 md:border-r md:px-8">
              <p className="text-4xl font-black tracking-tight">02</p>
              <p className="mt-1 font-semibold text-[#10131d]/65">learn the founder basics</p>
            </div>
            <div className="md:pl-8">
              <p className="text-4xl font-black tracking-tight">03</p>
              <p className="mt-1 font-semibold text-[#10131d]/65">ship a real product</p>
            </div>
          </div>
        </section>

        <section id="curriculum" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff8066]">
              More than a coding project
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              Learn the parts nobody teaches you in class.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/55">
              Great ideas are only the beginning. Our business learning sessions
              give you the tools to make decisions, find users, and keep building.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {curriculum.map(({ number, icon: Icon, title, description, color }) => (
              <article
                key={number}
                className="group rounded-3xl border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${color} text-[#10131d]`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-sm text-white/30">{number}</span>
                </div>
                <h3 className="mt-9 text-2xl font-black">{title}</h3>
                <p className="mt-3 max-w-md leading-7 text-white/55">{description}</p>
                <div className="mt-7 flex items-center gap-2 text-sm font-bold text-white/40 transition group-hover:text-[#f8d66d]">
                  Learn in live sessions + recordings
                  <ChevronRight className="h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="ship" className="bg-[#f3eee3] text-[#10131d]">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e25d45]">
                The Fortune challenge
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                You ship us a business website.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#10131d]/60">
                Take everything you learn and turn it into a product people can
                understand, use, and come back to.
              </p>
              <button
                onClick={handleRsvp}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#10131d] px-6 py-3.5 font-bold text-white transition hover:bg-[#ff8066] hover:text-[#10131d]"
              >
                I&apos;m ready to build
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
            <div className="rounded-3xl border-2 border-[#10131d] bg-white p-6 shadow-[8px_8px_0_#f8d66d] sm:p-9">
              <div className="flex items-center justify-between border-b border-[#10131d]/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e25d45]">
                    Submission checklist
                  </p>
                  <h3 className="mt-2 text-2xl font-black">Make it real.</h3>
                </div>
                <span className="rounded-full bg-[#9ee6c5] px-3 py-1 text-xs font-black">4 steps</span>
              </div>
              <div className="mt-6 space-y-4">
                {submissionItems.map((item, index) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#10131d] text-xs font-black text-[#f8d66d]">
                      {index + 1}
                    </span>
                    <p className="pt-1 font-semibold text-[#10131d]/75">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-[#f3eee3] p-4 text-sm font-semibold text-[#10131d]/65">
                <Video className="h-5 w-5 shrink-0 text-[#e25d45]" />
                Can&apos;t make a live session? Recordings keep you moving.
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff8066]/15 blur-[120px]" />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f8d66d]">
            Your next chapter starts here
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-5xl font-black tracking-[-0.06em] sm:text-7xl">
            Stop waiting for the perfect idea.
            <span className="block text-[#ff8066]">Start building.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/55">
            Bring the spark. We&apos;ll help you turn it into something real.
          </p>
          <button
            onClick={handleRsvp}
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#f8d66d] px-7 py-4 font-black text-[#10131d] shadow-[5px_5px_0_#ff8066] transition hover:-translate-y-1"
          >
            RSVP for Fortune
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-semibold text-white/70">Fortune<span className="text-[#ff8066]">.</span></p>
          <p>Built for teen founders, with Hack Club.</p>
          <a href="https://hackclub.com" className="transition hover:text-white" target="_blank" rel="noreferrer">
            hackclub.com <ArrowUpRight className="inline h-3.5 w-3.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
