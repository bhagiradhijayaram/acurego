import {
  Activity,
  Ambulance,
  ArrowUpRight,
  Building2,
  CalendarCheck,
  Check,
  ChevronRight,
  Network,
  Pill,
  ShieldCheck,
  Siren,
  Stethoscope,
} from "lucide-react";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";

const networkItems = [
  {
    id: "emergency",
    label: "Emergency",
    description: "Immediate assistance",
    icon: Activity,
    status: "Ready",
    accent: "red",
  },
  {
    id: "ambulance",
    label: "Ambulance",
    description: "Emergency transport",
    icon: Ambulance,
    status: "Connected",
    accent: "blue",
  },
  {
    id: "hospitals",
    label: "Hospitals",
    description: "Nearby healthcare facilities",
    icon: Building2,
    status: "Available",
    accent: "blue",
  },
  {
    id: "doctors",
    label: "Doctors",
    description: "Specialists and consultations",
    icon: Stethoscope,
    status: "Available",
    accent: "teal",
  },
  {
    id: "appointments",
    label: "Appointments",
    description: "Simple appointment booking",
    icon: CalendarCheck,
    status: "Available",
    accent: "teal",
  },
  {
    id: "medicines",
    label: "Medicines",
    description: "Healthcare delivered home",
    icon: Pill,
    status: "Available",
    accent: "green",
  },
];

