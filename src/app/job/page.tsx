type Props = {
  searchParams: { id?: string };
};

export default function JobPage({ searchParams }: Props) {
  const id = searchParams.id;

  return <div>Job ID: {id}</div>;
}
