import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

const services = [
  {
    title: "services.recruitment.permanent",
    desc: "services.recruitment.permanentDesc",
  },
  {
    title: "services.recruitment.temporary",
    desc: "services.recruitment.temporaryDesc",
  },
  {
    title: "services.recruitment.volume",
    desc: "services.recruitment.volumeDesc",
  },
  {
    title: "services.recruitment.executive",
    desc: "services.recruitment.executiveDesc",
  },
  {
    title: "services.recruitment.payroll",
    desc: "services.recruitment.payrollDesc",
  },
  {
    title: "services.recruitment.federal",
    desc: "services.recruitment.federalDesc",
  },
  {
    title: "services.recruitment.advertising",
    desc: "services.recruitment.advertisingDesc",
  },
  {
    title: "services.recruitment.immigration",
    desc: "services.recruitment.immigrationDesc",
  },
  { title: "services.outsourcing.rpo", desc: "services.outsourcing.rpoDesc" },
  {
    title: "services.outsourcing.managed",
    desc: "services.outsourcing.managedDesc",
  },
  {
    title: "services.outsourcing.offshoring",
    desc: "services.outsourcing.offshoringDesc",
  },
  {
    title: "services.consultancy.emerging",
    desc: "services.consultancy.emergingDesc",
  },
  {
    title: "services.consultancy.experienced",
    desc: "services.consultancy.experiencedDesc",
  },
  {
    title: "services.consultancy.project",
    desc: "services.consultancy.projectDesc",
  },
  {
    title: "services.consultancy.procurement",
    desc: "services.consultancy.procurementDesc",
  },
  {
    title: "services.talentAdvisory.market",
    desc: "services.talentAdvisory.marketDesc",
  },
] as const;

export default function ServiceCards() {
  const t = useTranslations("header");

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-6 hover:border-orange-400/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <h3
                className="text-sm font-bold text-gray-900 leading-snug"
                style={{ fontFamily: font }}
              >
                {t(s.title)}
              </h3>
              <p
                className="text-sm text-gray-500 leading-relaxed"
                style={{ fontFamily: font }}
              >
                {t(s.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
