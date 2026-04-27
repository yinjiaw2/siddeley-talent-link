import JobDetailsPage from "@/components/job-details/JobDetailsPage";

type Props = {
  searchParams: Promise<{ id?: string }>;
};

export default async function JobPage({ searchParams }: Props) {
  const { id } = await searchParams;

  if (!id) {
    return <p>Job ID is missing.</p>;
  }

  return <JobDetailsPage jobId={id} />;
}
