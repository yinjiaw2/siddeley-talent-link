"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const fontStyle = { fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif" };

export default function ServicesDropdown() {
  const t = useTranslations("header");

  const columns = [
    {
      title: t("services.recruitment.title"),
      items: [
        { label: t("services.recruitment.permanent"), href: "/#core-services" },
        { label: t("services.recruitment.temporary"), href: "/#core-services" },
        { label: t("services.recruitment.volume"), href: "/#core-services" },
        { label: t("services.recruitment.executive"), href: "/#core-services" },
        { label: t("services.recruitment.payroll"), href: "/#core-services" },
        { label: t("services.recruitment.federal"), href: "/#core-services" },
        { label: t("services.recruitment.advertising"), href: "/#core-services" },
        { label: t("services.recruitment.immigration"), href: "/#core-services" },
      ],
    },
    {
      title: t("services.outsourcing.title"),
      items: [
        { label: t("services.outsourcing.rpo"), href: "/#core-services" },
        { label: t("services.outsourcing.managed"), href: "/#core-services" },
        { label: t("services.outsourcing.offshoring"), href: "/#core-services" },
      ],
    },
    {
      title: t("services.consultancy.title"),
      items: [
        { label: t("services.consultancy.emerging"), href: "/#core-services" },
        { label: t("services.consultancy.experienced"), href: "/#core-services" },
        { label: t("services.consultancy.project"), href: "/#core-services" },
        { label: t("services.consultancy.procurement"), href: "/#core-services" },
      ],
    },
    {
      title: t("services.talentAdvisory.title"),
      items: [
        { label: t("services.talentAdvisory.market"), href: "/#core-services" },
        { label: t("services.talentAdvisory.development"), href: "/#core-services" },
      ],
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 rounded-md transition-colors duration-150 hover:text-white hover:bg-white/10 outline-none"
          style={fontStyle}
        >
          {t("nav.services")}
          <ChevronDown size={14} className="transition-transform duration-200 data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="!w-auto min-w-[680px] p-6 rounded-xl border border-white/10 shadow-2xl"
        style={{ backgroundColor: "#0D1B2A" }}
        align="start"
        sideOffset={8}
      >
        <div className="grid grid-cols-4 gap-8">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span
                className="text-sm font-bold text-white"
                style={fontStyle}
              >
                {col.title}
              </span>
              <div className="flex flex-col gap-2">
                {col.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150 leading-snug"
                    style={fontStyle}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
