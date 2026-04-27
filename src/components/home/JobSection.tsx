import Link from "next/link";
import { getMessages, getTranslations } from "next-intl/server";
import { JobCarousel, type Job } from "@/components/home/JobCard";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

export default async function JobSection() {
  const t = await getTranslations("homeJobs");
  const messages = await getMessages();
  const jobs = (messages.recruitJobs as { jobs: Job[] }).jobs;

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

        <JobCarousel jobs={jobs} amountLabel={t("amountLabel")} />
      </div>
    </section>
  );
}
