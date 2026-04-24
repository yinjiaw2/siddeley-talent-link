import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import JobDetailsView, {
  type JobDetails,
} from "@/components/job-details/JobDetailsPage";

export default async function JobDetailsRoute({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;

  if (!jobId) {
    notFound();
  }

  const locale = await getLocale();
  const t = await getTranslations("homeJobs");
  const jobsModule = await import(
    `../../../../messages/${locale}/services/recruit/jobs.json`
  );
  const jobs = jobsModule.default.jobs as JobDetails[];
  const job = jobs.find((entry) => entry.id === jobId);

  if (!job) {
    notFound();
  }

  return (
    <JobDetailsView
      job={job}
      jobParam={`id=${jobId}`}
      backLabel={t("label")}
      amountLabel={t("amountLabel")}
    />
  );
}
