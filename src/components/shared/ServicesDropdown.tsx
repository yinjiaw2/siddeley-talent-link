"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { serviceRoutes } from "@/lib/serviceRoutes";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

export default function ServicesDropdown() {
  const t = useTranslations("header");
  const columns = serviceRoutes.map((route) => ({
    title: t(route.titleKey as Parameters<typeof t>[0]),
    href: route.href,
    items: route.items.map((item) => ({
      label: t(item.labelKey as Parameters<typeof t>[0]),
      href: `${route.href}#${item.id}`,
    })),
  }));

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 rounded-md transition-colors duration-150 hover:text-white hover:bg-white/10 outline-none"
          style={fontStyle}
        >
          {t("nav.services")}
          <ChevronDown
            size={14}
            className="transition-transform duration-200 data-[state=open]:rotate-180"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-screen max-w-none rounded-none border-x-0 border-white/10 px-6 py-8 shadow-2xl md:px-10"
        style={{ backgroundColor: "#0D1B2A" }}
        align="center"
        sideOffset={12}
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* Left promo panel */}
          <div className="flex flex-col justify-between border-b border-white/10 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <div className="flex flex-col gap-4">
              <span
                className="text-base font-bold text-[#FB8C00]"
                style={fontStyle}
              >
                {t("services.promo.title")}
              </span>
              <p
                className="text-sm text-gray-300 leading-relaxed"
                style={fontStyle}
              >
                {t("services.promo.description")}
              </p>
              <Link
                href="/services"
                className="inline-flex w-fit text-sm font-semibold text-white transition-colors duration-150 hover:text-[#FB8C00]"
                style={fontStyle}
              >
                {t("services.promo.cta")}
              </Link>
            </div>
          </div>

          {/* Right — service columns */}
          <div className="grid grid-cols-2 gap-8 xl:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <Link
                  href={col.href}
                  className="text-sm font-bold text-white transition-colors duration-150 hover:text-[#FB8C00]"
                  style={fontStyle}
                >
                  {col.title}
                </Link>
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
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
