"use client";

import Image from "next/image";
import { useState } from "react";

const ASSET = {
  hero: "/lp-hero-placeholder.jpg",
  logos: "/lp-logos-placeholder.png",
  diagram: "/lp-diagram-placeholder.png",
};

function PlaceholderImage({
  src,
  alt,
  label,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-[80%] rounded-xl border border-neutral-200 bg-white/80 px-4 py-3 text-center text-sm text-neutral-700 shadow-sm backdrop-blur">
          <div className="text-neutral-900">IMAGE PLACEHOLDER</div>
          <div className="mt-1 text-xs text-neutral-600">{label}</div>
          <div className="mt-2 text-[11px] text-neutral-500">
            Put the image file in /public and keep this path: {src}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.06),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.05),transparent_50%),radial-gradient(circle_at_40%_90%,rgba(0,0,0,0.05),transparent_55%)]" />

      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover opacity-0"
        onError={(e) => {
          (e.currentTarget as any).style.opacity = "0";
        }}
        onLoad={(e) => {
          (e.currentTarget as any).style.opacity = "1";
        }}
      />
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
      {children}
    </span>
  );
}

function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <div className="text-xs uppercase tracking-widest text-neutral-500">
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
        {title}
      </h2>
      {desc ? <p className="mt-3 text-base text-neutral-600">{desc}</p> : null}
    </div>
  );
}

