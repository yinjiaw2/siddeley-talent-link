export type SupportedLocale = "en" | "zh-CN";

export type HomeJob = {
  id: string;
  slug: string;
  title: string;
  anzsco: string;
  summary: string;
  cardDescription: string;
  location: string;
  category: string;
  workType: string;
  salary: string;
  publishedAt: string;
  intro: string[];
  benefits: string[];
  responsibilities: string[];
  requirements: string[];
  note: string;
  accent: {
    softBg: string;
    softText: string;
    softBorder: string;
    chipBg: string;
    chipText: string;
  };
};

export type HomeJobLabels = {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionDescription: string;
  detailsCta: string;
  browseMore: string;
  heroEyebrow: string;
  summaryTitle: string;
  summaryLabel: string;
  benefitsTitle: string;
  responsibilitiesTitle: string;
  requirementsTitle: string;
  noteTitle: string;
  meta: {
    publishedAt: string;
    location: string;
    category: string;
    workType: string;
    salary: string;
  };
  applyCardTitle: string;
  applyCardDescription: string;
  contactCta: string;
  backToHome: string;
};

const labelsByLocale: Record<SupportedLocale, HomeJobLabels> = {
  en: {
    sectionEyebrow: "Job Listings",
    sectionTitle: "Two Priority Roles Ready For Immediate Review",
    sectionDescription:
      "These homepage roles now lead into full detail pages inspired by Woods & Co's structured job layouts, with a clear summary, benefits, responsibilities and requirements.",
    detailsCta: "Job Details",
    browseMore: "View all jobs",
    heroEyebrow: "Current Opportunity",
    summaryTitle: "Job Summary",
    summaryLabel: "Overview",
    benefitsTitle: "What's in it for you?",
    responsibilitiesTitle: "What will you do?",
    requirementsTitle: "What do you need?",
    noteTitle: "Role Context",
    meta: {
      publishedAt: "Published",
      location: "Location",
      category: "Category",
      workType: "Work type",
      salary: "Salary",
    },
    applyCardTitle: "Ready to discuss this role?",
    applyCardDescription:
      "Share your background with Siddeley Talent Link and we will help match you to the right employer pathway.",
    contactCta: "Contact us",
    backToHome: "Back to home jobs",
  },
  "zh-CN": {
    sectionEyebrow: "岗位机会",
    sectionTitle: "两大重点职位，现已支持查看完整详情",
    sectionDescription:
      "首页这两个职位现在都能直接进入独立详情页，参考 Woods & Co 的职位页结构，补充了职位概述、优势亮点、职责和要求。",
    detailsCta: "查看职位详情",
    browseMore: "查看全部职位",
    heroEyebrow: "当前开放职位",
    summaryTitle: "职位概述",
    summaryLabel: "岗位信息",
    benefitsTitle: "这个岗位能带来什么？",
    responsibilitiesTitle: "你将负责什么？",
    requirementsTitle: "我们希望你具备什么？",
    noteTitle: "岗位说明",
    meta: {
      publishedAt: "发布时间",
      location: "工作地点",
      category: "岗位类别",
      workType: "工作性质",
      salary: "薪资待遇",
    },
    applyCardTitle: "想进一步了解这个岗位？",
    applyCardDescription:
      "把你的背景和求职方向告诉 Siddeley Talent Link，我们会协助你匹配更合适的雇主和申请路径。",
    contactCta: "联系顾问",
    backToHome: "返回首页岗位",
  },
};

