import { useTranslations } from "next-intl";
import {
  UserCheck,
  Clock,
  Users,
  Crown,
  Banknote,
  Landmark,
  Megaphone,
  Plane,
  RefreshCw,
  Settings,
  Globe,
  Sprout,
  Award,
  FolderKanban,
  ShoppingCart,
  BarChart2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

const services: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: "services.recruitment.permanent",   desc: "services.recruitment.permanentDesc",   icon: UserCheck },
  { title: "services.recruitment.temporary",   desc: "services.recruitment.temporaryDesc",   icon: Clock },
  { title: "services.recruitment.volume",      desc: "services.recruitment.volumeDesc",      icon: Users },
  { title: "services.recruitment.executive",   desc: "services.recruitment.executiveDesc",   icon: Crown },
  { title: "services.recruitment.payroll",     desc: "services.recruitment.payrollDesc",     icon: Banknote },
  { title: "services.recruitment.federal",     desc: "services.recruitment.federalDesc",     icon: Landmark },
  { title: "services.recruitment.advertising", desc: "services.recruitment.advertisingDesc", icon: Megaphone },
  { title: "services.recruitment.immigration", desc: "services.recruitment.immigrationDesc", icon: Plane },
  { title: "services.outsourcing.rpo",         desc: "services.outsourcing.rpoDesc",         icon: RefreshCw },
  { title: "services.outsourcing.managed",     desc: "services.outsourcing.managedDesc",     icon: Settings },
  { title: "services.outsourcing.offshoring",  desc: "services.outsourcing.offshoringDesc",  icon: Globe },
  { title: "services.consultancy.emerging",    desc: "services.consultancy.emergingDesc",    icon: Sprout },
  { title: "services.consultancy.experienced", desc: "services.consultancy.experiencedDesc", icon: Award },
  { title: "services.consultancy.project",     desc: "services.consultancy.projectDesc",     icon: FolderKanban },
  { title: "services.consultancy.procurement", desc: "services.consultancy.procurementDesc", icon: ShoppingCart },
  { title: "services.talentAdvisory.market",   desc: "services.talentAdvisory.marketDesc",   icon: BarChart2 },
];

export default function ServiceCards() {
  const t = useTranslations("serviceCards");
  const headerT = useTranslations("header");

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section intro */}
        <div className="mb-12">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: font, letterSpacing: "-0.02em" }}
          >
            {t("title")}
          </h2>
          <p
            className="text-base text-gray-500 max-w-2xl leading-relaxed"
            style={{ fontFamily: font }}
          >
            {t("description")}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group flex flex-col gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-6 hover:border-orange-400/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon
                  size={24}
                  className="text-orange-400 shrink-0"
                />
                <h3
                  className="text-sm font-bold text-gray-900 leading-snug"
                  style={{ fontFamily: font }}
                >
                  {headerT(s.title as Parameters<typeof headerT>[0])}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed"
                  style={{ fontFamily: font }}
                >
                  {headerT(s.desc as Parameters<typeof headerT>[0])}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
