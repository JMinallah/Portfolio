import type { Metadata } from "next";
import { absoluteUrl, locationPages, siteConfig } from "@/lib/site-config";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return locationPages.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locationPages.find((entry) => entry.slug === slug);
  const locationName = location?.name ?? slug;

  return {
    title: `${siteConfig.name} in ${locationName}`,
    description: `Location-specific experience and offerings for ${locationName}.`,
    alternates: {
      canonical: `/locations/${slug}`,
    },
    openGraph: {
      title: `${siteConfig.name} in ${locationName}`,
      description: `Location-specific experience and offerings for ${locationName}.`,
      url: absoluteUrl(`/locations/${slug}`),
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = locationPages.find((entry) => entry.slug === slug);

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">
        {siteConfig.name} in {location?.name ?? slug}
      </h1>
      <p className="mt-4 max-w-3xl text-base text-zinc-600 dark:text-zinc-300">
        GEO scaffolding is active for this location page. Replace this with your
        final localized content and outcomes.
      </p>
    </main>
  );
}