const jobsByLocale: Record<SupportedLocale, HomeJob[]> = {
  en: [
    {
      id: "1",
      slug: "diesel-motor-mechanic-heavy-commercial-vehicle",
      title: "Diesel Motor Mechanic (Heavy Commercial Vehicle)",
      anzsco: "321212",
      summary:
        "Support commercial fleets by maintaining, diagnosing and repairing diesel-powered heavy vehicles across workshop and roadworthy compliance requirements.",
      cardDescription:
        "Maintain, test and repair heavy road transport equipment including freight trucks and passenger buses.",
      location: "Melbourne, VIC",
      category: "Trades & Services",
      workType: "Full-time",
      salary: "$88,000 - $105,000 AUD",
      publishedAt: "27 April 2026",
      intro: [
        "This opportunity suits a mechanic who is comfortable working on freight trucks, buses and other heavy commercial vehicles in a fast-moving service environment.",
        "The role is focused on strong diagnostic work, scheduled servicing and dependable repair quality so vehicles can return to the road safely and quickly.",
      ],
      benefits: [
        "Stable full-time workshop pipeline with clear heavy-vehicle specialisation",
        "Hands-on exposure to engine, transmission, steering and braking systems",
        "Opportunity to build roadworthy inspection and compliance experience",
        "Supportive environment for mechanics who want to deepen fault-finding capability",
      ],
      responsibilities: [
        "Diagnose faults across diesel engines, drivetrains, steering and suspension systems",
        "Perform scheduled servicing, tune-ups and preventive maintenance on heavy vehicles",
        "Complete repairs, testing and adjustments to keep vehicles roadworthy and compliant",
        "Document maintenance activity clearly and communicate repair needs to the wider team",
      ],
      requirements: [
        "Experience working on diesel-powered heavy commercial vehicles",
        "Confident mechanical fault-finding and repair skills",
        "Good understanding of workshop safety and roadworthiness expectations",
        "Ability to manage workload efficiently while maintaining repair quality",
      ],
      note:
        "Based on the current VETASSESS-aligned occupation profile for heavy commercial vehicle mechanics.",
      accent: {
        softBg: "#FFF1E8",
        softText: "#C2410C",
        softBorder: "#FDBA74",
        chipBg: "#FFF7ED",
        chipText: "#9A3412",
      },
    },
    {
      id: "2",
      slug: "diesel-motor-mechanic-mobile-plant",
      title: "Diesel Motor Mechanic (Mobile Plant)",
      anzsco: "321212",
      summary:
        "Maintain and rebuild diesel-powered mobile plant equipment used across construction, mining and industrial sites, with a strong focus on reliability and preventive maintenance.",
      cardDescription:
        "Maintain, test and repair mobile plant equipment such as loaders, excavators, graders, cranes and haul trucks.",
      location: "Melbourne, VIC",
      category: "Construction & Mining Support",
      workType: "Full-time",
      salary: "$92,000 - $110,000 AUD",
      publishedAt: "27 April 2026",
      intro: [
        "This role is ideal for a mechanic who enjoys working across varied plant machinery and can shift confidently between mechanical repair, diagnostics and component rebuild work.",
        "You will help keep site-critical equipment available, safe and performance-ready across both scheduled maintenance and breakdown response.",
      ],
      benefits: [
        "Broad exposure to high-value plant and machinery platforms",
        "Technical variety across hydraulic, mechanical and diesel systems",
        "Long-term pathway for mechanics with construction or mining equipment interest",
        "Strong day-to-day ownership of preventive maintenance quality",
      ],
      responsibilities: [
        "Inspect, diagnose and repair diesel engines and mechanical systems on mobile plant equipment",
        "Carry out rebuilds, replacements and testing for major components and assemblies",
        "Support preventive maintenance planning to reduce downtime on active equipment",
        "Record findings accurately and escalate larger repair risks early",
      ],
      requirements: [
        "Practical experience with mobile plant, heavy equipment or related diesel machinery",
        "Confidence working across complex mechanical and electrical fault scenarios",
        "Ability to read service information and follow structured maintenance processes",
        "Proactive approach to safety, reliability and equipment uptime",
      ],
      note:
        "Based on the current VETASSESS-aligned occupation profile for mobile plant mechanics.",
      accent: {
        softBg: "#ECFDF5",
        softText: "#047857",
        softBorder: "#86EFAC",
        chipBg: "#F0FDF4",
        chipText: "#166534",
      },
    },
  ],
  "zh-CN": [
    {
      id: "1",
      slug: "diesel-motor-mechanic-heavy-commercial-vehicle",
      title: "柴油机修工（重型商用车辆）",
      anzsco: "321212",
      summary:
        "负责重型柴油商用车辆的保养、故障诊断与维修，覆盖车间维护、道路安全合规与关键机械系统检修。",
      cardDescription:
        "维护、检测并维修重型道路运输设备，包括货运卡车和客运巴士等商用车辆。",
      location: "墨尔本，维州",
      category: "技术工种与服务",
      workType: "全职",
      salary: "88,000 - 105,000 澳元",
      publishedAt: "2026年4月27日",
      intro: [
        "这个岗位适合熟悉货车、巴士等重型商用车辆的技工，能够在快节奏维修环境中稳定完成检修与维护工作。",
        "工作重点在于高质量故障判断、定期保养和可靠维修，帮助车辆更快、更安全地重新投入运营。",
      ],
      benefits: [
        "稳定的全职车间岗位，明确聚焦重型车辆维修方向",
        "可深入接触发动机、变速箱、转向和制动系统",
        "有机会积累道路安全检测与合规经验",
        "适合希望持续提升故障诊断能力的机械技工",
      ],
      responsibilities: [
        "诊断柴油发动机、传动系统、转向与悬挂相关故障",
        "完成重型车辆的定期保养、调试和预防性维护",
        "执行维修、测试和校准，确保车辆满足上路与合规要求",
        "清晰记录维修情况，并与团队沟通后续修复需求",
      ],
      requirements: [
        "具备重型柴油商用车辆维修经验",
        "拥有扎实的机械故障判断与维修能力",
        "了解车间安全规范和道路合规要求",
        "能够在保证质量的前提下高效处理工作任务",
      ],
      note: "岗位内容参考当前与 VETASSESS 职业描述一致的重型商用车辆机械工方向。",
      accent: {
        softBg: "#FFF1E8",
        softText: "#C2410C",
        softBorder: "#FDBA74",
        chipBg: "#FFF7ED",
        chipText: "#9A3412",
      },
    },
    {
      id: "2",
      slug: "diesel-motor-mechanic-mobile-plant",
      title: "柴油机修工（移动工程设备）",
      anzsco: "321212",
      summary:
        "负责建筑、矿业和工业现场移动设备的柴油动力系统维护与大修，重点保障设备可靠性和预防性维护质量。",
      cardDescription:
        "维护、检测并维修移动工程设备，如装载机、挖掘机、平地机、起重机及矿卡等。",
      location: "墨尔本，维州",
      category: "建筑与矿业支持",
      workType: "全职",
      salary: "92,000 - 110,000 澳元",
      publishedAt: "2026年4月27日",
      intro: [
        "这个岗位适合喜欢接触多种工程机械设备的技工，能够在机械维修、故障排查和总成翻修之间灵活切换。",
        "你将帮助关键现场设备保持可用、安全和高性能状态，既覆盖计划维护，也包括故障响应支持。",
      ],
      benefits: [
        "可接触高价值工程与重型设备平台",
        "在液压、机械和柴油系统方面获得更丰富的技术实践",
        "适合对建筑或矿业设备长期发展有兴趣的机械人才",
        "日常工作中对预防性维护质量有较强自主性",
      ],
      responsibilities: [
        "检查、诊断并维修移动工程设备的柴油发动机和机械系统",
        "完成关键总成和部件的拆装、翻修、更换与测试",
        "支持预防性维护计划，减少现场设备停机时间",
        "准确记录检测结果，并尽早上报较大的维修风险",
      ],
      requirements: [
        "具备移动工程设备、重型设备或相关柴油机械实操经验",
        "能够处理较复杂的机械与电气故障问题",
        "能阅读维修资料并遵循规范化维护流程",
        "重视安全、设备可靠性与现场出勤效率",
      ],
      note: "岗位内容参考当前与 VETASSESS 职业描述一致的移动工程设备机械工方向。",
      accent: {
        softBg: "#ECFDF5",
        softText: "#047857",
        softBorder: "#86EFAC",
        chipBg: "#F0FDF4",
        chipText: "#166534",
      },
    },
  ],
};

export function getHomeJobLabels(locale: string): HomeJobLabels {
  return labelsByLocale[locale === "en" ? "en" : "zh-CN"];
}

export function getHomeJobs(locale: string): HomeJob[] {
  return jobsByLocale[locale === "en" ? "en" : "zh-CN"];
}

export function getHomeJobBySlug(locale: string, slug: string): HomeJob | null {
  return getHomeJobs(locale).find((job) => job.slug === slug) ?? null;
}

export function getHomeJobSlugById(id: string): string | null {
  const englishJob = jobsByLocale.en.find((job) => job.id === id);
  return englishJob?.slug ?? null;
}

export function getAllHomeJobSlugs(): string[] {
  return jobsByLocale.en.map((job) => job.slug);
}
