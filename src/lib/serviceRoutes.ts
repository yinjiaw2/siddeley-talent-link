export type ServiceRouteKey =
  | "consulting"
  | "outsourcing"
  | "recruit"
  | "talent";

type ServiceItem = {
  id: string;
  labelKey: string;
  descriptionKey: string;
};

export type ServiceRoute = {
  key: ServiceRouteKey;
  href: string;
  titleKey: string;
  sectionKey: string;
  items: ServiceItem[];
};

export const serviceRoutes: ServiceRoute[] = [
  {
    key: "consulting",
    href: "/services/consulting",
    titleKey: "services.consultancy.title",
    sectionKey: "services.consultancy",
    items: [
      {
        id: "emerging",
        labelKey: "services.consultancy.emerging",
        descriptionKey: "services.consultancy.emergingDesc",
      },
      {
        id: "experienced",
        labelKey: "services.consultancy.experienced",
        descriptionKey: "services.consultancy.experiencedDesc",
      },
      {
        id: "project",
        labelKey: "services.consultancy.project",
        descriptionKey: "services.consultancy.projectDesc",
      },
      {
        id: "procurement",
        labelKey: "services.consultancy.procurement",
        descriptionKey: "services.consultancy.procurementDesc",
      },
    ],
  },
  {
    key: "outsourcing",
    href: "/services/outsourcing",
    titleKey: "services.outsourcing.title",
    sectionKey: "services.outsourcing",
    items: [
      {
        id: "rpo",
        labelKey: "services.outsourcing.rpo",
        descriptionKey: "services.outsourcing.rpoDesc",
      },
      {
        id: "managed",
        labelKey: "services.outsourcing.managed",
        descriptionKey: "services.outsourcing.managedDesc",
      },
      {
        id: "offshoring",
        labelKey: "services.outsourcing.offshoring",
        descriptionKey: "services.outsourcing.offshoringDesc",
      },
    ],
  },
  {
    key: "recruit",
    href: "/services/recruit",
    titleKey: "services.recruitment.title",
    sectionKey: "services.recruitment",
    items: [
      {
        id: "permanent",
        labelKey: "services.recruitment.permanent",
        descriptionKey: "services.recruitment.permanentDesc",
      },
      {
        id: "temporary",
        labelKey: "services.recruitment.temporary",
        descriptionKey: "services.recruitment.temporaryDesc",
      },
      {
        id: "volume",
        labelKey: "services.recruitment.volume",
        descriptionKey: "services.recruitment.volumeDesc",
      },
      {
        id: "executive",
        labelKey: "services.recruitment.executive",
        descriptionKey: "services.recruitment.executiveDesc",
      },
      {
        id: "payroll",
        labelKey: "services.recruitment.payroll",
        descriptionKey: "services.recruitment.payrollDesc",
      },
      {
        id: "federal",
        labelKey: "services.recruitment.federal",
        descriptionKey: "services.recruitment.federalDesc",
      },
      {
        id: "advertising",
        labelKey: "services.recruitment.advertising",
        descriptionKey: "services.recruitment.advertisingDesc",
      },
      {
        id: "immigration",
        labelKey: "services.recruitment.immigration",
        descriptionKey: "services.recruitment.immigrationDesc",
      },
    ],
  },
  {
    key: "talent",
    href: "/services/talent",
    titleKey: "services.talentAdvisory.title",
    sectionKey: "services.talentAdvisory",
    items: [
      {
        id: "market",
        labelKey: "services.talentAdvisory.market",
        descriptionKey: "services.talentAdvisory.marketDesc",
      },
      {
        id: "development",
        labelKey: "services.talentAdvisory.development",
        descriptionKey: "services.talentAdvisory.developmentDesc",
      },
    ],
  },
];

export function getServiceRoute(key: ServiceRouteKey) {
  return serviceRoutes.find((route) => route.key === key);
}
