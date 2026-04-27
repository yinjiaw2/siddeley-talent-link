import { redirect } from "next/navigation";
import { getMessages } from "next-intl/server";
import type { JobContent } from "@/types/job";

type Props = {
  searchParams: Promise<{ id?: string }>;
};

export default async function JobPage({ searchParams }: Props) {
  const { id } = await searchParams;
  const messages = await getMessages();
  const jobs = (messages.jobContent as { jobs: JobContent[] }).jobs;

  if (id) {
    const slug = jobs.find((job) => job.id === id)?.slug;

    if (slug) {
      redirect(`/jobs/${slug}`);
    }
  }

  redirect("/#job-listings");
}
