import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getServiceRoute, type ServiceRouteKey } from "@/lib/serviceRoutes";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

type ServiceCategoryPageProps = {
  routeKey: ServiceRouteKey;
};

export default async function ServiceCategoryPage({
  routeKey,
}: ServiceCategoryPageProps) {
  const t = await getTranslations("header");
  const route = getServiceRoute(routeKey);

  if (!route) {
    return null;
  }

  return (
    <main className="bg-[#F2F1EF]">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#0D1B2A] px-8 py-16 text-white md:px-12">
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#FB8C00]"
            style={fontStyle}
          >
            {t("services.promo.title")}
          </p>
          <h1
            className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl"
            style={fontStyle}
          >
            {t(route.titleKey as Parameters<typeof t>[0])}
          </h1>
          <p
            className="mt-6 max-w-2xl text-base leading-8 text-gray-300"
            style={fontStyle}
          >
            {t("services.promo.description")}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {route.items.map((item) => (
              <Link
                key={item.id}
                href={`${route.href}#${item.id}`}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-gray-200 transition-colors duration-150 hover:border-[#FB8C00] hover:text-white"
                style={fontStyle}
              >
                {t(item.labelKey as Parameters<typeof t>[0])}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {route.items.map((item) => (
              <article
                id={item.id}
                key={item.id}
                className="rounded-[1.5rem] border border-black/5 bg-white p-8 shadow-sm"
              >
                <p
                  className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#FB8C00]"
                  style={fontStyle}
                >
                  {t(route.titleKey as Parameters<typeof t>[0])}
                </p>
                <h2
                  className="text-2xl font-bold text-[#0D1B2A]"
                  style={fontStyle}
                >
                  {t(item.labelKey as Parameters<typeof t>[0])}
                </h2>
                <p
                  className="mt-4 text-base leading-8 text-gray-600"
                  style={fontStyle}
                >
                  {t(item.descriptionKey as Parameters<typeof t>[0])}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] bg-[#FB8C00] px-8 py-10 text-[#0D1B2A]">
            <h2 className="text-2xl font-bold" style={fontStyle}>
              {t("services.promo.cta")}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-8" style={fontStyle}>
              {t("services.promo.description")}
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex rounded-full bg-[#0D1B2A] px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-black"
              style={fontStyle}
            >
              {t("nav.services")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
