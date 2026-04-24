import type { Metadata } from "next";
import ServiceCategoryPage from "@/components/services/ServiceCategoryPage";

export const metadata: Metadata = {
  title: "consulting services",
  description: "consulting services at siddeley talent link",
};

export default function ConsultingPage() {
  return <ServiceCategoryPage routeKey="consulting" />;
}
