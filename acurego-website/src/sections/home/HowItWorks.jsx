import { motion } from "framer-motion";

import { ArrowUpRight, MapPin, Route, Search, ShieldCheck } from "lucide-react";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Choose the healthcare service you need — from emergency assistance to doctors, hospitals, appointments, or medicines.",
  },
  {
    number: "02",
    title: "Find the right care",
    description:
      "AcureGo connects your request with relevant healthcare services available around you.",
  },
  {
    number: "03",
    title: "Get care, without the friction",
    description:
      "Move from finding care to getting it with a simple, connected experience.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white pb-24 sm:pb-32 lg:pb-40"
    >
      <Container>
        {/* Header */}

        <SectionHeading
          eyebrow="How AcureGo works"
          icon={Route}
          title={
            <>
              From need
              <br />
              <span className="text-[#4B90BD]">to care.</span>
            </>
          }
          description="Healthcare can be complicated behind the scenes. Your experience shouldn't be. AcureGo simplifies the journey from finding care to getting it."
          action={{
            label: "Explore the experience",
            href: "#services",
            icon: ArrowUpRight,
          }}
        />

        {/* Main experience */}

        <div className="mt-24 grid gap-16 lg:mt-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* =====================================================
              STEPS
          ====================================================== */}

          <div className="relative">
            {/* Vertical line */}

            <div className="absolute bottom-5 left-[15px] top-5 hidden w-px bg-[#DDE8DD] sm:block" />

            <div className="space-y-12 sm:space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  className="relative flex gap-6 sm:gap-8"
                >
                  {/* Number */}

                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center bg-white">
                    <span
                      className={`text-[11px] font-semibold tracking-[0.12em] ${
                        index === 1 ? "text-[#54977F]" : "text-[#91A0A8]"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}

                  <div className="max-w-[420px]">
                    <h3 className="text-[24px] font-semibold tracking-[-0.045em] text-[#123044] sm:text-[28px]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-[#647786] sm:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* =====================================================
              PRODUCT VISUAL
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[600px] overflow-hidden bg-[#EAF4FB]"
          >
            {/* Decorative typography */}

            <div className="absolute right-[-20px] top-[-35px] select-none text-[170px] font-bold leading-none tracking-[-0.1em] text-[#123044]/[0.025]">
              01
            </div>

            {/* Top label */}

            <div className="absolute left-8 right-8 top-8 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#647786]">
                AcureGo
              </span>

              <span className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#54977F]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#78BB7B]" />
                Connected
              </span>
            </div>

            {/* =================================================
                PHONE
            ================================================== */}

            <div className="absolute left-1/2 top-[100px] w-[285px] -translate-x-1/2 sm:w-[320px]">
              <div className="relative rounded-[38px] border-[7px] border-[#123044] bg-[#123044] p-1 shadow-[0_35px_90px_rgba(18,48,68,0.18)]">
                {/* Camera */}

                <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[#123044]" />

                {/* Screen */}

                <div className="overflow-hidden rounded-[28px] bg-[#F7FAFB]">
                  {/* App header */}

                  <div className="px-6 pb-5 pt-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#91A0A8]">
                          Good morning
                        </p>

                        <p className="mt-1 text-[17px] font-semibold tracking-[-0.04em] text-[#123044]">
                          How can we help?
                        </p>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#123044]">
                        <span className="text-[11px] font-bold text-white">
                          A
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Search */}

                  <div className="mx-5 flex items-center gap-3 border border-[#DDE8DD] bg-white px-4 py-3">
                    <Search size={15} className="text-[#91A0A8]" />

                    <span className="text-[11px] text-[#91A0A8]">
                      Search healthcare
                    </span>
                  </div>

                  {/* Emergency */}

                  <div className="mx-5 mt-5 bg-[#123044] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#FF8588]">
                          Emergency
                        </p>

                        <p className="mt-1 text-[14px] font-semibold text-white">
                          Need urgent help?
                        </p>
                      </div>

                      <ArrowUpRight size={17} className="text-white" />
                    </div>
                  </div>

                  {/* Services */}

                  <div className="px-5 pb-7 pt-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#91A0A8]">
                      Explore care
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {[
                        "Doctors",
                        "Hospitals",
                        "Appointments",
                        "Medicines",
                      ].map((item, index) => (
                        <div
                          key={item}
                          className="border border-[#DDE8DD] bg-white p-4"
                        >
                          <div
                            className={`mb-4 h-1.5 w-1.5 rounded-full ${
                              index === 0 ? "bg-[#78BB7B]" : "bg-[#DDE8DD]"
                            }`}
                          />

                          <span className="text-[11px] font-medium text-[#123044]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom navigation */}

                  <div className="border-t border-[#DDE8DD] bg-white px-6 py-4">
                    <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.1em]">
                      <span className="font-semibold text-[#54977F]">Home</span>

                      <span className="text-[#91A0A8]">Activity</span>

                      <span className="text-[#91A0A8]">Profile</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING LOCATION
              ================================================== */}

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-16 top-[180px] hidden items-center gap-3 border border-[#DDE8DD] bg-white px-4 py-3 shadow-[0_15px_40px_rgba(18,48,68,0.08)] sm:flex"
              >
                <div className="flex h-8 w-8 items-center justify-center bg-[#DDEEE6]">
                  <MapPin size={14} className="text-[#54977F]" />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.12em] text-[#91A0A8]">
                    Location
                  </p>

                  <p className="mt-0.5 text-[11px] font-semibold text-[#123044]">
                    Near you
                  </p>
                </div>
              </motion.div>

              {/* =================================================
                  FLOATING TRUST
              ================================================== */}

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-12 bottom-[120px] hidden items-center gap-3 border border-[#DDE8DD] bg-white px-4 py-3 shadow-[0_15px_40px_rgba(18,48,68,0.08)] sm:flex"
              >
                <div className="flex h-8 w-8 items-center justify-center bg-[#DDEEE6]">
                  <ShieldCheck size={14} className="text-[#54977F]" />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.12em] text-[#91A0A8]">
                    Experience
                  </p>

                  <p className="mt-0.5 text-[11px] font-semibold text-[#123044]">
                    Simple & connected
                  </p>
                </div>
              </motion.div>
            </div>

            {/* =================================================
                BOTTOM CAPTION
            ================================================== */}

            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between border-t border-[#DDE8DD] pt-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#91A0A8]">
                  One experience
                </p>

                <p className="mt-2 text-[15px] font-semibold tracking-[-0.03em] text-[#123044]">
                  Healthcare, simplified.
                </p>
              </div>

              <span className="text-[10px] font-medium tracking-[0.12em] text-[#91A0A8]">
                02 / 06
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM LINE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-[#DDE8DD] pt-7"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-[#647786]">
              Less searching. Less waiting. More connected care.
            </p>

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#54977F]">
              Built around you
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HowItWorks;
