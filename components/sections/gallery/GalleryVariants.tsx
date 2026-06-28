"use client";

import Image from "next/image";
import { Section, SectionHeader, Container } from "@/components/common/Section";
import { EmptyState } from "@/components/common/Shared";
import { FadeIn } from "@/components/common/FadeIn";
import { siteConfig } from "@/lib/config";
import type { GalleryImage } from "@/types";
import { cn } from "@/lib/utils";

interface GalleryBaseProps {
  images: GalleryImage[];
  onImageClick?: (image: GalleryImage) => void;
  lightbox?: boolean;
}

function GalleryItem({
  image,
  onClick,
  className,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  image: GalleryImage;
  onClick?: () => void;
  className?: string;
  sizes?: string;
}) {
  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-muted text-left",
        onClick && "cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className
      )}
      aria-label={onClick ? `View ${image.alt}` : undefined}
    >
      {image.isPlaceholder ? (
        <div className="absolute inset-0 flex items-center justify-center bg-primary/5 p-4">
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">
              {image.category}
            </p>
            <p className="mt-1 text-xs text-muted-foreground/70">
              {siteConfig.sections.gallery.placeholderHint}
            </p>
          </div>
        </div>
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <p className="text-sm font-medium text-white">{image.alt}</p>
      </div>
    </Wrapper>
  );
}

export function GalleryGrid({ images, onImageClick, lightbox }: GalleryBaseProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <GalleryItem
          key={image.id}
          image={image}
          className="aspect-[4/3]"
          onClick={lightbox && onImageClick ? () => onImageClick(image) : undefined}
        />
      ))}
    </div>
  );
}

export function GalleryMasonry({ images, onImageClick, lightbox }: GalleryBaseProps) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {images.map((image) => (
        <GalleryItem
          key={image.id}
          image={image}
          className="mb-4 aspect-[4/3] break-inside-avoid"
          onClick={lightbox && onImageClick ? () => onImageClick(image) : undefined}
        />
      ))}
    </div>
  );
}

export function GalleryFeatured({ images, onImageClick, lightbox }: GalleryBaseProps) {
  const [featured, ...rest] = images;
  if (!featured) return null;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <GalleryItem
        image={featured}
        className="aspect-[4/3] lg:aspect-auto lg:min-h-[400px]"
        sizes="(max-width: 1024px) 100vw, 50vw"
        onClick={lightbox && onImageClick ? () => onImageClick(featured) : undefined}
      />
      <div className="grid grid-cols-2 gap-4">
        {rest.map((image) => (
          <GalleryItem
            key={image.id}
            image={image}
            className="aspect-square"
            sizes="(max-width: 1024px) 50vw, 25vw"
            onClick={lightbox && onImageClick ? () => onImageClick(image) : undefined}
          />
        ))}
      </div>
    </div>
  );
}

export function GalleryShell({ children }: { children: React.ReactNode }) {
  const { gallery: section } = siteConfig.sections;
  const images = siteConfig.gallery;

  if (images.length === 0) {
    return (
      <Section variant="primary" id="gallery">
        <Container>
          <SectionHeader
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            light
          />
          <EmptyState
            title={section.emptyTitle}
            description={section.emptyDescription}
          />
        </Container>
      </Section>
    );
  }

  return (
    <Section variant="primary" id="gallery">
      <Container>
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          light
        />
        <FadeIn>{children}</FadeIn>
      </Container>
    </Section>
  );
}
