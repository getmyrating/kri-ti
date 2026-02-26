"use client";
import { useEffect, useState } from "react";
type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export default function InstallPWAButton() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [canInstall, setCanInstall] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      const beip = e as BeforeInstallPromptEvent;
      setDeferredPrompt(beip);
      setCanInstall(true);
    };
    const installedHandler = () => {
      setInstalled(true);
      setCanInstall(false);
      setDeferredPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", handler as EventListener);
    window.addEventListener("appinstalled", installedHandler);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handler as EventListener,
      );
      window.removeEventListener("appinstalled", installedHandler);
    };
  }, []);

  const onClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setCanInstall(false);
  };

  if (installed) {
    return (
      <div className="inline-flex items-center rounded-full border border-rose-300 bg-rose-50 text-rose-700 px-4 py-2 text-sm font-semibold shadow-sm">
        Installed
      </div>
    );
  }

  if (!canInstall) return null;

  return (
    <button
      onClick={onClick}
      className="inline-flex items-center rounded-xl   border border-rose-300 bg-rose-50 text-rose-700  px-4 py-2 text-sm font-semibold shadow hover:opacity-90 transition"
    >
      Install
    </button>
  );
}
