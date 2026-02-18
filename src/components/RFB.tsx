"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactFloatingBalloons = dynamic(
  () =>
    import("react-floating-balloons").then((mod) => mod.ReactFloatingBalloons),
  { ssr: false },
);

export default function RFB({ count }: { count: number }) {
  const [supportsTouch, setSupportsTouch] = useState(false);

  useEffect(() => {
    const touch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    setSupportsTouch(!!touch);
  }, []);

  console.log("supportsTouch", supportsTouch);
  // if (!supportsTouch) return null;
  return (
    <ReactFloatingBalloons
      count={count}
      msgText="Kriti"
      colors={["red", "purple", "yellow", "blue", "orange"]}
    />
  );
}
