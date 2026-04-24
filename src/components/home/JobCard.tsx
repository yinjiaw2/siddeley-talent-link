"use client";

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
  const handleClick = () => {
    console.log("job card clicked", { id, title });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex min-h-[26rem] w-full flex-col rounded-[1.75rem] border border-black/5 bg-[#F2F1EF] p-8 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FB8C00]"
          style={fontStyle}
        >
          {id}
        </span>
        <div className="text-right">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500"
            style={fontStyle}
          >
            {amountLabel}
          </p>
          <p
            className="mt-1 text-lg font-bold text-[#0D1B2A]"
            style={fontStyle}
          >
            {amount}
          </p>
        </div>
      </div>

      <h3
        className="mt-8 text-2xl font-bold text-[#0D1B2A]"
        style={fontStyle}
      >
        {title}
      </h3>
      <p
        className="mt-4 flex-1 text-base leading-8 text-gray-600"
        style={fontStyle}
      >
        {description}
      </p>
    </button>
  );
}
