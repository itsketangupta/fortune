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
    color: "bg-[#ef3340]",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Build the product",
    description:
      "Learn how to ship useful software, not just a pretty demo. Make something people can actually use.",
    color: "bg-[#bdbdbd]",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Find your first users",
    description:
      "Explore growth, community, feedback loops, and the practical steps behind getting your product noticed.",
    color: "bg-[#f5f5f5]",
  },
  {
    number: "04",
    icon: WalletCards,
    title: "Think bigger",
    description:
      "Understand funding, sustainability, and how to keep improving when your first users show up.",
    color: "bg-[#4a4a4a]",
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

  const handleSignIn = async () => {
    const result = await signIn("hackclub", {
      callbackUrl: "/",
      redirect: false,
    });

    if (result?.url) {
      window.location.assign(result.url);
    }
  };

  const handleRsvp = () => {
    setIsJoining(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ef3340", "#ffffff", "#bdbdbd", "#111111"],
    });
    window.open(
      "https://rsvp.hackclub.community/fortune-ysws",
      "_blank",
      "noopener,noreferrer",
    );
    window.setTimeout(() => setIsJoining(false), 1200);
  };

  return (
    <div className="fortune-site font-zeyada min-h-screen overflow-hidden bg-white text-[#111111]">
      <header className="relative z-20 border-b border-[#111111]/15">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-2 border-[#ef3340] bg-[#ef3340] text-lg font-black text-white shadow-[3px_3px_0_#000000]">
              F
            </span>
            <span className="text-lg font-bold tracking-tight text-[#111111]">
              Fortune<span className="text-[#ef3340]">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-base font-medium text-[#111111]/60 md:flex">
            <a href="#why-fortune" className="transition hover:text-[#ef3340]">
              Why Fortune
            </a>
            <a href="#curriculum" className="transition hover:text-[#ef3340]">
              What you&apos;ll learn
            </a>
            <a href="#ship" className="transition hover:text-[#ef3340]">
              The challenge
            </a>
          </nav>

          <button
            type="button"
            onClick={() => {
              void handleSignIn();
            }}
            className="hidden items-center gap-2 border border-[#111111]/30 px-4 py-2 text-sm font-semibold transition hover:border-[#ef3340] hover:bg-[#ef3340]/10 sm:flex"
          >
            <LogIn className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </header>

      <main>
        <section className="relative isolate">
          <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 bg-[#ef3340]/10 blur-[120px]" />
          <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[520px] w-[520px] bg-[#bdbdbd]/20 blur-[130px]" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:pb-32">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 border border-[#ef3340]/60 bg-[#ef3340]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#ef3340]">
                <Sparkles className="h-3.5 w-3.5" />
                Hack Club YSWS for teen founders
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-[5.6rem]">
                Your idea could be
                <span className="block text-[#ef3340]">a real business.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#111111]/65 sm:text-xl">
                Fortune helps you go from &quot;what if?&quot; to shipped product.
                Learn the business, build the website, and get ready for your
                first real users.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleRsvp}
                  className="group inline-flex items-center justify-center gap-2 border-2 border-[#ef3340] bg-[#ef3340] px-6 py-3.5 font-bold text-white shadow-[4px_4px_0_#000000] transition hover:-translate-y-1 hover:bg-[#c51f2b] hover:shadow-[6px_6px_0_#000000]"
                >
                  {isJoining ? "Opening RSVP..." : "RSVP for Fortune"}
                  <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <a
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-2 border border-[#111111]/30 px-6 py-3.5 font-semibold text-[#111111]/80 transition hover:border-[#ef3340] hover:bg-[#ef3340]/10"
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
                      className={`flex h-8 w-8 items-center justify-center border-2 border-[#111111] text-xs font-bold text-[#111111] ${
                        index === 0
                          ? "bg-[#f5f5f5]"
                          : index === 1
                            ? "bg-[#bdbdbd]"
                            : "bg-[#ef3340]"
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
              <div className="absolute -right-3 -top-5 z-10 border border-[#ef3340] bg-[#ef3340] px-4 py-3 text-sm font-black text-white shadow-[4px_4px_0_#000000] -rotate-3">
                build something people want ↗
              </div>
              <div className="border border-[#111111]/20 bg-[#f5f5f5] p-3 shadow-[8px_8px_0_#111111]">
                <div className="overflow-hidden border border-[#111111] bg-[#111111]">
                  <div className="flex items-center justify-between border-b border-white/15 px-5 py-4">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 bg-[#ef3340]" />
                      <span className="h-2.5 w-2.5 bg-[#bdbdbd]" />
                      <span className="h-2.5 w-2.5 bg-[#f5f5f5]" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                      fortune / founder mode
                    </span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="mb-10 flex items-start justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#bdbdbd]">
                          Your next move
                        </p>
                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                          Ship the useful thing.
                        </h2>
                      </div>
                      <span className="border border-[#ef3340] bg-[#ef3340] px-2.5 py-1 text-xs font-black text-white">
                        01
                      </span>
                    </div>
                    <div className="space-y-3">
                      {["Find the problem", "Build the first version", "Talk to users"].map(
                        (item, index) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 border border-white/15 bg-white/[0.04] p-3"
                          >
                            <span
                              className={`flex h-7 w-7 items-center justify-center border ${
                                index === 0
                                  ? "border-[#ef3340] bg-[#ef3340] text-white"
                                  : "bg-white/10 text-white/50"
                              }`}
                            >
                              {index === 0 ? <Check className="h-4 w-4" /> : index + 1}
                            </span>
                            <span className="text-sm font-semibold text-white/80">{item}</span>
                            {index === 0 && (
                              <span className="ml-auto text-[10px] font-bold uppercase text-[#bdbdbd]">
                                done
                              </span>
                            )}
                          </div>
                        ),
                      )}
                    </div>
                    <div className="mt-8 border-l-4 border-[#ef3340] bg-[#f5f5f5] p-4 text-[#111111]">
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
              <div className="absolute -bottom-6 -left-8 hidden border border-white/15 bg-[#bdbdbd] px-4 py-3 text-sm font-black text-[#111111] shadow-[4px_4px_0_#000000] rotate-3 sm:block">
                learn → build → grow
              </div>
            </div>
          </div>
        </section>

        <section id="why-fortune" className="border-y border-black/20 bg-[#ef3340] text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-3 md:items-center md:gap-0">
            <div className="border-white/30 md:border-r md:pr-8">
              <p className="text-4xl font-black tracking-tight">01</p>
              <p className="mt-1 font-semibold text-white/75">idea to opportunity</p>
            </div>
            <div className="border-white/30 md:border-r md:px-8">
              <p className="text-4xl font-black tracking-tight">02</p>
              <p className="mt-1 font-semibold text-white/75">learn the founder basics</p>
            </div>
            <div className="md:pl-8">
              <p className="text-4xl font-black tracking-tight">03</p>
              <p className="mt-1 font-semibold text-white/75">ship a real product</p>
            </div>
          </div>
        </section>

        <section id="curriculum" className="mx-auto max-w-7xl bg-white px-5 py-24 text-[#111111] sm:px-8 sm:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef3340]">
              More than a coding project
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              Learn the parts nobody teaches you in class.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#111111]/60">
              Great ideas are only the beginning. Our business learning sessions
              give you the tools to make decisions, find users, and keep building.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {curriculum.map(({ number, icon: Icon, title, description, color }) => (
              <article
                key={number}
                className="group border border-[#111111]/15 bg-[#f5f5f5] p-6 transition hover:-translate-y-1 hover:border-[#ef3340] hover:bg-[#eeeeee] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center border border-[#111111] ${color} text-[#111111]`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-sm text-[#111111]/40">{number}</span>
                </div>
                <h3 className="mt-9 text-2xl font-black">{title}</h3>
                <p className="mt-3 max-w-md leading-7 text-[#111111]/60">{description}</p>
                <div className="mt-7 flex items-center gap-2 text-sm font-bold text-[#111111]/45 transition group-hover:text-[#ef3340]">
                  Learn in live sessions + recordings
                  <ChevronRight className="h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="ship" className="bg-[#f5f5f5] text-[#111111]">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c51f2b]">
                The Fortune challenge
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                You ship us a business website.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#111111]/60">
                Take everything you learn and turn it into a product people can
                understand, use, and come back to.
              </p>
              <button
                onClick={handleRsvp}
                className="mt-8 inline-flex items-center gap-2 border-2 border-[#111111] bg-[#111111] px-6 py-3.5 font-bold text-white transition hover:border-[#ef3340] hover:bg-[#ef3340]"
              >
                I&apos;m ready to build
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
            <div className="border-2 border-[#111111] bg-white p-6 shadow-[8px_8px_0_#ef3340] sm:p-9">
              <div className="flex items-center justify-between border-b border-[#111111]/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c51f2b]">
                    Submission checklist
                  </p>
                  <h3 className="mt-2 text-2xl font-black">Make it real.</h3>
                </div>
                <span className="border border-[#111111] bg-[#bdbdbd] px-3 py-1 text-xs font-black">4 steps</span>
              </div>
              <div className="mt-6 space-y-4">
                {submissionItems.map((item, index) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#111111] text-xs font-black text-white">
                      {index + 1}
                    </span>
                    <p className="pt-1 font-semibold text-[#111111]/75">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 border-l-4 border-[#ef3340] bg-[#e5e5e5] p-4 text-sm font-semibold text-[#111111]/65">
                <Video className="h-5 w-5 shrink-0 text-[#c51f2b]" />
                Can&apos;t make a live session? Recordings keep you moving.
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-[#ef3340]/10 blur-[120px]" />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#bdbdbd]">
            Your next chapter starts here
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-5xl font-black tracking-[-0.06em] sm:text-7xl">
            Stop waiting for the perfect idea.
            <span className="block text-[#ef3340]">Start building.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/55">
            Bring the spark. We&apos;ll help you turn it into something real.
          </p>
          <button
            onClick={handleRsvp}
            className="mt-9 inline-flex items-center gap-2 border-2 border-[#ef3340] bg-[#ef3340] px-7 py-4 font-black text-white shadow-[5px_5px_0_#000000] transition hover:-translate-y-1 hover:bg-[#c51f2b]"
          >
            RSVP for Fortune
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-semibold text-white/70">Fortune<span className="text-[#ef3340]">.</span></p>
          <p>Built for teen founders, with Hack Club.</p>
          <a href="https://hackclub.com" className="transition hover:text-white" target="_blank" rel="noreferrer">
            hackclub.com <ArrowUpRight className="inline h-3.5 w-3.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
