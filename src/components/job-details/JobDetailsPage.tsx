import Link from "next/link";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import enRecruitJobs from "../../../messages/en/services/recruit/jobs.json";
import zhRecruitJobs from "../../../messages/zh-CN/services/recruit/jobs.json";

type Job = {
  amount: string;
  description: string;
  id: string;
  title: string;
};

type JobDetailsPageProps = {
  jobId?: string;
};

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

const messagesByLocale = {
  en: {
    amountLabel: "Salary",
    backLabel: "Back to jobs",
    descriptionLabel: "Role overview",
    eyebrow: "Open Position",
    emptyId: "A job id is required.",
    notFound: "This job could not be found.",
  },
  "zh-CN": {
    amountLabel: "薪资",
    backLabel: "返回职位列表",
    descriptionLabel: "职位概览",
    eyebrow: "招聘职位",
    emptyId: "缺少职位编号。",
    notFound: "未找到该职位信息。",
  },
} as const;

const jobsByLocale = {
  en: enRecruitJobs.jobs,
  "zh-CN": zhRecruitJobs.jobs,
} as const satisfies Record<keyof typeof messagesByLocale, Job[]>;

export default async function JobDetailsPage({
  jobId,
}: JobDetailsPageProps) {
  const locale = await getLocale();
  const currentLocale = locale === "en" ? "en" : "zh-CN";
  const copy = messagesByLocale[currentLocale];

  if (!jobId) {
    notFound();
  }

  const job = jobsByLocale[currentLocale].find((item) => item.id === jobId);

  if (!job) {
    notFound();
  }

  return (
    <section className="bg-[#F6F8FB] px-6 py-16 md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <Link
          href="/#jobs"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#0D1B2A] transition-colors hover:text-[#FB8C00]"
          style={fontStyle}
        >
          <span aria-hidden="true">←</span>
          {copy.backLabel}
        </Link>

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(13,27,42,0.08)]">
          <div className="bg-[#0D1B2A] px-8 py-10 text-white md:px-12 md:py-14">
            <p
              className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FB8C00]"
              style={fontStyle}
            >
              {copy.eyebrow}
            </p>
            <h1
              className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl"
              style={fontStyle}
            >
              {job.title}
            </h1>
          </div>

          <div className="grid gap-8 px-8 py-10 md:grid-cols-[minmax(0,1fr)_18rem] md:px-12 md:py-14">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FB8C00]"
                style={fontStyle}
              >
                {copy.descriptionLabel}
              </p>
              <p
                className="mt-5 text-base leading-8 text-slate-600 md:text-lg"
                style={fontStyle}
              >
                {job.description}
              </p>
            </div>

            <aside className="rounded-3xl border border-orange-100 bg-orange-50 p-6">
              <p
                className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500"
                style={fontStyle}
              >
                {copy.amountLabel}
              </p>
              <p
                className="mt-3 text-3xl font-extrabold text-[#0D1B2A]"
                style={fontStyle}
              >
                {job.amount}
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
