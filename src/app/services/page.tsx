import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { serviceRoutes } from "@/lib/serviceRoutes";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

export const metadata: Metadata = {
  title: "services page",
  description: "services page of siddeley talent link",
};

export default async function ServicesPage() {
  const t = await getTranslations("header");

  return (
    <main className="bg-[#F2F1EF] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p
            className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FB8C00]"
            style={fontStyle}
          >
            {t("services.promo.title")}
          </p>
          <h1
            className="mt-4 text-4xl font-extrabold text-[#0D1B2A] md:text-6xl"
            style={fontStyle}
          >
            {t("nav.services")}
          </h1>
          <p
            className="mt-6 text-base leading-8 text-gray-600"
            style={fontStyle}
          >
            {t("services.promo.description")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {serviceRoutes.map((route) => (
            <Link
              key={route.key}
              href={route.href}
              className="rounded-[1.75rem] bg-white p-8 shadow-sm transition-transform duration-150 hover:-translate-y-1"
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FB8C00]"
                style={fontStyle}
              >
                {t("nav.services")}
              </p>
              <h2
                className="mt-3 text-3xl font-bold text-[#0D1B2A]"
                style={fontStyle}
              >
                {t(route.titleKey as Parameters<typeof t>[0])}
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {route.items.map((item) => (
                  <span
                    key={item.id}
                    className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-600"
                    style={fontStyle}
                  >
                    {t(item.labelKey as Parameters<typeof t>[0])}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
