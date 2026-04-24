import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

const defaultLocale = "zh-CN";
const locales = [defaultLocale, "en"] as const;
const localeCookieName = "NEXT_LOCALE";
const homeNamespaces = [
  { namespace: "hero", file: "hero" },
  { namespace: "contact", file: "contact" },
  { namespace: "coreServices", file: "coreServices" },
  { namespace: "faq", file: "faq" },
  { namespace: "homeJobs", file: "home-jobs" },
  { namespace: "numbers", file: "numbers" },
  { namespace: "ourTeam", file: "ourTeam" },
  { namespace: "serviceCards", file: "serviceCards" },
  { namespace: "serviceProcess", file: "serviceProcess" },
  { namespace: "successCases", file: "successCases" },
] as const;
const sharedNamespaces = ["header", "footer"] as const;
const aboutNamespaces = ["about"] as const;

async function loadMessageGroup(
  locale: (typeof locales)[number],
  group: string,
  namespaces:
    | readonly string[]
    | readonly { namespace: string; file: string }[],
) {
  const entries = await Promise.all(
    namespaces.map(async (entry) => {
      const namespace = typeof entry === "string" ? entry : entry.namespace;
      const file = typeof entry === "string" ? entry : entry.file;

      return [
        namespace,
        (await import(`../../messages/${locale}/${group}/${file}.json`))
          .default,
      ];
    }),
  );

  return Object.fromEntries(entries);
}

function isSupportedLocale(locale: string): locale is (typeof locales)[number] {
  return locales.includes(locale as (typeof locales)[number]);
}

function getLocaleFromAcceptLanguage(
  headerValue: string | null,
): (typeof locales)[number] | null {
  if (!headerValue) return null;

  const preferredLocales = headerValue
    .split(",")
    .map((part) => {
      const [localePart, qPart] = part.trim().split(";q=");
      const normalizedLocale = localePart.trim().toLowerCase();
      const quality = qPart ? Number(qPart) : 1;

      return {
        locale: normalizedLocale,
        quality: Number.isNaN(quality) ? 0 : quality,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { locale } of preferredLocales) {
    if (locale.startsWith("zh")) return "zh-CN";
    if (locale.startsWith("en")) return "en";
  }

  return null;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const cookieLocale = (await cookies()).get(localeCookieName)?.value;
  const acceptLanguage = (await headers()).get("accept-language");
  const browserLocale = getLocaleFromAcceptLanguage(acceptLanguage);
  const locale =
    requested && isSupportedLocale(requested)
      ? requested
      : cookieLocale && isSupportedLocale(cookieLocale)
        ? cookieLocale
        : (browserLocale ?? defaultLocale);
  const [sharedMessages, homeMessages, aboutMessages] = await Promise.all([
    loadMessageGroup(locale, "shared", sharedNamespaces),
    loadMessageGroup(locale, "home", homeNamespaces),
    loadMessageGroup(locale, "about", aboutNamespaces),
  ]);

  const messages = {
    ...sharedMessages,
    ...homeMessages,
    ...aboutMessages,
  };

  return {
    locale,
    messages,
  };
});
