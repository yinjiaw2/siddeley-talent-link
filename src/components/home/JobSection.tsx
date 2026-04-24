import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="rounded-[1.75rem] border border-black/5 bg-[#F2F1EF] p-8 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FB8C00]"
                  style={fontStyle}
                >
                  {job.id}
                </span>
                <div className="text-right">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500"
                    style={fontStyle}
                  >
                    {t("amountLabel")}
                  </p>
                  <p
                    className="mt-1 text-lg font-bold text-[#0D1B2A]"
                    style={fontStyle}
                  >
                    {job.amount}
                  </p>
                </div>
              </div>

              <h3
                className="mt-8 text-2xl font-bold text-[#0D1B2A]"
                style={fontStyle}
              >
                {job.title}
              </h3>
              <p
                className="mt-4 text-base leading-8 text-gray-600"
                style={fontStyle}
              >
                {job.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
