import {
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  MapPin,
  Search,
  ShieldCheck,
  Siren,
  Smartphone,
  Stethoscope,
} from "lucide-react";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";

const AppPreview = () => {
  return (
    <section
      id="app"
      className="relative overflow-hidden bg-white pb-24 sm:pb-32 lg:pb-40"
    >
      <Container>
        {/* =====================================================
            TOP META
        ====================================================== */}

        <SectionHeading
          eyebrow="AcureGo app"
          icon={Smartphone}
          title={
            <>
              Care
              <br />
              <span className="text-[#4B90BD]">connected.</span>
            </>
          }
          description="Discover a simpler way to access healthcare — find doctors, hospitals, appointments, medicines, and essential support from one connected experience."
          action={{
            label: "Explore the app",
            href: "#app",
            icon: ArrowUpRight,
          }}
        />

        {/* =====================================================
            PRODUCT ARTWORK
        ====================================================== */}

        <div className="relative mt-20 sm:mt-24 lg:mt-28">
          {/* Giant background word */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap lg:block"
          >
            <span className="text-[24vw] font-semibold leading-none tracking-[-0.12em] text-[#123044]/[0.025]">
              CARE
            </span>
          </div>

          {/* Main artwork frame */}

          <div className="relative min-h-[680px] overflow-hidden border-y border-[#123044]/10 bg-[#EAF4FB] sm:min-h-[760px] lg:min-h-[820px]">
            {/* Fine grid lines */}

            <div className="absolute bottom-0 left-[12%] top-0 w-px bg-[#123044]/[0.055]" />

            <div className="absolute bottom-0 right-[12%] top-0 w-px bg-[#123044]/[0.055]" />

            <div className="absolute left-0 right-0 top-[18%] h-px bg-[#123044]/[0.055]" />

            <div className="absolute bottom-[18%] left-0 right-0 h-px bg-[#123044]/[0.055]" />

            {/* Top-left product label */}

            <div className="absolute left-5 top-6 z-20 sm:left-8 sm:top-8 lg:left-10">
              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#123044]/30">
                Designed for everyday care
              </p>

              <p className="mt-2 text-[11px] font-medium text-[#123044]/60">
                One simple starting point.
              </p>
            </div>

            {/* Top-right version */}

            <div className="absolute right-5 top-6 z-20 sm:right-8 sm:top-8 lg:right-10">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#123044]/25">
                01 — Home
              </span>
            </div>

            {/* =================================================
                PHONE
            ================================================== */}

            <div className="absolute left-1/2 top-[53%] z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                {/* Ground shadow */}

                <div className="absolute bottom-[-30px] left-1/2 h-[50px] w-[230px] -translate-x-1/2 rounded-full bg-[#123044]/10 blur-2xl" />

                {/* Phone */}

                <div className="relative w-[278px] rounded-[43px] border-[7px] border-[#123044] bg-[#123044] p-[5px] shadow-[0_45px_90px_rgba(18,48,68,0.24)] sm:w-[320px] lg:w-[350px]">
                  {/* Side button */}

                  <div className="absolute -right-[9px] top-[125px] h-[52px] w-[3px] rounded-r-full bg-[#123044]" />

                  {/* Screen */}

                  <div className="relative overflow-hidden rounded-[32px]">
                    {/* Dynamic island */}

                    <div className="absolute left-1/2 top-2 z-30 h-[24px] w-[88px] -translate-x-1/2 rounded-full bg-[#123044]" />

                    <AcureGoApp />
                  </div>
                </div>

                {/* Left product annotation */}

                <div className="absolute -left-[185px] top-[30%] hidden w-[150px] lg:block">
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-[#123044]/15" />

                    <span className="h-1.5 w-1.5 rounded-full bg-[#54977F]" />
                  </div>

                  <p className="mt-3 text-right text-[8px] font-semibold uppercase tracking-[0.18em] text-[#123044]/30">
                    Everything starts here
                  </p>
                </div>

                {/* Right product annotation */}

                <div className="absolute -right-[190px] bottom-[25%] hidden w-[160px] lg:block">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#54977F]" />

                    <div className="h-px flex-1 bg-[#123044]/15" />
                  </div>

                  <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#123044]/30">
                    Find care around you
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom-left */}

            <div className="absolute bottom-6 left-5 z-20 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#123044]/25">
                AcureGo
              </span>

              <p className="mt-2 text-[12px] font-medium tracking-[-0.02em] text-[#123044]/60">
                Healthcare, simplified.
              </p>
            </div>

            {/* Bottom-right */}

            <div className="absolute bottom-6 right-5 z-20 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#123044]/25">
                01 / 04
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            BELOW ARTWORK
        ====================================================== */}

        <div className="grid border-b border-[#123044]/10 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="py-8 sm:py-10">
            <p className="max-w-[600px] text-[21px] font-medium leading-[1.08] tracking-[-0.045em] text-[#123044] sm:text-[28px]">
              Find care.
              <span className="text-[#123044]/25"> Make decisions.</span>
              <br />
              Stay connected.
            </p>
          </div>

          <div className="border-t border-[#123044]/10 py-6 sm:border-l sm:border-t-0 sm:px-8 sm:py-10">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123044] text-white">
                <ArrowUpRight size={13} />
              </span>

              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#123044]/30">
                  AcureGo
                </p>

                <p className="mt-1 text-[11px] font-medium text-[#123044]/65">
                  One app. Every step of care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ============================================================
   MOBILE APP UI
   KEEPING THE STRONG UI
============================================================ */

const AcureGoApp = () => {
  return (
    <div className="bg-[#F7FAFB] text-[#123044]">
      {/* Status */}

      <div className="flex items-center justify-between px-5 pb-2 pt-5 text-[8px] font-semibold">
        <span>9:41</span>

        <div className="flex items-center gap-1.5">
          <span className="h-2 w-3 rounded-[2px] border border-[#123044]/50" />

          <span className="h-2 w-2 rounded-full bg-[#123044]" />
        </div>
      </div>

      {/* Header */}

      <div className="px-5 pb-5 pt-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-[#123044]/35">
              Good morning
            </p>

            <h3 className="mt-2 text-[21px] font-semibold leading-none tracking-[-0.065em]">
              How can we help?
            </h3>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#123044]">
            <span className="text-[9px] font-semibold text-white">A</span>
          </div>
        </div>
      </div>

      {/* Search */}

      <div className="mx-5 flex items-center gap-3 border border-[#123044]/10 bg-white px-3.5 py-3.5">
        <Search size={13} className="text-[#123044]/35" />

        <span className="text-[8px] text-[#123044]/35">Search healthcare</span>
      </div>

      {/* Emergency */}

      <div className="mx-5 mt-4 bg-[#123044]">
        <div className="flex items-center justify-between px-4 py-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E5484D]" />

              <span className="text-[7px] font-semibold uppercase tracking-[0.16em] text-[#FF8588]">
                Emergency
              </span>
            </div>

            <p className="mt-2 text-[14px] font-semibold tracking-[-0.035em] text-white">
              Need urgent help?
            </p>
          </div>

          <div className="flex h-8 w-8 items-center justify-center border border-white/10">
            <ArrowUpRight size={14} className="text-white" />
          </div>
        </div>
      </div>

      {/* Location */}

      <div className="mx-5 mt-5 flex items-center justify-between border-b border-[#123044]/10 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center bg-[#DDEEE6]">
            <MapPin size={12} className="text-[#54977F]" />
          </div>

          <div>
            <p className="text-[7px] uppercase tracking-[0.15em] text-[#123044]/30">
              Location
            </p>

            <p className="mt-0.5 text-[9px] font-semibold">
              Healthcare near you
            </p>
          </div>
        </div>

        <ChevronRight size={13} className="text-[#123044]/25" />
      </div>

      {/* Services */}

      <div className="px-5 pt-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[7px] font-semibold uppercase tracking-[0.15em] text-[#123044]/30">
              Explore care
            </p>

            <p className="mt-1 text-[13px] font-semibold tracking-[-0.04em]">
              What do you need?
            </p>
          </div>

          <span className="text-[7px] font-semibold text-[#54977F]">
            View all
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <AppService
            icon={<Stethoscope size={14} />}
            title="Doctors"
            text="Find specialists"
          />

          <AppService
            icon={<MapPin size={14} />}
            title="Hospitals"
            text="Find nearby care"
          />

          <div className="hidden sm:block">
            <AppService
              icon={<CalendarDays size={14} />}
              title="Appointments"
              text="Book a visit"
            />
          </div>

          <div className="hidden sm:block">
            <AppService
              icon={<ShieldCheck size={14} />}
              title="Medicines"
              text="Order essentials"
            />
          </div>
        </div>
      </div>

      {/* Bottom content */}

      <div className="mx-5 mt-5 border-t border-[#123044]/10 pb-5 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[7px] font-semibold uppercase tracking-[0.15em] text-[#123044]/30">
              Your healthcare
            </p>

            <p className="mt-1 text-[9px] font-semibold">
              Everything starts here.
            </p>
          </div>

          <ArrowUpRight size={12} className="text-[#54977F]" />
        </div>
      </div>

      {/* Bottom nav */}

      <div className="grid grid-cols-4 border-t border-[#123044]/10 bg-white px-5 py-3.5">
        <BottomNav label="Home" active />
        <BottomNav label="Care" />
        <BottomNav label="Activity" />
        <BottomNav label="Profile" />
      </div>
    </div>
  );
};

/* ============================================================
   SERVICE
============================================================ */

const AppService = ({ icon, title, text }) => {
  return (
    <div className="border border-[#123044]/10 bg-white p-3">
      <div className="flex h-7 w-7 items-center justify-center bg-[#EAF4FB] text-[#4B90BD]">
        {icon}
      </div>

      <p className="mt-3 text-[9px] font-semibold">{title}</p>

      <div className="mt-1 flex items-center justify-between">
        <span className="text-[6px] text-[#123044]/35">{text}</span>

        <ChevronRight size={9} className="text-[#123044]/25" />
      </div>
    </div>
  );
};

/* ============================================================
   BOTTOM NAV
============================================================ */

const BottomNav = ({ label, active = false }) => {
  return (
    <div className="text-center">
      <div
        className={`mx-auto h-1 w-1 rounded-full ${
          active ? "bg-[#4B90BD]" : "bg-transparent"
        }`}
      />

      <p
        className={`mt-1 text-[6px] ${
          active ? "font-semibold text-[#4B90BD]" : "text-[#123044]/30"
        }`}
      >
        {label}
      </p>
    </div>
  );
};

export default AppPreview;
