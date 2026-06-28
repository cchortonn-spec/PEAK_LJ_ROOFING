import { layoutVariants } from "@/lib/layout";
import { ReviewsGrid, ReviewsFeatured } from "./reviews/ReviewsVariants";

export function Reviews() {
  const variant = layoutVariants.reviews;

  switch (variant) {
    case "featured":
      return <ReviewsFeatured />;
    case "grid":
    default:
      return <ReviewsGrid />;
  }
}
