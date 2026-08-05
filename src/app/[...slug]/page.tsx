import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPageView } from "@/components/content-page";
import { CareersPage } from "@/components/careers-page";
import { FounderTeamPage } from "@/components/founder-team-page";
import { HowWeWorkPage } from "@/components/how-we-work-page";
import { OurStoryPage } from "@/components/our-story-page";
import { ResourcesFaqPage } from "@/components/resources-faq-page";
import { contentPages, getContentPage } from "@/content/site";

type RouteProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return contentPages.map((page) => ({ slug: page.path.split("/") }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getContentPage(slug.join("/"));

  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.path}` },
  };
}

export default async function DynamicContentPage({ params }: RouteProps) {
  const { slug } = await params;
  const page = getContentPage(slug.join("/"));

  if (!page) notFound();

  if (page.path === "about/founder-team") return <FounderTeamPage />;
  if (page.path === "about/our-story") return <OurStoryPage />;
  if (page.path === "about/how-we-work") return <HowWeWorkPage />;
  if (page.path === "about/careers") return <CareersPage />;
  if (page.path === "resources/faq") return <ResourcesFaqPage />;

  return <ContentPageView page={page} />;
}
