"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

type JobCardProps = {
  amount: string;
  amountLabel: string;
  description: string;
  id: string;
  title: string;
};

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

export default function JobCard({
  amount,
  amountLabel,
  description,
  id,
  title,
}: JobCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/job?id=${id}`);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="group relative flex h-100 w-80 flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/60 hover:shadow-xl"
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#FB8C00] to-orange-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-col gap-4">
        <h3
          className="line-clamp-3 text-2xl font-extrabold leading-tight text-[#0D1B2A] transition-colors duration-200 group-hover:text-[#FB8C00]"
          style={fontStyle}
        >
          {title}
        </h3>
        <p
          className="line-clamp-6 text-base leading-relaxed text-gray-500"
          style={fontStyle}
        >
          {description}
        </p>
      </div>

      <div className="mt-6 flex items-end justify-between border-t border-gray-100 pt-6">
        <div>
          <p
            className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-400"
            style={fontStyle}
          >
            {amountLabel}
          </p>
          <p
            className="text-xl font-extrabold text-[#0D1B2A]"
            style={fontStyle}
          >
            {amount}
          </p>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#FB8C00] transition-colors group-hover:bg-[#FB8C00] group-hover:text-white">
          <ArrowRight size={20} />
        </div>
      </div>
    </button>
  );
}
