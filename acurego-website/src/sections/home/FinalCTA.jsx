import { ArrowUpRight, PhoneCall } from "lucide-react";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";

const FinalCTA = () => {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden bg-[#0A101C] text-white"
    >
      <Container>
        {/* Main CTA */}
        <div className="border-t border-white/[0.10] pt-5 mt-20">
          <SectionHeading
            eyebrow="Healthcare, connected"
            title={
              <>
                Healthcare should
                <br />
                be <span className="text-[#4B90BD]">easier to reach.</span>
              </>
            }
            description="AcureGo brings the essential parts of healthcare together, helping people find the right care, connect with providers, and move forward with confidence."
            action={{
              label: "Explore services",
              href: "#services",
              icon: ArrowUpRight,
            }}
            theme="dark"
            eyebrowColor="teal"
          />
        </div>

        {/* Brand statement */}
        <div className="mt-20 overflow-hidden border-y border-white/[0.08] py-7 sm:mt-28 sm:py-9">
          <div className="flex items-center gap-5 sm:gap-8">
            <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.20em] text-white/25">
              One place
            </span>

            <div className="min-w-0 flex-1 overflow-hidden text-center">
              <span className="whitespace-nowrap text-[48px] font-semibold leading-none tracking-[-0.08em] text-white/[0.055] sm:text-[80px] lg:text-[120px]">
                ACUREGO
              </span>
            </div>

            <span className="shrink-0 text-right text-[9px] font-semibold uppercase tracking-[0.20em] text-white/25">
              Every step
            </span>
          </div>
        </div>

        {/* Emergency communication */}
        <div className="flex flex-col gap-5 border-b border-white/[0.08] py-7 sm:flex-row sm:items-center sm:justify-between sm:py-8">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#E5484D]/10 text-[#E5484D]">
              <PhoneCall size={13} strokeWidth={1.8} />
            </span>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/25">
                When it matters most
              </p>

              <p className="mt-1 text-[11px] font-medium text-white/65">
                Emergency support should never feel far away.
              </p>
            </div>
          </div>

          <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#E5484D]">
            Emergency assistance
          </span>
        </div>

        {/* Closing statement */}
        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="max-w-[650px] text-[25px] font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-[34px] lg:text-[42px]">
              One connected healthcare experience.
              <br />
              <span className="text-white/25">
                From finding care to getting there.
              </span>
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#78BB7B]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/30">
              Healthcare, connected
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTA;
