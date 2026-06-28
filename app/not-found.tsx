import Link from "next/link";
import { Section, Container } from "@/components/common/Section";
import { PhoneButton } from "@/components/common/PhoneButton";
import { ROUTES } from "@/lib/routes";
import { siteConfig } from "@/lib/config";

export default function NotFound() {
  return (
    <Section className="!py-24">
      <Container size="narrow">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            404
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">Page Not Found</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={ROUTES.home}
              className="text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Back to Home
            </Link>
            <PhoneButton size="sm" />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Or{" "}
            <Link href={ROUTES.contact} className="text-accent hover:underline">
              get in touch
            </Link>{" "}
            with {siteConfig.business.name}.
          </p>
        </div>
      </Container>
    </Section>
  );
}
