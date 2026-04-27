"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export type Job = {
  amount: string;
  description: string;
  id: string;
  title: string;
};

type JobCardProps = Job & {
  amountLabel: string;
};

type JobCarouselProps = {
  amountLabel: string;
  jobs: Job[];
};

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

const MIN_LOOP_CYCLES = 6;
const AUTO_SCROLL_PX_PER_SECOND = 36;

function JobCard({
  amount,
  amountLabel,
  description,
  id,
  title,
}: JobCardProps) {
  const router = useRouter();

  const handleClick = () => {
    console.log(`Navigating to job details for job ID: ${id}`);
    router.push(`/job?id=${id}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group relative flex h-full min-h-[25rem] w-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/60 hover:shadow-xl"
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

export function JobCarousel({ amountLabel, jobs }: JobCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  const loopedJobs = useMemo(() => {
    if (jobs.length === 0) return [];

    const copies = Math.max(
      MIN_LOOP_CYCLES,
      Math.ceil((MIN_LOOP_CYCLES * 2) / jobs.length),
    );

    return Array.from({ length: copies }, (_, copyIndex) =>
      jobs.map((job) => ({
        ...job,
        slideKey: `${job.id}-${copyIndex}`,
      })),
    ).flat();
  }, [jobs]);

  useEffect(() => {
    if (!api || isPaused) return;

    const engine = api.internalEngine();
    let animationFrameId = 0;
    let lastTimestamp = 0;

    const step = (timestamp: number) => {
      if (lastTimestamp === 0) {
        lastTimestamp = timestamp;
      }

      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      const distance = (AUTO_SCROLL_PX_PER_SECOND * deltaTime) / 1000;
      const nextLocation = engine.location.get() - distance;

      engine.location.set(nextLocation);
      engine.target.set(nextLocation);
      engine.previousLocation.set(nextLocation);
      engine.scrollLooper.loop(-1);
      engine.slideLooper.loop();
      engine.translate.to(engine.location.get());

      animationFrameId = window.requestAnimationFrame(step);
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [api, isPaused]);

  if (loopedJobs.length === 0) return null;

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        dragFree: true,
        loop: true,
      }}
      className="mt-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <CarouselContent className="-ml-6">
        {loopedJobs.map((job) => (
          <CarouselItem
            key={job.slideKey}
            className="pl-6 md:basis-[22rem] lg:basis-[24rem]"
          >
            <JobCard
              id={job.id}
              title={job.title}
              description={job.description}
              amount={job.amount}
              amountLabel={amountLabel}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default JobCard;
