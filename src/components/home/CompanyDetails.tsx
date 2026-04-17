"use client";

import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";
const OFFICE_POSITION = { lat: -37.82243837398955, lng: 144.95363742552018 };
const paragraphKeys = ["0", "1", "2"] as const;

export default function CompanyDetails() {
  const intro = useTranslations("about.intro");
  const map = useTranslations("about.map");

  return (
    <section
      className="w-full py-20 px-6"
      style={{ backgroundColor: "#F2F1EF" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — company intro */}
        <div>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-300 bg-white mb-6">
            <span
              className="text-xs font-semibold tracking-widest uppercase text-gray-500"
              style={{ fontFamily: font }}
            >
              {intro("label")}
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight"
            style={{ fontFamily: font, letterSpacing: "-0.03em" }}
          >
            {intro("title")}
          </h2>

          <div className="flex flex-col gap-5 mb-8">
            {paragraphKeys.map((key) => (
              <p
                key={key}
                className="text-base text-gray-700 leading-relaxed"
                style={{ fontFamily: font }}
              >
                {intro(`paragraphs.${key}`)}
              </p>
            ))}
          </div>

          <p className="text-sm text-gray-500" style={{ fontFamily: font }}>
            📍 {map("address")}
          </p>
        </div>

        {/* Right — map */}
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-md">
          <Map
            defaultCenter={OFFICE_POSITION}
            defaultZoom={8}
            mapId="e04d3dc23484cd2b24cff6b2"
            style={{ width: "100%", height: "100%" }}
          >
            <AdvancedMarker position={OFFICE_POSITION} title={map("address")} />
          </Map>
        </div>
      </div>
    </section>
  );
}
