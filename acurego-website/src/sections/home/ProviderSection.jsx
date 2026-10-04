import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  MapPin,
  ShieldCheck,
  Siren,
  Users,
  Stethoscope,
} from "lucide-react";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";

const ProviderSection = () => {
  return (
    <section
      id="providers"
      className="overflow-hidden bg-[#0A101C] py-28 text-white sm:py-32 lg:py-40"
    >
      <Container>
        <SectionHeading
          eyebrow="For healthcare providers"
          icon={Stethoscope}
          title={
            <>
              Better care
              <br />
              <span className="text-[#4B90BD]">starts together.</span>
            </>
          }
          description="AcureGo brings emergency assistance, ambulance availability, and nearby hospitals into one connected experience."
          action={{
            label: " Join the AcureGo network",
            href: "#healthcare-providers",
            icon: ChevronRight,
          }}
          theme="dark"
        />

        {/* =====================================================
            PROVIDER PLATFORM
        ====================================================== */}

        <div className="mt-20 sm:mt-24 lg:mt-28">
          <div className="border border-white/[0.10] bg-[#101927]">
            {/* -------------------------------------------------
                PLATFORM HEADER
            -------------------------------------------------- */}

            <div className="flex min-h-[64px] items-center justify-between border-b border-white/[0.08] px-5 sm:px-7 lg:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center bg-[#4B90BD] text-[#0A101C]">
                  <span className="text-[12px] font-bold">A</span>
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-white">
                    AcureGo
                  </p>

                  <p className="mt-0.5 text-[7px] uppercase tracking-[0.15em] text-white/25">
                    Provider network
                  </p>
                </div>
              </div>

              <div className="hidden items-center gap-8 md:flex">
                <span className="text-[8px] uppercase tracking-[0.16em] text-white/35">
                  Overview
                </span>

                <span className="text-[8px] uppercase tracking-[0.16em] text-white/35">
                  Appointments
                </span>

                <span className="text-[8px] uppercase tracking-[0.16em] text-white/35">
                  Patients
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#78BB7B]" />

                <span className="text-[7px] uppercase tracking-[0.15em] text-white/40">
                  Connected
                </span>
              </div>
            </div>

            {/* -------------------------------------------------
                DASHBOARD
            -------------------------------------------------- */}

            <div className="grid lg:grid-cols-[220px_1fr]">
              {/* Sidebar */}

              <aside className="hidden border-r border-white/[0.08] p-7 lg:block">
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/25">
                  Your practice
                </p>

                <h3 className="mt-5 text-[28px] font-medium leading-none tracking-[-0.055em]">
                  Dr. Ananya
                  <br />
                  Rao
                </h3>

                <p className="mt-3 text-[10px] text-white/30">
                  General Physician
                </p>

                <div className="mt-10 border-t border-white/[0.08] pt-3">
                  <ProviderSideItem label="Dashboard" active />
                  <ProviderSideItem label="Appointments" />
                  <ProviderSideItem label="Patients" />
                  <ProviderSideItem label="Availability" />
                </div>

                <div className="mt-12 border border-white/[0.08] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[8px] uppercase tracking-[0.16em] text-white/25">
                      Network status
                    </p>

                    <ShieldCheck
                      size={13}
                      strokeWidth={1.7}
                      className="text-[#54977F]"
                    />
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#78BB7B]" />

                    <span className="text-[9px] text-white/60">
                      Visible to nearby patients
                    </span>
                  </div>
                </div>
              </aside>

              {/* Main dashboard */}

              <div className="min-w-0 p-5 sm:p-7 lg:p-9">
                {/* Dashboard heading */}

                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                  <div>
                    <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/25">
                      Tuesday / 08 October
                    </p>

                    <h3 className="mt-3 text-[26px] font-medium tracking-[-0.045em] sm:text-[32px]">
                      Good morning, Doctor.
                    </h3>
                  </div>

                  <div className="flex w-fit items-center gap-2 border border-white/[0.08] px-3 py-2">
                    <Clock3
                      size={12}
                      strokeWidth={1.7}
                      className="text-[#54977F]"
                    />

                    <span className="text-[8px] text-white/45">
                      Clinic open
                    </span>
                  </div>
                </div>

                {/* Stats */}

                <div className="mt-8 grid grid-cols-2 border-y border-white/[0.08] sm:grid-cols-4">
                  <ProviderStat number="18" label="Appointments" />
                  <ProviderStat number="06" label="New requests" />
                  <ProviderStat number="42" label="Patients" />
                  <ProviderStat number="4.9" label="Rating" />
                </div>

                {/* Appointment section */}

                <div className="mt-8 border border-white/[0.08]">
                  <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-4 sm:px-5">
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/25">
                        Today's schedule
                      </p>

                      <p className="mt-1 text-[13px] font-medium text-white/75">
                        Upcoming appointments
                      </p>
                    </div>

                    <CalendarDays
                      size={15}
                      strokeWidth={1.7}
                      className="text-white/25"
                    />
                  </div>

                  <Appointment
                    time="09:30"
                    name="Rahul Kumar"
                    type="General consultation"
                    status="Confirmed"
                  />

                  <Appointment
                    time="10:15"
                    name="Priya Sharma"
                    type="Follow-up consultation"
                    status="Confirmed"
                  />

                  <Appointment
                    time="11:00"
                    name="Arjun Reddy"
                    type="General consultation"
                    status="New request"
                    last
                  />
                </div>

                {/* Mobile provider information */}

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:hidden">
                  <div className="border border-white/[0.08] p-4">
                    <p className="text-[8px] uppercase tracking-[0.16em] text-white/25">
                      Provider
                    </p>

                    <p className="mt-2 text-sm font-medium text-white">
                      Dr. Ananya Rao
                    </p>

                    <p className="mt-1 text-[10px] text-white/30">
                      General Physician
                    </p>
                  </div>

                  <div className="border border-white/[0.08] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[8px] uppercase tracking-[0.16em] text-white/25">
                        Network
                      </p>

                      <Users
                        size={13}
                        strokeWidth={1.7}
                        className="text-[#4B90BD]"
                      />
                    </div>

                    <p className="mt-2 text-sm font-medium text-white">
                      Connected
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#78BB7B]" />

                      <span className="text-[10px] text-white/30">
                        Visible to nearby patients
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------
                PLATFORM FOOTER
            -------------------------------------------------- */}

            <div className="flex flex-col gap-2 border-t border-white/[0.08] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                AcureGo provider experience
              </p>

              <p className="text-[9px] text-white/30">
                Discover. Connect. Care.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

        <div className="mt-14 grid gap-8 border-b border-white/[0.08] pb-9 sm:mt-16 sm:grid-cols-[1fr_auto] sm:items-end lg:mt-20">
          <div>
            <p className="max-w-[720px] text-[25px] font-medium leading-[1.05] tracking-[-0.045em] sm:text-[34px] lg:text-[42px]">
              Make your healthcare service easier to find,
              <span className="text-white/25"> easier to access.</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={14} strokeWidth={1.7} className="text-[#54977F]" />

            <span className="text-[9px] uppercase tracking-[0.17em] text-white/30">
              Built for India's healthcare network
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ============================================================
   PROVIDER SIDE ITEM
============================================================ */

const ProviderSideItem = ({ label, active = false }) => {
  return (
    <div
      className={`flex items-center justify-between border-b border-white/[0.06] py-3.5 ${
        active ? "text-white" : "text-white/30"
      }`}
    >
      <span className="text-[9px]">{label}</span>

      {active && <span className="h-1.5 w-1.5 rounded-full bg-[#54977F]" />}
    </div>
  );
};

/* ============================================================
   PROVIDER STAT
============================================================ */

const ProviderStat = ({ number, label }) => {
  return (
    <div className="border-r border-white/[0.08] px-4 py-5 last:border-r-0 sm:px-5">
      <p className="text-[24px] font-medium tracking-[-0.055em] text-white sm:text-[28px]">
        {number}
      </p>

      <p className="mt-1 text-[7px] uppercase tracking-[0.16em] text-white/25">
        {label}
      </p>
    </div>
  );
};

/* ============================================================
   APPOINTMENT
============================================================ */

const Appointment = ({ time, name, type, status, last = false }) => {
  const isNew = status === "New request";

  return (
    <div
      className={`grid grid-cols-[48px_minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 sm:grid-cols-[70px_minmax(0,1fr)_auto] sm:px-5 ${
        last ? "" : "border-b border-white/[0.07]"
      }`}
    >
      <span className="text-[10px] font-medium text-white/40">{time}</span>

      <div className="min-w-0">
        <p className="truncate text-[10px] font-medium text-white/75">{name}</p>

        <p className="mt-1 truncate text-[7px] text-white/25">{type}</p>
      </div>

      <div className="flex items-center gap-2">
        <span
          className={`hidden text-[7px] sm:block ${
            isNew ? "text-[#78BB7B]" : "text-white/25"
          }`}
        >
          {status}
        </span>

        <ChevronRight size={11} strokeWidth={1.7} className="text-white/20" />
      </div>
    </div>
  );
};

export default ProviderSection;
