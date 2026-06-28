"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroRotatingEyebrowProps {
  prefix: string;
  rotatingLocations: string[];
  rotationIntervalSeconds?: number;
  className?: string;
  light?: boolean;
}

function getLongestLocation(locations: string[]) {
  return locations.reduce(
    (longest, location) =>
      location.length > longest.length ? location : longest,
    locations[0] ?? ""
  );
}

export function HeroRotatingEyebrow({
  prefix,
  rotatingLocations,
  rotationIntervalSeconds = 3,
  className,
  light = true,
}: HeroRotatingEyebrowProps) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const locations = useMemo(
    () =>
      rotatingLocations.map((location) => location.trim()).filter(Boolean),
    [rotatingLocations]
  );
  const longestLocation = useMemo(
    () => getLongestLocation(locations),
    [locations]
  );

  useEffect(() => {
    if (locations.length <= 1) return;

    const intervalMs = rotationIntervalSeconds * 1000;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % locations.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [locations.length, rotationIntervalSeconds]);

  return (
    <p
      className={cn(
        "eyebrow mb-4",
        light ? "text-accent" : "text-accent",
        className
      )}
    >
      {prefix}
      {locations.length > 0 && (
        <>
          {" "}
          <span className="relative inline-grid">
            <span
              className="invisible col-start-1 row-start-1 whitespace-nowrap"
              aria-hidden="true"
            >
              {longestLocation}
            </span>
            <span
              className="col-start-1 row-start-1 whitespace-nowrap text-left"
              aria-live="polite"
              aria-atomic="true"
            >
              {prefersReducedMotion ? (
                locations[index]
              ) : (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={locations[index]}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="inline-block"
                  >
                    {locations[index]}
                  </motion.span>
                </AnimatePresence>
              )}
            </span>
          </span>
        </>
      )}
    </p>
  );
}
