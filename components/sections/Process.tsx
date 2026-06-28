import { layoutVariants } from "@/lib/layout";
import { ProcessNumbered, ProcessTimeline } from "./process/ProcessVariants";

export function Process() {
  const variant = layoutVariants.process;

  switch (variant) {
    case "timeline":
      return <ProcessTimeline />;
    case "numbered":
    default:
      return <ProcessNumbered />;
  }
}
