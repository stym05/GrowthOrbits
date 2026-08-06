import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPageView } from "@/components/content-page";
import { BookCallPage } from "@/components/book-call-page";
import { CareersPage } from "@/components/careers-page";
import { FounderTeamPage } from "@/components/founder-team-page";
import { HowWeWorkPage } from "@/components/how-we-work-page";
import { OurStoryPage } from "@/components/our-story-page";
import { ResourcesFaqPage } from "@/components/resources-faq-page";
import { ResourcesBlogsPage } from "@/components/resources-blogs-page";
import { ServicesOverviewPage } from "@/components/services-overview-page";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { WhoWeServePage } from "@/components/who-we-serve-page";
import { serviceDetails, type ServiceDetailKey } from "@/content/service-details";
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
  if (page.path === "resources/blogs") return <ResourcesBlogsPage />;
  if (page.path === "services") return <ServicesOverviewPage />;
  if (page.path.startsWith("services/")) {
    const serviceKey = page.path.slice("services/".length) as ServiceDetailKey;
    if (serviceKey in serviceDetails) return <ServiceDetailPage serviceKey={serviceKey} />;
  }
  if (page.path === "book-a-call") return <BookCallPage />;
  if (page.path === "who-we-serve") return <WhoWeServePage />;

  return <ContentPageView page={page} />;
}
