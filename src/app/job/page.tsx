import { redirect } from "next/navigation";
import { getHomeJobSlugById } from "@/lib/homeJobs";

type Props = {
  searchParams: Promise<{ id?: string }>;
};

export default async function JobPage({ searchParams }: Props) {
  const { id } = await searchParams;

  if (id) {
    const slug = getHomeJobSlugById(id);

    if (slug) {
      redirect(`/jobs/${slug}`);
    }
  }

  redirect("/#job-listings");
}
