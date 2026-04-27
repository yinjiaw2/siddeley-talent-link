import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import JobDetailsPage from "@/components/job-details/JobDetailsPage";
import { getAllHomeJobSlugs, getHomeJobBySlug, getHomeJobLabels } from "@/lib/homeJobs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllHomeJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale();
  const { slug } = await params;
  const job = getHomeJobBySlug(locale, slug);

  if (!job) {
    return {
      title: "Job not found",
    };
  }

  return {
    title: `${job.title} | Siddeley Talent Link`,
    description: job.summary,
  };
}

export default async function JobSlugPage({ params }: Props) {
  const locale = await getLocale();
  const { slug } = await params;
  const job = getHomeJobBySlug(locale, slug);

  if (!job) {
    notFound();
  }

  const labels = getHomeJobLabels(locale);

  return <JobDetailsPage job={job} labels={labels} />;
}
