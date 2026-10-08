import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <main
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-[#09090b]"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30">
          <div className="absolute inset-0 rounded-2xl bg-teal-400/10 blur-xl" />
          <LoaderCircle
            className="relative h-7 w-7 animate-spin text-teal-300"
            aria-hidden="true"
          />
        </div>

        <div className="text-center">
          <p className="text-sm font-medium tracking-[0.18em] text-zinc-200">
            SAI TEJ DEEP
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Loading portfolio...
          </p>
        </div>
      </div>
    </main>
  );
}