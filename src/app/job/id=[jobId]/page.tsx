import { getMessages, getTranslations } from "next-intl/server";
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

  const t = await getTranslations("homeJobs");
  const messages = await getMessages();
  const jobs = (messages.recruitJobs as { jobs: JobDetails[] }).jobs;
  const job = jobs.find((entry) => entry.id === jobId);

  if (!job) {
    notFound();
  }

  return (
    <div>
      <p>{job.title}</p>
    </div>
  );
}
