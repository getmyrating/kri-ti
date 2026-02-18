import RFB from "@/components/RFB";
import { profile } from "@/config/profile";

export default function Home() {
  return (
    <div className="min-h-screen animated-gradient px-6 py-16 relative">
      <main className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-rose-200/60 bg-white/70 dark:bg-black/40 backdrop-blur-md shadow-2xl">
          <div className="p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-pink-200 via-rose-200 to-fuchsia-200 blur-xl opacity-70"></div>
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="relative z-10 h-40 w-40 sm:h-48 sm:w-48 rounded-full object-cover ring-4 ring-rose-300 shadow-xl"
                />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-rose-900 dark:text-rose-100">
                  {profile.name}
                </h1>
                <p className="mt-2 text-lg font-medium text-rose-700 dark:text-rose-200">
                  {profile.title}
                </p>
                {profile.location ? (
                  <p className="mt-1 text-sm text-rose-600/80 dark:text-rose-300/80">
                    {profile.location}
                  </p>
                ) : null}
                <p className="mt-6 text-base leading-7 text-rose-800 dark:text-rose-100">
                  {profile.bio}
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  {profile.socials?.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 text-sm font-semibold shadow hover:opacity-90 transition"
                    >
                      {s.label}
                    </a>
                  ))}
                  {profile.email ? (
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center rounded-full border border-rose-300 bg-rose-50 text-rose-700 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-rose-100 transition"
                    >
                      Say Hello
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
            {profile.links && profile.links.length > 0 ? (
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-rose-200 bg-white/70 dark:bg-white/5 p-5 shadow hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-rose-900 dark:text-rose-100 font-semibold">
                        {l.label}
                      </span>
                      <span className="text-rose-500 group-hover:translate-x-1 transition">
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          <div className="border-t border-rose-200/60 bg-rose-50/60 dark:bg-rose-950/30 p-6 text-center">
            <p className="text-sm text-rose-700 dark:text-rose-200">
              Made with a hint of mystery and a lot of pink 💖
            </p>
          </div>
        </div>
      </main>
      <div className="absolute">
        <img
          src="../photos/pp.gif"
          alt="pp"
          className="w-40 md:w-96 max-w-80 fixed bottom-1 right-1 animate-slideUp delay-700"
        />
      </div>
      <RFB count={3} />
    </div>
  );
}
