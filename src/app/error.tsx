"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Portfolio application error");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090b] px-6 text-zinc-100">
      <section className="w-full max-w-xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10">
          <AlertTriangle className="h-6 w-6 text-amber-300" aria-hidden="true" />
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight">
          Something went wrong.
        </h1>

        <p className="mt-4 text-sm leading-6 text-zinc-400 sm:text-base">
          An unexpected error occurred while loading this page. You can try
          loading it again.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-zinc-100 px-5 text-sm font-semibold text-zinc-950 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
        >
          <RefreshCcw className="h-4 w-4" aria-hidden="true" />
          Try again
        </button>
      </section>
    </main>
  );
}