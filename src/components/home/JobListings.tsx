"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLocale } from "next-intl";
import { getHomeJobLabels, getHomeJobs } from "@/lib/homeJobs";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function JobListings() {
  const locale = useLocale();
  const labels = getHomeJobLabels(locale);
  const jobs = getHomeJobs(locale);
  const cardGroups =
    jobs.length >= 2 ? [jobs, [jobs[1], jobs[0]]] : [jobs];

  const [activeGroup, setActiveGroup] = useState(0);
  const totalGroups = cardGroups.length;

  const showPrevious = () => {
    setActiveGroup((current) => (current - 1 + totalGroups) % totalGroups);
  };

  const showNext = () => {
    setActiveGroup((current) => (current + 1) % totalGroups);
  };

  return (
    <section
      id="job-listings"
      className="w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,#ffe7cc_0%,#fff7ef_26%,#ffffff_58%,#fffaf5_100%)] py-24 scroll-mt-16"
    >
      <div className="mx-auto mb-14 max-w-6xl px-6">
        <div className="max-w-4xl">
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-orange-500"
            style={{ fontFamily: font }}
          >
            {labels.sectionEyebrow}
          </p>
          <h2
            className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl"
            style={{ fontFamily: font, letterSpacing: "-0.03em" }}
          >
            {labels.sectionTitle}
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {cardGroups[activeGroup].map((job) => (
            <Link
              key={`${activeGroup}-${job.slug}`}
              href={`/jobs/${job.slug}`}
              className="group block h-full rounded-[28px] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-4"
            >
              <article
                className="job-listing-card flex h-full flex-col rounded-[28px] border border-gray-200/80 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition duration-300 group-hover:-translate-y-1 group-hover:border-orange-300 group-hover:shadow-[0_28px_90px_rgba(15,23,42,0.14)] md:p-7"
                style={{ fontFamily: font }}
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div
                    className="rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.16em]"
                    style={{
                      borderColor: job.accent.softBorder,
                      backgroundColor: job.accent.softBg,
                      color: job.accent.softText,
                    }}
                  >
                    ANZSCO {job.anzsco}
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                      {labels.meta.salary}
                    </p>
                    <p className="mt-1 text-sm font-bold text-gray-900">
                      {job.salary}
                    </p>
                  </div>
                </div>

                <h3 className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 transition-colors group-hover:text-orange-600">
                  {job.title}
                </h3>

                <p className="mb-5 text-[15px] leading-7 text-gray-600">
                  {job.cardDescription}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {[job.location, job.category, job.workType].map((item) => (
                    <span
                      key={`${job.slug}-${item}`}
                      className="rounded-full px-3 py-2 text-xs font-medium leading-5"
                      style={{
                        backgroundColor: job.accent.chipBg,
                        color: job.accent.chipText,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="border-t border-gray-100 pt-4 text-sm leading-6 text-gray-500">
                  {job.summary}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-2 rounded-full bg-[#0D1B2A] px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-orange-500"
                    style={{ fontFamily: font }}
                  >
                    {labels.detailsCta}
                    <ArrowRight size={16} />
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                    <ArrowRight size={20} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Show previous jobs"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
            onClick={showPrevious}
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center justify-center gap-3">
            {cardGroups.map((_, index) => {
              const isActive = index === activeGroup;

              return (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show job group ${index + 1}`}
                  className="flex h-4 w-4 items-center justify-center"
                  onClick={() => setActiveGroup(index)}
                >
                  <span
                    className="block h-3 w-3 rounded-full transition-all"
                    style={{
                      backgroundColor: isActive ? "#F97316" : "#D1D5DB",
                      transform: isActive ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Show next jobs"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
            onClick={showNext}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-10 flex justify-center xl:justify-start">
          <Link
            href="/services/recruit"
            className="inline-flex rounded-full border border-[#0D1B2A]/12 bg-white px-6 py-3 text-sm font-semibold text-[#0D1B2A] transition-colors hover:border-orange-300 hover:text-orange-600"
            style={{ fontFamily: font }}
          >
            {labels.browseMore}
          </Link>
        </div>
      </div>
    </section>
  );
}
