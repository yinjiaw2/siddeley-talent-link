import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import enAbout from "../../messages/en/about/about.json";
import enContact from "../../messages/en/home/contact.json";
import enCoreServices from "../../messages/en/home/coreServices.json";
import enFaq from "../../messages/en/home/faq.json";
import enHero from "../../messages/en/home/hero.json";
import enHomeJobs from "../../messages/en/home/home-jobs.json";
import enJobContent from "../../messages/en/job/jobs.json";
import enJobDetails from "../../messages/en/job/job-details.json";
import enNumbers from "../../messages/en/home/numbers.json";
import enOurTeam from "../../messages/en/home/ourTeam.json";
import enServiceCards from "../../messages/en/home/serviceCards.json";
import enServiceProcess from "../../messages/en/home/serviceProcess.json";
import enSuccessCases from "../../messages/en/home/successCases.json";
import enRecruitJobs from "../../messages/en/services/recruit/jobs.json";
import enFooter from "../../messages/en/shared/footer.json";
import enHeader from "../../messages/en/shared/header.json";
import zhAbout from "../../messages/zh-CN/about/about.json";
import zhContact from "../../messages/zh-CN/home/contact.json";
import zhCoreServices from "../../messages/zh-CN/home/coreServices.json";
import zhFaq from "../../messages/zh-CN/home/faq.json";
import zhHero from "../../messages/zh-CN/home/hero.json";
import zhHomeJobs from "../../messages/zh-CN/home/home-jobs.json";
import zhJobContent from "../../messages/zh-CN/job/jobs.json";
import zhJobDetails from "../../messages/zh-CN/job/job-details.json";
import zhNumbers from "../../messages/zh-CN/home/numbers.json";
import zhOurTeam from "../../messages/zh-CN/home/ourTeam.json";
import zhServiceCards from "../../messages/zh-CN/home/serviceCards.json";
import zhServiceProcess from "../../messages/zh-CN/home/serviceProcess.json";
import zhSuccessCases from "../../messages/zh-CN/home/successCases.json";
import zhRecruitJobs from "../../messages/zh-CN/services/recruit/jobs.json";
import zhFooter from "../../messages/zh-CN/shared/footer.json";
import zhHeader from "../../messages/zh-CN/shared/header.json";

const defaultLocale = "zh-CN";
const locales = [defaultLocale, "en"] as const;
const localeCookieName = "NEXT_LOCALE";
const messagesByLocale = {
  en: {
    about: enAbout,
    contact: enContact,
    coreServices: enCoreServices,
    faq: enFaq,
    footer: enFooter,
    header: enHeader,
    hero: enHero,
    homeJobs: enHomeJobs,
    jobContent: enJobContent,
    jobDetails: enJobDetails,
    numbers: enNumbers,
    ourTeam: enOurTeam,
    recruitJobs: enRecruitJobs,
    serviceCards: enServiceCards,
    serviceProcess: enServiceProcess,
    successCases: enSuccessCases,
  },
  "zh-CN": {
    about: zhAbout,
    contact: zhContact,
    coreServices: zhCoreServices,
    faq: zhFaq,
    footer: zhFooter,
    header: zhHeader,
    hero: zhHero,
    homeJobs: zhHomeJobs,
    jobContent: zhJobContent,
    jobDetails: zhJobDetails,
    numbers: zhNumbers,
    ourTeam: zhOurTeam,
    recruitJobs: zhRecruitJobs,
    serviceCards: zhServiceCards,
    serviceProcess: zhServiceProcess,
    successCases: zhSuccessCases,
  },
} as const;

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

  return {
    locale,
    messages: messagesByLocale[locale],
  };
});
