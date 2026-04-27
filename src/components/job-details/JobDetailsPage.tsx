import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
} from "lucide-react";
import type { JobContent } from "@/types/job";

type JobDetailsPageProps = {
  job: JobContent;
  messages: {
    backLabel: string;
    heroEyebrow: string;
    summaryTitle: string;
    summaryLabel: string;
    benefitsTitle: string;
    responsibilitiesTitle: string;
    requirementsTitle: string;
    noteTitle: string;
    salaryNote: string;
    applyCardTitle: string;
    applyCardDescription: string;
    contactCta: string;
    vetassessCta: string;
    sharedRole: {
      title: string;
      intro: string;
      qualificationLabel: string;
      qualificationValue: string;
      experienceLabel: string;
      experienceValue: string;
      hoursLabel: string;
      hoursValue: string;
      skillsetsTitle: string;
      dutiesTitle: string;
    };
    meta: {
      publishedAt: string;
      location: string;
      category: string;
      salary: string;
    };
  };
};

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

const sectionTitleClass = "text-2xl font-extrabold text-[#0D1B2A] md:text-3xl";

export default function JobDetailsPage({ job, messages }: JobDetailsPageProps) {
  const metaItems = [
    {
      icon: CalendarDays,
      label: messages.meta.publishedAt,
      value: job.publishedAt,
    },
    {
      icon: MapPin,
      label: messages.meta.location,
      value: job.location,
    },
    {
      icon: BriefcaseBusiness,
      label: messages.meta.category,
      value: job.category,
    },
  ];

  return (
    <main className="bg-[linear-gradient(180deg,#fff7ef_0%,#f8f5f0_52%,#ffffff_100%)] px-6 py-18 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#job-listings"
          className="inline-flex items-center gap-2 rounded-full border border-[#0D1B2A]/10 bg-white px-4 py-2 text-sm font-semibold text-[#0D1B2A] transition-colors duration-150 hover:border-[#FB8C00] hover:text-[#FB8C00]"
          style={fontStyle}
        >
          <ArrowLeft size={16} />
          {messages.backLabel}
        </Link>

        <section className="mt-6 overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_24px_90px_rgba(15,23,42,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1.7fr)_360px]">
            <div className="bg-[linear-gradient(135deg,#0D1B2A_0%,#102A43_42%,#1D4ED8_140%)] px-8 py-10 text-white md:px-12 md:py-14">
              <p
                className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300"
                style={fontStyle}
              >
                {messages.heroEyebrow}
              </p>
              <h1
                className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl"
                style={fontStyle}
              >
                {job.title}
              </h1>

              <div className="mt-6 flex flex-wrap gap-3">
                <span
                  className="rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.18em]"
                  style={{
                    borderColor: job.accent.softBorder,
                    backgroundColor: "rgba(255,255,255,0.08)",
                    color: "#ffffff",
                  }}
                >
                  ANZSCO {job.anzsco}
                </span>
                <span
                  className="rounded-full px-4 py-2 text-xs font-semibold tracking-[0.18em]"
                  style={{
                    backgroundColor: "rgba(251,140,0,0.16)",
                    color: "#FED7AA",
                  }}
                >
                  {job.workType}
                </span>
              </div>

              <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200"
                  style={fontStyle}
                >
                  {messages.summaryTitle}
                </p>
                <p className="mt-3 text-base leading-8 text-slate-100" style={fontStyle}>
                  {job.summary}
                </p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200"
                    style={fontStyle}
                  >
                    {messages.sharedRole.qualificationLabel}
                  </p>
                  <p
                    className="mt-2 text-base font-extrabold leading-7 text-white"
                    style={fontStyle}
                  >
                    {messages.sharedRole.qualificationValue}
                  </p>
                </div>
              </div>
            </div>

            <aside className="bg-[#FFFDF9] px-8 py-10 md:px-10">
              <div className="rounded-[1.75rem] border border-orange-100 bg-orange-50/70 p-6">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600"
                  style={fontStyle}
                >
                  {messages.summaryLabel}
                </p>

                <div className="mt-5 space-y-5">
                  {metaItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.label} className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-orange-500 shadow-sm">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p
                            className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400"
                            style={fontStyle}
                          >
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm font-semibold leading-6 text-[#0D1B2A]">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 rounded-[1.75rem] bg-[#0D1B2A] p-6 text-white">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-300"
                  style={fontStyle}
                >
                  {messages.meta.salary}
                </p>
                <p className="mt-3 text-4xl font-extrabold leading-tight" style={fontStyle}>
                  {job.salary}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300" style={fontStyle}>
                  {messages.salaryNote}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[job.location, job.category, job.workType].map((item) => (
                    <span
                      key={`hero-salary-${item}`}
                      className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold tracking-[0.08em] text-slate-100"
                      style={fontStyle}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-8 grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <article className="h-full rounded-[2rem] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)] md:p-10">
            <h2 className={sectionTitleClass} style={fontStyle}>
              {messages.responsibilitiesTitle}
            </h2>
            <ul className="mt-5 space-y-4 text-base leading-7 text-gray-600" style={fontStyle}>
              {job.responsibilities.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <h3 className="text-xl font-extrabold text-[#0D1B2A]" style={fontStyle}>
                {messages.sharedRole.dutiesTitle}
              </h3>
              <ul className="mt-4 space-y-4 text-base leading-7 text-gray-600" style={fontStyle}>
                {job.duties.map((item) => (
                  <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0D1B2A]" />
                  <span>{item}</span>
                </li>
              ))}
              </ul>
            </div>
          </article>

          <div className="grid gap-8">
            <article className="rounded-[2rem] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)] md:p-10">
              <div>
                <h3 className="text-xl font-extrabold text-[#0D1B2A]" style={fontStyle}>
                  {messages.sharedRole.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-gray-600" style={fontStyle}>
                  {messages.sharedRole.intro}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] bg-[#F8F5F0] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400" style={fontStyle}>
                      {messages.sharedRole.qualificationLabel}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-[#0D1B2A]" style={fontStyle}>
                      {messages.sharedRole.qualificationValue}
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] bg-[#F8F5F0] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400" style={fontStyle}>
                      {messages.sharedRole.experienceLabel}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-[#0D1B2A]" style={fontStyle}>
                      {messages.sharedRole.experienceValue}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-[1.4rem] bg-[#F8F5F0] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400" style={fontStyle}>
                    {messages.sharedRole.hoursLabel}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#0D1B2A]" style={fontStyle}>
                    {messages.sharedRole.hoursValue}
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-extrabold text-[#0D1B2A]" style={fontStyle}>
                    {messages.sharedRole.skillsetsTitle}
                  </h3>
                  <ul className="mt-4 space-y-4 text-base leading-7 text-gray-600" style={fontStyle}>
                    {job.skillsets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-8 grid items-stretch gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-[#0D1B2A] p-8 text-white shadow-[0_20px_70px_rgba(15,23,42,0.14)] md:p-10">
            <p className="text-2xl font-extrabold" style={fontStyle}>
              {messages.applyCardTitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300" style={fontStyle}>
              {messages.applyCardDescription}
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              style={fontStyle}
            >
              {messages.contactCta}
              <ArrowRight size={16} />
            </Link>
          </article>

          <article className="rounded-[2rem] border border-dashed border-orange-200 bg-orange-50/60 p-8 md:p-10">
            <h2 className={sectionTitleClass} style={fontStyle}>
              {messages.noteTitle}
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-600" style={fontStyle}>
              {job.note}
            </p>
            <Link
              href={job.noteUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white px-5 py-3 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-500 hover:text-white"
              style={fontStyle}
            >
              {messages.vetassessCta}
              <ArrowRight size={16} />
            </Link>
          </article>
        </section>
      </div>
    </main>
  );
}
