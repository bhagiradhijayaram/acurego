import { ArrowUpRight, Check, ShieldCheck, Sparkles } from "lucide-react";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";

const TrustSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-28 sm:py-32 lg:py-36"
    >
      <Container>
        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <SectionHeading
          eyebrow="Why AcureGo"
          icon={ShieldCheck}
          title={
            <>
              Built around
              <br />
              <span className="text-[#4B90BD]">people.</span>
            </>
          }
          description="AcureGo is designed to make healthcare access clearer, faster, and more connected — without making people figure out the system on their own."
          action={{
            label: "Discover AcureGo",
            href: "#get-started",
            icon: ArrowUpRight,
          }}
        />

        {/* =====================================================
            TRUST STATEMENT
        ====================================================== */}

        <div className="mt-20 border-y border-[#DDE8DD] sm:mt-24 lg:mt-28">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            {/* LEFT */}

            <div className="border-b border-[#DDE8DD] px-5 py-9 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r lg:px-10 lg:py-14">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center bg-[#123044] text-white">
                  <ShieldCheck size={15} strokeWidth={1.7} />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#647786]">
                  Trust by design
                </span>
              </div>

              <p className="mt-10 max-w-[270px] text-[13px] leading-6 text-[#647786]">
                Every interaction should give people more clarity — not another
                layer of complexity.
              </p>
            </div>

            {/* RIGHT */}

            <div className="px-5 py-10 sm:px-8 sm:py-12 lg:px-14 lg:py-16">
              <p className="max-w-[760px] text-[30px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#123044] sm:text-[40px] lg:text-[48px]">
                The right information.
                <br />
                The right connection.
                <br />
                <span className="text-[#123044]/25">At the right moment.</span>
              </p>

              <div className="mt-10 grid gap-4 border-t border-[#DDE8DD] pt-6 sm:grid-cols-3">
                <TrustPoint text="Clear healthcare discovery" />
                <TrustPoint text="Connected services" />
                <TrustPoint text="Designed for real situations" />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            PRINCIPLES
        ====================================================== */}

        <div className="mt-16 border-y border-[#DDE8DD] sm:mt-20">
          <div className="grid sm:grid-cols-3">
            <Principle
              number="01"
              title="Clarity"
              description="Make the next healthcare decision easier to understand."
            />

            <Principle
              number="02"
              title="Connection"
              description="Bring patients, providers, hospitals and pharmacies closer together."
            />

            <Principle
              number="03"
              title="Confidence"
              description="Create an experience people can rely on when it matters."
            />
          </div>
        </div>

        {/* =====================================================
            FINAL BRAND LINE
        ====================================================== */}

        <div className="mt-14 flex flex-col gap-8 border-b border-[#DDE8DD] pb-9 sm:mt-16 sm:flex-row sm:items-end sm:justify-between lg:mt-20">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles
                size={14}
                strokeWidth={1.7}
                className="text-[#54977F]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#647786]">
                Our belief
              </span>
            </div>

            <p className="mt-5 max-w-[760px] text-[25px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#123044] sm:text-[34px] lg:text-[42px]">
              Healthcare access should be as simple as knowing where to start.
            </p>
          </div>

          <a
            href="#get-started"
            className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-[#123044]"
          >
            <span>Discover AcureGo</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DDE8DD] transition-all duration-200 group-hover:border-[#4B90BD] group-hover:bg-[#4B90BD] group-hover:text-white">
              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
};

/* ============================================================
   TRUST POINT
============================================================ */

const TrustPoint = ({ text }) => {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DDEEE6] text-[#54977F]">
        <Check size={10} strokeWidth={2.5} />
      </span>

      <span className="text-[10px] font-medium leading-5 text-[#647786]">
        {text}
      </span>
    </div>
  );
};

/* ============================================================
   PRINCIPLE
============================================================ */

const Principle = ({ number, title, description }) => {
  return (
    <div className="border-b border-[#DDE8DD] px-5 py-8 last:border-b-0 sm:border-b-0 sm:border-r sm:px-7 sm:py-9 sm:last:border-r-0 lg:px-9 lg:py-10">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold tracking-[0.15em] text-[#4B90BD]">
          {number}
        </span>

        <span className="h-px w-8 bg-[#DDE8DD]" />
      </div>

      <h3 className="mt-12 text-[26px] font-semibold tracking-[-0.045em] text-[#123044] sm:text-[30px]">
        {title}
      </h3>

      <p className="mt-4 max-w-[300px] text-[13px] leading-6 text-[#647786]">
        {description}
      </p>
    </div>
  );
};

export default TrustSection;
