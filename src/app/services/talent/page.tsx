import type { Metadata } from "next";
import ServiceCategoryPage from "@/components/services/ServiceCategoryPage";

export const metadata: Metadata = {
  title: "talent advisory services",
  description: "talent advisory services at siddeley talent link",
};

export default function TalentPage() {
  return <ServiceCategoryPage routeKey="talent" />;
}