function Icon({
  name,
}: {
  name: "bolt" | "shield" | "target" | "doc" | "steps" | "compare";
}) {
  const size = 20;
  const base = "text-neutral-900";

  switch (name) {
    case "bolt":
      return (
        <svg
          width={size}
          height={size}
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M13 2L3 14h8l-1 8 11-14h-8l0-6z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "shield":
      return (
        <svg
          width={size}
          height={size}
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2l8 4v7c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "target":
      return (
        <svg
          width={size}
          height={size}
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 22a10 10 0 1 0-10-10"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 18a6 6 0 1 0-6-6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 14a2 2 0 1 0-2-2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M22 2l-7 7" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M16 2h6v6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "doc":
      return (
        <svg
          width={size}
          height={size}
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 3h7l3 3v15H7V3z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "steps":
      return (
        <svg
          width={size}
          height={size}
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6h10M4 12h14M4 18h8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16 5l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "compare":
      return (
        <svg
          width={size}
          height={size}
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 4v16M17 4v16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4 8h6M14 8h6M4 16h6M14 16h6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    default:
      return null;
  }
}

export default function Page() {
  const [demoEmail, setDemoEmail] = useState("");
  const [demoStatus, setDemoStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [demoError, setDemoError] = useState("");

  return (
    <main id="top" className="min-h-screen bg-white text-neutral-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50">
              <span className="text-sm font-semibold">NEX</span>
            </div>
            <div className="leading-tight">
              <div className="text-xs text-neutral-500">Deal workspace</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
            <a href="#top" className="hover:text-neutral-900">
              TOP
            </a>
            <a href="#what" className="hover:text-neutral-900">
              WHAT
            </a>
            <a href="#why" className="hover:text-neutral-900">
              WHY
            </a>
            <a href="#how" className="hover:text-neutral-900">
              HOW
            </a>
            <a href="#demo" className="hover:text-neutral-900">
              DEMO
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#demo"
              className="inline-flex rounded-xl bg-neutral-900 px-3 py-2 text-sm text-white shadow-sm hover:bg-neutral-800"
            >
              Request a demo
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.05),transparent_60%)]" />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pb-14 pt-6 sm:px-6 lg:grid-cols-2 lg:items-stretch lg:pb-20 lg:pt-8">
          {/* Left */}
          <div className="relative flex h-full flex-col">
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
             NEX doesn’t make work faster by automating it. It makes work
                faster by letting thinking continue seamlessly            </h1>

            <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-neutral-700">
               <p>
                When deal context—prior information, assumptions, individual
                reasoning, and technical knowledge—is fragmented, professionals
                are forced to pause and reconstruct their thinking, creating
                cognitive overhead.
              </p>
              <p>
                NEX eliminates this friction by retaining deal context within a
                structured, folder-based workspace that aligns with how
                professionals already organize work—bringing senior-level
                perspective into everyday work by augmenting reasoning with
                on-demand technical knowledge, while keeping full control of
                judgment in the user’s hands.
              </p>
            </div>

            <div className="flex-1" />
          </div>

          {/* Right */}
          {/* Right */}
         <div className="relative flex h-full items-start">
            <img
              src="/lp-hero2.png"
              alt="NEX hero visual"
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* What */}
      <section id="what" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle
            kicker="WHAT"
            title="AI assistant who stays in context"
            desc=""
          />

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 items-stretch">
            {/* Card 1 */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50">
                  <Icon name="doc" />
                </div>
                <div className="text-base font-medium text-neutral-900 line-clamp-2">
                  No need to babysit AI every time
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-600 line-clamp-4">
                NEX works differently than ChatGPT/Copilot. It keeps context across the materials you bring in — models, docs, and minutes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50">
                  <Icon name="target" />
                </div>
                <div className="text-base font-medium text-neutral-900 line-clamp-2">
                  One workspace, not scattered chats
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-600 line-clamp-4">
                With deal context maintained, there’s no need to switch sessions back and forth. Recent work stays visible, with past context there when needed.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50">
                  <Icon name="bolt" />
                </div>
                <div className="text-base font-medium text-neutral-900 line-clamp-2">
                  Pressure-test ideas before they travel
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-600 line-clamp-4">
                Ask deal questions and test conclusions early. NEX helps you pressure-test reasoning before it’s taken into docs, meetings, or recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why NEX */}
      <section id="why" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle kicker="WHY" title="NEX reduces cognitive overhead" />

          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3 items-stretch">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50">
                  <Icon name="bolt" />
                </div>
                <div className="text-base font-medium text-neutral-900 line-clamp-2">
                  Holding context is mentally expensive
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-600 line-clamp-4">
                Deal work requires tracking assumptions, stakeholder positions,
                open issues, and evolving reasoning—often across long cycles.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50">
                  <Icon name="shield" />
                </div>
                <div className="text-base font-medium text-neutral-900 line-clamp-2">
                  Context loss slows decisions and outputs
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-600 line-clamp-4">
                When context is fragmented, momentum breaks. You pause, rebuild
                the thread, and consistency becomes harder to maintain.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50">
                  <Icon name="target" />
                </div>
                <div className="text-base font-medium text-neutral-900 line-clamp-2">
                  There isn’t always someone to think with
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-600 line-clamp-4">
                Responsibility often concentrates on one person, or teams are
                stretched thin across multiple deals—so deep back-and-forth is
                limited.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle kicker="HOW" title="Three steps" />

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50">
                  <Icon name="steps" />
                </div>
                <div className="text-sm font-medium text-neutral-900">
                  1. Bring your materials
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Upload what you already have—docs, models, minutes—or start by
                describing the deal context in plain language.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50">
                  <Icon name="target" />
                </div>
                <div className="text-sm font-medium text-neutral-900">
                  2. Work in one place
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Ask questions, explore options, and draft deliverables. After a
                break, resume where you left off—with context intact.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50">
                  <Icon name="shield" />
                </div>
                <div className="text-sm font-medium text-neutral-900">
                  3. Apply it in the real world
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Use the output in your actual documents and discussions. Edit
                it, challenge it, and apply it—where the decision still lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <img
        src="/lp-context.png"
        alt="Contextual scene representing pre-decision analysis"
        className="w-full max-w-4xl mx-auto mb-16 opacity-60"
      />

      {/* CTA */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
                More time for work that actually matters — because your thinking doesn’t keep stopping.
              </h3>
              <p className="mt-3 max-w-xl text-base leading-7 text-neutral-600">
                By retaining deal context, NEX reduces cognitive overhead—so you
                can keep thinking continuously and deliver work you can stand
                behind.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
              <div id="demo" className="text-sm font-medium text-neutral-900">
                Request a demo
              </div>

              <form
                className="mt-5 grid grid-cols-1 gap-3"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setDemoStatus("sending");
                  setDemoError("");

                  try {
                    const res = await fetch("/api/lead", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email: demoEmail }),
                    });

                    const data = await res.json();
                    if (!res.ok || !data.ok)
                      throw new Error(data?.error || "Request failed");

                    setDemoStatus("sent");
                  } catch (err: any) {
                    setDemoStatus("error");
                    setDemoError(err?.message ?? "Failed to submit");
                  }
                }}
              >
                <label className="grid gap-1">
                  <span className="text-xs text-neutral-600">Email</span>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={demoEmail}
                    onChange={(e) => setDemoEmail(e.target.value)}
                    className="h-11 rounded-xl border border-neutral-200 bg-white px-3 text-sm outline-none ring-neutral-300 focus:ring-2"
                  />
                </label>

                <button
                  type="submit"
                  disabled={demoStatus === "sending" || demoStatus === "sent"}
                  className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-neutral-900 px-4 text-sm text-white shadow-sm hover:bg-neutral-800 disabled:opacity-60"
                >
                  {demoStatus === "sending"
                    ? "Sending..."
                    : demoStatus === "sent"
                    ? "Received"
                    : "Submit demo request"}
                </button>

                {demoStatus === "sent" && (
                  <div className="text-sm text-neutral-600">
                    Thanks — we’ve received your request.
                  </div>
                )}

                {demoStatus === "error" && (
                  <div className="text-sm text-red-600">{demoError}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-neutral-600 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} NEX. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#top" className="hover:text-neutral-900">
              TOP
            </a>
            <a href="#what" className="hover:text-neutral-900">
              WHAT
            </a>
            <a href="#why" className="hover:text-neutral-900">
              WHY
            </a>
            <a href="#how" className="hover:text-neutral-900">
              HOW
            </a>
            <a href="#demo" className="hover:text-neutral-900">
              DEMO
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
