"use client";

import { ChevronLeft, ChevronRight, Cog, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type JobCard = {
  title: string;
  anzsco: string;
  description: string;
  highlights: string[];
  note: string;
  icon: LucideIcon;
  accent: {
    softBg: string;
    softText: string;
    softBorder: string;
    chipBg: string;
    chipText: string;
  };
};

const jobCards: JobCard[] = [
  {
    title: "Diesel Motor Mechanic (Heavy Commercial Vehicle)",
    anzsco: "321212",
    description:
      "Heavy Commercial Vehicle Mechanics maintain, test and repair diesel engines and the mechanical parts of heavy road transport equipment such as freight trucks and passenger buses.",
    highlights: [
      "Fault diagnosis for engines, transmissions and steering systems",
      "Scheduled servicing, tune-ups and pollution compliance checks",
      "Roadworthiness inspections and breakdown response support",
    ],
    note:
      "Based on the current VETASSESS occupation description for heavy commercial vehicle mechanics.",
    icon: Truck,
    accent: {
      softBg: "#FFF1E8",
      softText: "#C2410C",
      softBorder: "#FDBA74",
      chipBg: "#FFF7ED",
      chipText: "#9A3412",
    },
  },
  {
    title: "Diesel Motor Mechanic (Mobile Plant)",
    anzsco: "321212",
    description:
      "Mobile Plant Mechanics maintain, test and repair diesel engines and the mechanical parts of mobile plant equipment such as dozers, loaders, excavators, graders, drill rigs, cranes, haul trucks and compactors.",
    highlights: [
      "Mechanical and electrical fault finding across plant equipment",
      "Dismantling, rebuilding and testing major diesel components",
      "Preventive maintenance for construction and mining machinery",
    ],
    note:
      "Based on the current VETASSESS occupation description for mobile plant mechanics.",
    icon: Cog,
    accent: {
      softBg: "#ECFDF5",
      softText: "#047857",
      softBorder: "#86EFAC",
      chipBg: "#F0FDF4",
      chipText: "#166534",
    },
  },
];

const cardGroups = [
  [jobCards[0], jobCards[1], jobCards[0]],
  [jobCards[1], jobCards[0], jobCards[1]],
] as const;

function JobCardItem({ job }: { job: JobCard }) {
  const Icon = job.icon;
  return (
    <article
      className="job-listing-card flex h-full shrink-0 flex-col rounded-[28px] border border-gray-200/80 bg-white p-6 md:p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)]"
      style={{ fontFamily: font }}
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full"
          style={{ backgroundColor: job.accent.softBg, color: job.accent.softText }}
        >
          <Icon size={26} strokeWidth={2.1} />
        </div>
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
      </div>

      <h3 className="mb-4 text-2xl font-extrabold leading-tight text-gray-900">
        {job.title}
      </h3>

      <p className="mb-5 text-[15px] leading-7 text-gray-600">
        {job.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {job.highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-full px-3 py-2 text-xs font-medium leading-5"
            style={{ backgroundColor: job.accent.chipBg, color: job.accent.chipText }}
          >
            {highlight}
          </span>
        ))}
      </div>

      <p className="mt-auto border-t border-gray-100 pt-4 text-sm leading-6 text-gray-500">
        {job.note}
      </p>
    </article>
  );
}

export default function JobListings() {
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
      className="w-full overflow-hidden bg-[linear-gradient(180deg,#fff7ef_0%,#ffffff_28%,#ffffff_100%)] py-24 scroll-mt-16"
    >
      <div className="mx-auto mb-14 max-w-6xl px-6 text-center">
        <p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-orange-500"
          style={{ fontFamily: font }}
        >
          Job Listings
        </p>
        <h2
          className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl"
          style={{ fontFamily: font, letterSpacing: "-0.03em" }}
        >
          Skilled Roles We Are Actively Showcasing
        </h2>
        <p
          className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-500 md:text-lg"
          style={{ fontFamily: font }}
        >
          Siddeley Talent Link is a Melbourne-based career development platform supporting Chinese,
          international student and wider East Asian communities with career planning, resume
          enhancement, skills training and targeted job matching across the Australian market.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex items-center justify-end gap-3">
          <button
            type="button"
            aria-label="Show previous job group"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
            onClick={showPrevious}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            aria-label="Show next job group"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
            onClick={showNext}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {cardGroups[activeGroup].map((job, index) => (
            <div key={`${activeGroup}-${job.title}-${index}`} className="h-full w-full">
              <JobCardItem job={job} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
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
      </div>
    </section>
  );
}
