import JobDetailsPage from "@/components/job-details/JobDetailsPage";

type Props = {
  searchParams: Promise<{ id?: string }>;
};

export default async function JobPage({ searchParams }: Props) {
  const { id } = await searchParams;

  return <JobDetailsPage jobId={id} />;
}
