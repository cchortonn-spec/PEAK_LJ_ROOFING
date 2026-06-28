"use client";

import { useState } from "react";
import { Lightbox } from "@/components/common/Lightbox";
import { siteConfig } from "@/lib/config";
import { layoutVariants } from "@/lib/layout";
import type { GalleryImage } from "@/types";
import {
  GalleryShell,
  GalleryGrid,
  GalleryMasonry,
  GalleryFeatured,
} from "./gallery/GalleryVariants";

export function Gallery() {
  const images = siteConfig.gallery;
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const lightbox = layoutVariants.galleryLightbox;
  const galleryVariant = layoutVariants.gallery;

  const props = {
    images,
    lightbox,
    onImageClick: lightbox ? setActiveImage : undefined,
  };

  return (
    <>
      <GalleryShell>
        {galleryVariant === "masonry" && <GalleryMasonry {...props} />}
        {galleryVariant === "featured" && <GalleryFeatured {...props} />}
        {galleryVariant === "grid" && <GalleryGrid {...props} />}
      </GalleryShell>
      {lightbox && (
        <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />
      )}
    </>
  );
}
