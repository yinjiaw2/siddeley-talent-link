import Link from "next/link";

export type JobDetails = {
  id: string;
  title: string;
  description: string;
  amount: string;
};

type JobDetailsPageProps = {
  amountLabel: string;
  backLabel: string;
  job: JobDetails;
  jobParam: string;
};

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

export default function JobDetailsPage({
  amountLabel,
  backLabel,
  job,
  jobParam,
}: JobDetailsPageProps) {
  return (
    <main className="bg-[#F2F1EF] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#jobs"
          className="inline-flex rounded-full border border-[#0D1B2A]/10 bg-white px-4 py-2 text-sm font-semibold text-[#0D1B2A] transition-colors duration-150 hover:border-[#FB8C00] hover:text-[#FB8C00]"
          style={fontStyle}
        >
          {backLabel}
        </Link>

        <article className="mt-6 rounded-[2rem] bg-white p-10 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-6 border-b border-gray-100 pb-8">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FB8C00]"
                style={fontStyle}
              >
                {jobParam}
              </p>
              <h1
                className="mt-4 text-4xl font-extrabold leading-tight text-[#0D1B2A] md:text-5xl"
                style={fontStyle}
              >
                {job.title}
              </h1>
            </div>

            <div className="rounded-[1.5rem] bg-[#F2F1EF] px-6 py-5 text-right">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500"
                style={fontStyle}
              >
                {amountLabel}
              </p>
              <p
                className="mt-2 text-2xl font-extrabold text-[#0D1B2A]"
                style={fontStyle}
              >
                {job.amount}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p
              className="text-base leading-8 text-gray-600"
              style={fontStyle}
            >
              {job.description}
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
