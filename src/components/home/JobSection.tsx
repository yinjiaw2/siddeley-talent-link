import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import JobCard from "@/components/home/JobCard";

type Job = {
  id: string;
  title: string;
  description: string;
  amount: string;
};

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

export default async function JobSection() {
  const locale = await getLocale();
  const t = await getTranslations("homeJobs");
  const jobsModule = await import(
    `../../../messages/${locale}/services/recruit/jobs.json`
  );
  const jobs = jobsModule.default.jobs as Job[];

  return (
    <section id="jobs" className="bg-white px-6 py-24 scroll-mt-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FB8C00]"
              style={fontStyle}
            >
              {t("label")}
            </p>
            <h2
              className="mt-4 text-4xl font-extrabold text-[#0D1B2A] md:text-5xl"
              style={fontStyle}
            >
              {t("title")}
            </h2>
            <p
              className="mt-5 text-base leading-8 text-gray-600"
              style={fontStyle}
            >
              {t("description")}
            </p>
          </div>

          <Link
            href="/services/recruit"
            className="inline-flex w-fit rounded-full bg-[#0D1B2A] px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-black"
            style={fontStyle}
          >
            {t("cta")}
          </Link>
        </div>

        <div className="mt-12 flex flex-row gap-6">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              description={job.description}
              amount={job.amount}
              amountLabel={t("amountLabel")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
