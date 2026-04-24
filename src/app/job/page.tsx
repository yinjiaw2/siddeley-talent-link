type Props = {
  searchParams: Promise<{ id?: string }>;
};

export default async function JobPage({ searchParams }: Props) {
  const { id } = await searchParams;

  return <div>Job ID: {id}</div>;
}
