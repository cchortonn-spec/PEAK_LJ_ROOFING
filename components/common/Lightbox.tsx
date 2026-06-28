"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { GalleryImage } from "@/types";

interface LightboxProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export function Lightbox({ image, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!image) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [image, handleKeyDown]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Close lightbox"
      >
        <X className="size-6" />
      </button>
      <div
        className="relative max-h-[90vh] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {image.isPlaceholder ? (
          <div className="flex aspect-[4/3] w-full min-w-[300px] items-center justify-center rounded-lg bg-muted p-12 text-muted-foreground">
            {image.alt}
          </div>
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="max-h-[85vh] w-auto rounded-lg object-contain"
            sizes="100vw"
            priority
          />
        )}
        <p className="mt-4 text-center text-sm text-white/80">{image.alt}</p>
      </div>
    </div>
  );
}
