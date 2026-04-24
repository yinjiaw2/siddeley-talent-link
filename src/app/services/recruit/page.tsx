import type { Metadata } from "next";
import ServiceCategoryPage from "@/components/services/ServiceCategoryPage";

export const metadata: Metadata = {
  title: "recruitment services",
  description: "recruitment services at siddeley talent link",
};

export default function RecruitPage() {
  return <ServiceCategoryPage routeKey="recruit" />;
}
