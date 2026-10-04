import { ChevronRight, LayoutGrid } from "lucide-react";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import { healthcareServices } from "../../data/services";

const HealthcareServices = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      <Container>
        {/* Section heading */}
        <SectionHeading
          eyebrow="Healthcare services"
          icon={LayoutGrid}
          title={
            <>
              Everything you need
              <br />
              <span className="text-[#4B90BD]">connected in one place.</span>
            </>
          }
          description="From emergency assistance to everyday healthcare, AcureGo brings essential services together into one simple experience."
          action={{
            label: "Explore services",
            href: "#services",
            icon: ChevronRight,
          }}
        />

        {/* Services */}
        <div className="mt-20 grid gap-px overflow-hidden border border-[#DDE8DD] bg-[#DDE8DD] sm:grid-cols-2 lg:grid-cols-12">
          {healthcareServices.map((service, index) => {
            const Icon = service.icon;
            const isEmergency = service.accent === "emergency";

            return (
              <a
                key={service.id}
                href={service.href}
                className={`
                  group relative min-h-[280px] bg-white p-7
                  transition-colors duration-200
                  hover:bg-[#F7FAFB]
                  sm:p-8
                  ${
                    index === 0
                      ? "lg:col-span-7 lg:min-h-[360px]"
                      : index === 1
                        ? "lg:col-span-5 lg:min-h-[360px]"
                        : "lg:col-span-4"
                  }
                `}
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div
                    className={`
                      flex h-11 w-11 items-center justify-center rounded-full
                      ${
                        isEmergency
                          ? "bg-[#FFF1F1] text-[#E5484D]"
                          : "bg-[#EAF4FB] text-[#4B90BD]"
                      }
                    `}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <span
                    className={`
                      text-[11px] font-semibold tracking-[0.16em]
                      ${isEmergency ? "text-[#E5484D]/50" : "text-[#91A0A8]"}
                    `}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-16 max-w-[440px]">
                  <h3 className="text-[25px] font-semibold leading-tight tracking-[-0.04em] text-[#123044]">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-[410px] text-[14px] leading-6 text-[#647786]">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className={`
                    absolute bottom-7 right-7
                    flex h-10 w-10 items-center justify-center
                    rounded-full border
                    transition-all duration-200
                    ${
                      isEmergency
                        ? "border-[#E5484D]/20 text-[#E5484D]"
                        : "border-[#DDE8DD] text-[#91A0A8] group-hover:border-[#4B90BD] group-hover:bg-[#4B90BD] group-hover:text-white"
                    }
                  `}
                >
                  <ChevronRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </div>

                {/* Emergency label */}
                {isEmergency && (
                  <div className="absolute bottom-8 left-7 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5484D]" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#E5484D]">
                      Available when it matters
                    </span>
                  </div>
                )}
              </a>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#DDE8DD] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#91A0A8]">
            One platform. Multiple healthcare needs.
          </p>

          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#123044]"
          >
            See how AcureGo works
            <ChevronRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HealthcareServices;
