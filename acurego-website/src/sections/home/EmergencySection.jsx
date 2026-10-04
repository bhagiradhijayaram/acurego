import {
  Ambulance,
  ArrowUpRight,
  Building2,
  Check,
  ChevronRight,
  MapPin,
  ShieldCheck,
  Siren,
} from "lucide-react";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";

const EmergencySection = () => {
  return (
    <section
      id="emergency"
      className="relative overflow-hidden bg-[#0A101C] py-28 sm:py-32 lg:py-40"
    >
      <Container>
        {/* =====================================================
            INTRO
        ===================================================== */}

        <SectionHeading
          eyebrow="Emergency response"
          icon={Siren}
          eyebrowColor="emergency"
          title={
            <>
              When it matters most
              <br />
              <span className="text-[#4B90BD]">help should move.</span>
            </>
          }
          description="AcureGo brings emergency assistance, ambulance availability, and nearby hospitals into one connected experience."
          action={{
            label: "See how it works",
            href: "#how-it-works",
            icon: ChevronRight,
          }}
          theme="dark"
          className="[&>div:first-child>div:first-child>span:last-child]:text-red-300 [&>div:first-child>h2]:text-white"
        />

        {/* =====================================================
            EMERGENCY INTERFACE
        ===================================================== */}

        <div className="mt-20 border-y border-white/[0.10] lg:mt-24">
          {/* Interface header */}
          <div className="flex flex-col gap-4 border-b border-white/[0.08] py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E5484D]/30 bg-[#E5484D]/10">
                <Siren size={13} strokeWidth={1.8} className="text-[#E5484D]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                Emergency assistance
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#78BB7B]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#78BB7B]">
                Network available
              </span>
            </div>
          </div>

          {/* Main interface */}
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Request side */}
            <div className="border-b border-white/[0.08] py-10 sm:py-12 lg:border-b-0 lg:border-r lg:pr-14 lg:py-14">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30">
                Your request
              </span>

              <h3 className="mt-5 max-w-[520px] text-[34px] font-semibold leading-[1] tracking-[-0.045em] text-white sm:text-[42px]">
                Get the right help,
                <br />
                without the guesswork.
              </h3>

              <p className="mt-5 max-w-[460px] text-[14px] leading-7 text-white/45 sm:text-[15px]">
                One emergency request can connect you with available assistance,
                nearby ambulances, and hospitals around you.
              </p>

              {/* Location */}
              <div className="mt-10 flex max-w-[480px] items-center justify-between border-y border-white/[0.08] py-5">
                <div className="flex items-center gap-4">
                  <MapPin
                    size={18}
                    strokeWidth={1.7}
                    className="text-[#E5484D]"
                  />

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">
                      Current location
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      Location detected
                    </p>
                  </div>
                </div>

                <Check size={16} strokeWidth={2} className="text-[#78BB7B]" />
              </div>

              {/* CTA */}
              <button
                type="button"
                className="
                  group
                  mt-7
                  inline-flex
                  w-full
                  max-w-[480px]
                  items-center
                  justify-between
                  bg-[#E5484D]
                  px-5
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  duration-200
                  hover:bg-[#D93E44]
                rounded-md
                "
              >
                <span>Request emergency help</span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>

            {/* Network side */}
            <div className="py-10 sm:py-12 lg:pl-14 lg:py-14">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30">
                  AcureGo network
                </span>

                <ShieldCheck
                  size={17}
                  strokeWidth={1.7}
                  className="text-[#78BB7B]"
                />
              </div>

              <h3 className="mt-5 max-w-[460px] text-[34px] font-semibold leading-[1] tracking-[-0.045em] text-white sm:text-[42px]">
                One request.
                <br />
                <span className="text-white/35">Multiple connections.</span>
              </h3>

              <p className="mt-5 max-w-[430px] text-[14px] leading-7 text-white/45 sm:text-[15px]">
                AcureGo coordinates the healthcare resources needed to move your
                request toward the right care.
              </p>

              {/* Connections */}
              <div className="mt-10">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center border-t border-white/[0.08] py-5">
                  <div className="flex items-center gap-4">
                    <Ambulance
                      size={19}
                      strokeWidth={1.7}
                      className="text-[#4B90BD]"
                    />

                    <div>
                      <p className="text-sm font-medium text-white">
                        Ambulance
                      </p>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/30">
                        Emergency transport
                      </p>
                    </div>
                  </div>

                  <span className="px-4 text-white/20">→</span>

                  <span className="text-right text-[10px] font-semibold uppercase tracking-[0.14em] text-[#78BB7B]">
                    Available
                  </span>
                </div>

                <div className="grid grid-cols-[1fr_auto_1fr] items-center border-y border-white/[0.08] py-5">
                  <div className="flex items-center gap-4">
                    <Building2
                      size={19}
                      strokeWidth={1.7}
                      className="text-[#4B90BD]"
                    />

                    <div>
                      <p className="text-sm font-medium text-white">Hospital</p>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/30">
                        Nearby care
                      </p>
                    </div>
                  </div>

                  <span className="px-4 text-white/20">→</span>

                  <span className="text-right text-[10px] font-semibold uppercase tracking-[0.14em] text-[#78BB7B]">
                    Connected
                  </span>
                </div>
              </div>

              {/* Network status */}
              <div className="mt-7 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#78BB7B]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  Healthcare network ready
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div className="mt-10 flex flex-col gap-5 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[560px] text-[13px] leading-6 text-white/35">
            Built around one simple idea:{" "}
            <span className="text-white/60">
              getting healthcare help shouldn't require knowing which number to
              call first.
            </span>
          </p>

          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
            <span className="h-1.5 w-1.5 rounded-full bg-[#78BB7B]" />
            Connected healthcare network
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EmergencySection;
