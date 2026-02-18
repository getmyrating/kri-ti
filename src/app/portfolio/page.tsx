import RFB from "@/components/RFB";
import { profile } from "@/config/profile";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen animated-gradient px-6 py-16">
      <main className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-rose-200/60 bg-white/70 dark:bg-black/40 backdrop-blur-md shadow-2xl">
          <div className="p-8 sm:p-12">
            <div className="flex flex-col items-center text-center gap-4">
              <p className="text-sm uppercase tracking-[0.25em] text-rose-500">
                Portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-rose-900 dark:text-rose-100">
                Coming soon
              </h1>
              <p className="mt-3 text-base sm:text-lg text-rose-700 dark:text-rose-200 max-w-xl">
                {profile.name} is carefully curating her favourite work. Check back
                soon to see a collection of moments, memories, and magic.
              </p>
              <div className="mt-6 inline-flex items-center rounded-full border border-rose-300 bg-rose-50/80 text-rose-700 px-5 py-2 text-sm font-semibold shadow-sm">
                ✨ Stay tuned
              </div>
              <Link
                href="/"
                className="mt-6 text-sm text-rose-600 hover:text-rose-700 dark:text-rose-300 dark:hover:text-rose-200"
              >
                ← Back to home
              </Link>
            </div>
          </div>
          <div className="border-t border-rose-200/60 bg-rose-50/60 dark:bg-rose-950/30 p-4 text-center">
            <p className="text-xs sm:text-sm text-rose-700 dark:text-rose-200">
              This little corner of the internet is under construction, just like
              all good things.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

