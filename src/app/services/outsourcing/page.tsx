import type { Metadata } from "next";
import ServiceCategoryPage from "@/components/services/ServiceCategoryPage";

export const metadata: Metadata = {
  title: "outsourcing services",
  description: "outsourcing services at siddeley talent link",
};

export default function OutsourcingPage() {
  return <ServiceCategoryPage routeKey="outsourcing" />;
}
