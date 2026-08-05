import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPageView } from "@/components/content-page";
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

  return <ContentPageView page={page} />;
}
