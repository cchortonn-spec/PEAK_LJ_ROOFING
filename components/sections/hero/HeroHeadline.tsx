"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface HeroHeadlineProps {
  prefix: string;
  rotatingLocations: string[];
  rotationIntervalSeconds?: number;
  className?: string;
}

function getLongestLocation(locations: string[]) {
  return locations.reduce(
    (longest, location) =>
      location.length > longest.length ? location : longest,
    locations[0] ?? ""
  );
}

export function HeroHeadline({
  prefix,
  rotatingLocations,
  rotationIntervalSeconds = 3,
  className,
}: HeroHeadlineProps) {
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
    <h1
      className={cn(
        "text-4xl leading-tight tracking-tight sm:text-5xl",
        className
      )}
    >
      {prefix}
      {locations.length > 0 && (
        <>
          {" "}
          <span className="relative inline-grid text-accent">
            {/* Invisible longest location reserves fixed width so nothing shifts */}
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
              {locations[index]}
            </span>
          </span>
        </>
      )}
    </h1>
  );
}
