import { profile } from "@/config/profile";
import Link from "next/link";

export default function PhotographyPage() {
  if (!profile.photography) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-rose-900 dark:text-rose-100 mb-4">
            Photography section coming soon!
          </h1>
          <Link
            href="/"
            className="text-rose-600 hover:text-rose-700 dark:text-rose-300 dark:hover:text-rose-200 underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const { title, description, photos } = profile.photography;

  return (
    <div className="min-h-screen animated-gradient px-6 py-16">
      <main className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-rose-600 hover:text-rose-700 dark:text-rose-300 dark:hover:text-rose-200 mb-6"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-rose-900 dark:text-rose-100 mb-4">
            {title}
          </h1>
          <p className="text-lg text-rose-700 dark:text-rose-200 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="w-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="space-y-1">
                    {photo.caption && (
                      <p className="text-white text-sm font-medium leading-tight">
                        {photo.caption}
                      </p>
                    )}
                    {photo.date && (
                      <p className="text-white/80 text-xs">
                        {new Date(photo.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {photos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-rose-700 dark:text-rose-200 text-lg">
              No photos to display yet. Check back soon!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
