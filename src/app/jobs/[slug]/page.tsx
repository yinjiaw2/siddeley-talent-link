import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMessages, getTranslations } from "next-intl/server";
import JobDetailsPage from "@/components/job-details/JobDetailsPage";
import type { JobContent } from "@/types/job";
import enJobContent from "../../../../messages/en/job/jobs.json";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return enJobContent.jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const messages = await getMessages();
  const jobs = (messages.jobContent as { jobs: JobContent[] }).jobs;
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);

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
  const messagesData = await getMessages();
  const t = await getTranslations("jobDetails");
  const jobs = (messagesData.jobContent as { jobs: JobContent[] }).jobs;
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);

  if (!job) {
    notFound();
  }

  const messages = {
    backLabel: t("backLabel"),
    heroEyebrow: t("heroEyebrow"),
    summaryTitle: t("summaryTitle"),
    summaryLabel: t("summaryLabel"),
    benefitsTitle: t("benefitsTitle"),
    responsibilitiesTitle: t("responsibilitiesTitle"),
    requirementsTitle: t("requirementsTitle"),
    noteTitle: t("noteTitle"),
    applyCardTitle: t("applyCardTitle"),
    applyCardDescription: t("applyCardDescription"),
    contactCta: t("contactCta"),
    vetassessCta: t("vetassessCta"),
    sharedRole: {
      title: t("sharedRole.title"),
      intro: t("sharedRole.intro"),
      qualificationLabel: t("sharedRole.qualificationLabel"),
      qualificationValue: t("sharedRole.qualificationValue"),
      experienceLabel: t("sharedRole.experienceLabel"),
      experienceValue: t("sharedRole.experienceValue"),
      hoursLabel: t("sharedRole.hoursLabel"),
      hoursValue: t("sharedRole.hoursValue"),
      skillsetsTitle: t("sharedRole.skillsetsTitle"),
      skillsets: t.raw("sharedRole.skillsets") as string[],
      dutiesTitle: t("sharedRole.dutiesTitle"),
      duties: t.raw("sharedRole.duties") as string[],
    },
    meta: {
      publishedAt: t("meta.publishedAt"),
      location: t("meta.location"),
      category: t("meta.category"),
      salary: t("meta.salary"),
    },
  };

  return <JobDetailsPage job={job} messages={messages} />;
}
