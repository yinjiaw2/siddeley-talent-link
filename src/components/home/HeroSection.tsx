"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const t = useTranslations("hero");

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex items-center w-full bg-cover bg-center scroll-mt-16 justify-center"
      style={{ backgroundImage: "url(/building-background.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl px-6 py-24 mx-auto">
        {/* Tag */}
        <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm w-fit">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: "#FB8C00" }}
          />
          <span
            className="text-xs font-semibold tracking-widest uppercase text-white/90"
            style={{ fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif" }}
          >
            {t("tag")}
          </span>
        </div>

        <h1
          className="text-5xl md:text-6xl font-extrabold mb-6"
          style={{
            color: "#FB8C00",
            textShadow: "0 2px 24px rgba(0,0,0,0.25)",
            fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          {t("title")}
        </h1>

        <p
          className="text-xl md:text-2xl font-medium text-white mb-8 drop-shadow-lg"
          style={{
            fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          {t("slogan")}
        </p>

        <Button
          size="lg"
          onClick={scrollToContact}
          className="px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:brightness-110 active:scale-95"
          style={{
            backgroundColor: "#FB8C00",
            color: "#fff",
            fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
          }}
        >
          {t("cta")}
        </Button>
      </div>
    </section>
  );
}