const HealthcareNetwork = () => {
  return (
    <section
      id="network"
      className="overflow-hidden bg-white py-28 sm:py-32 lg:py-40"
    >
      <Container>
        {/* ─────────────────────────────────────────────
            HEADER
        ───────────────────────────────────────────── */}
        <SectionHeading
          eyebrow="Connected healthcare"
          icon={Network}
          title={
            <>
              One network
              <br />
              <span className="text-[#4B90BD]">every step of care.</span>
            </>
          }
          description="AcureGo connects the different parts of healthcare into one coordinated experience — from urgent assistance to everyday care.
"
          action={{
            label: "Explore services",
            href: "#services",
            icon: ChevronRight,
          }}
        />
        {/* ─────────────────────────────────────────────
            MAIN VISUAL
        ───────────────────────────────────────────── */}

        <div className="mt-20 lg:mt-28">
          <div className="grid overflow-hidden border border-[#DDE8DD] bg-[#F7FAFB] lg:grid-cols-[1.35fr_0.65fr]">
            {/* IMAGE */}
            <div className="relative min-h-[520px] overflow-hidden sm:min-h-[600px] lg:min-h-[680px]">
              {/* <img
                src="https://pikwizard.com/pw/medium/db858b4a33acbadd4e16574017e8a482.jpg"
                alt="Doctor consulting with a patient in a modern healthcare environment"
                className="absolute inset-0 h-full w-full object-cover"
              /> */}

              <img
                src="https://images.unsplash.com/photo-1758691461973-553db5285280?auto=format&fit=crop&fm=jpg&q=85&w=1800"
                alt="Doctor consulting with a patient"
                className="h-full w-full object-cover"
              />

              {/* subtle image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#123044]/70 via-transparent to-transparent" />

              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <div className="flex max-w-[500px] items-end justify-between gap-8">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                      Connected healthcare
                    </span>

                    <h3 className="mt-3 max-w-[420px] text-[30px] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[38px]">
                      One experience.
                      <br />
                      Every step of care.
                    </h3>
                  </div>

                  <div className="hidden shrink-0 sm:block">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                      <ArrowUpRight
                        size={18}
                        className="text-white"
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NETWORK PANEL */}
            <div className="flex flex-col bg-white">
              <div className="border-b border-[#DDE8DD] px-6 py-6 sm:px-8 sm:py-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF4FB]">
                      <ShieldCheck
                        size={15}
                        strokeWidth={1.7}
                        className="text-[#4B90BD]"
                      />
                    </span>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#123044]">
                        AcureGo network
                      </p>

                      <p className="mt-1 text-[11px] text-[#91A0A8]">
                        Connected healthcare
                      </p>
                    </div>
                  </div>

                  <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#54977F]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#78BB7B]" />
                    Live
                  </span>
                </div>
              </div>

              {/* NETWORK ITEMS */}
              <div className="flex-1">
                {networkItems.map((item, index) => {
                  const Icon = item.icon;

                  const iconColor = {
                    red: "text-[#E5484D] bg-[#FFF1F1]",
                    blue: "text-[#4B90BD] bg-[#EAF4FB]",
                    teal: "text-[#54977F] bg-[#DDEEE6]",
                    green: "text-[#54977F] bg-[#DDEEE6]",
                  }[item.accent];

                  const isLast = index === networkItems.length - 1;

                  return (
                    <div
                      key={item.id}
                      className={`group px-6 py-5 transition-colors duration-200 hover:bg-[#F7FAFB] sm:px-8 ${
                        !isLast ? "border-b border-[#DDE8DD]" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconColor}`}
                        >
                          <Icon size={17} strokeWidth={1.7} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-4">
                            <h4 className="text-[15px] font-semibold tracking-[-0.02em] text-[#123044]">
                              {item.label}
                            </h4>

                            <Check
                              size={15}
                              strokeWidth={2}
                              className={
                                item.accent === "red"
                                  ? "text-[#E5484D]"
                                  : "text-[#78BB7B]"
                              }
                            />
                          </div>

                          <p className="mt-1 text-[11px] leading-5 text-[#91A0A8]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* PANEL FOOTER */}
              <div className="border-t border-[#DDE8DD] bg-[#F7FAFB] px-6 py-6 sm:px-8">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#78BB7B]" />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#54977F]">
                      Network ready
                    </p>

                    <p className="mt-2 text-[12px] leading-5 text-[#647786]">
                      The right healthcare connection, when you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            SUPPORTING VISUALS
        ───────────────────────────────────────────── */}

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          {/* EMERGENCY IMAGE */}
          <div className="group relative min-h-[330px] overflow-hidden border border-[#DDE8DD]">
            {/* <img
              src="https://pikwizard.com/pw/medium/c2ee5064ab81db9ff1e9c76a149c5ad9.jpg"
              alt="Medical team responding to an emergency"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            /> */}

            <img
              src="https://images.unsplash.com/photo-1666886573553-6548db92db79?auto=format&fit=crop&fm=jpg&q=85&w=1600"
              alt="Doctor showing medical information to a patient"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#123044]/80 via-[#123044]/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E5484D]">
                  <Ambulance
                    size={15}
                    className="text-white"
                    strokeWidth={1.7}
                  />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                  Emergency response
                </span>
              </div>

              <h3 className="mt-4 max-w-[360px] text-[25px] font-semibold leading-tight tracking-[-0.035em] text-white">
                When every second matters, the network moves.
              </h3>
            </div>
          </div>

          {/* TECHNOLOGY IMAGE */}
          <div className="grid overflow-hidden border border-[#DDE8DD] bg-[#F7FAFB] sm:grid-cols-[1fr_0.75fr]">
            <div className="relative min-h-[330px] overflow-hidden">
              {/* <img
                src="https://pikwizard.com/pw/medium/acfe331ab9f077f1d9326f3e1e8227dd.jpg"
                alt="Healthcare professional using digital healthcare technology"
                className="absolute inset-0 h-full w-full object-cover"
              /> */}

              <img
                src="https://images.pexels.com/photos/6303652/pexels-photo-6303652.jpeg?auto=compress&cs=tinysrgb&w=1800"
                alt="Doctor discussing diagnosis with patient"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between p-7 sm:p-8 lg:p-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4B90BD]">
                  Built for modern care
                </span>

                <h3 className="mt-4 text-[28px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#123044] sm:text-[34px]">
                  Healthcare,
                  <br />
                  connected by
                  <br />
                  technology.
                </h3>
              </div>

              <div className="mt-10">
                <div className="h-px w-full bg-[#DDE8DD]" />

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#91A0A8]">
                    AcureGo / Network
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.7}
                    className="text-[#4B90BD]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            BOTTOM STATEMENT
        ───────────────────────────────────────────── */}

        <div className="mt-16 border-t border-[#DDE8DD] pt-8 sm:mt-20 sm:flex sm:items-end sm:justify-between sm:gap-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#91A0A8]">
              The bigger picture
            </p>

            <p className="mt-4 max-w-[800px] text-[30px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#123044] sm:text-[40px]">
              One platform.
              <span className="text-[#4B90BD]"> Every step of care.</span>
            </p>
          </div>

          <span className="mt-6 shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#91A0A8] sm:mt-0">
            AcureGo / 01
          </span>
        </div>
      </Container>
    </section>
  );
};

export default HealthcareNetwork;
