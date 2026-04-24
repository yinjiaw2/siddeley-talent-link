import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import JobDetailsView, {
  type JobDetails,
} from "@/components/job-details/JobDetailsPage";

function getJobIdFromParam(jobParam: string) {
  if (!jobParam.startsWith("id=")) {
    return null;
  }

  return jobParam.slice(3);
}

export default async function JobDetailsRoute({
  params,
}: {
  params: Promise<{ jobParam: string }>;
}) {
  const { jobParam } = await params;
  const jobId = getJobIdFromParam(jobParam);

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
      jobParam={jobParam}
      backLabel={t("label")}
      amountLabel={t("amountLabel")}
    />
  );
}
