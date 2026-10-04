import {
  ArrowDownRight,
  ArrowUpRight,
  Ambulance,
  CalendarCheck,
  Hospital,
  Pill,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import Container from "../../components/common/Container";
import Button from "../../components/common/Button";

const Hero = () => {
  const services = [
    {
      icon: Hospital,
      title: "Hospitals",
    },
    {
      icon: Stethoscope,
      title: "Doctors",
    },
    {
      icon: CalendarCheck,
      title: "Appointments",
    },
    {
      icon: Pill,
      title: "Medicines",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-32 lg:pt-36">
      <Container className="relative">
        {/* =========================================================
            HERO COPY
        ========================================================= */}

        <div className="mx-auto max-w-[920px] text-center">
          {/* Eyebrow */}

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#4B90BD]/20 bg-[#EAF4FB] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#54977F]" />

            <span className="text-xs font-semibold tracking-wide text-[#2F6F9E]">
              Healthcare, connected
            </span>
          </div>

          {/* Heading */}

          <h1 className="mx-auto max-w-[900px] text-[48px] font-semibold leading-[1.02] tracking-[-0.055em] text-[#123044] sm:text-[64px] lg:text-[82px]">
            The right healthcare,
            <span className="block text-[#4B90BD]">when you need it.</span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-7 max-w-[650px] text-base leading-7 text-[#647786] sm:text-lg sm:leading-8">
            One connected platform for emergency assistance, ambulances,
            hospitals, doctors, appointments, and medicines — designed to make
            healthcare simpler and more accessible.
          </p>

          {/* Actions */}

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              variant="accent"
              className="!bg-[#4B90BD] hover:!bg-[#2F6F9E]"
            >
              Get started
            </Button>

            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-[#123044] transition-colors hover:bg-white"
            >
              Explore services
              <ArrowDownRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* =========================================================
            PRODUCT VISUAL
        ========================================================= */}

        <div className="relative mx-auto mt-20 max-w-[1080px]">
          <div className="relative rounded-[32px] border border-white bg-[#123044] p-2 shadow-[0_40px_100px_rgba(18,48,68,0.18)] sm:rounded-[40px] sm:p-3">
            {/* Browser top */}

            <div className="flex h-12 items-center justify-between rounded-t-[24px] px-4 sm:px-6">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 sm:flex">
                <ShieldCheck size={13} className="text-[#78BB7B]" />

                <span className="text-[10px] font-medium text-white/50">
                  AcureGo Healthcare
                </span>
              </div>

              <div className="w-12" />
            </div>

            {/* Dashboard */}

            <div className="overflow-hidden rounded-[26px] bg-[#F4F8F5]">
              {/* Dashboard header */}

              <div className="flex items-center justify-between border-b border-[#DDE8DD] bg-white px-5 py-5 sm:px-8">
                <div>
                  <p className="text-xs font-medium text-[#91A0A8]">
                    Welcome to AcureGo
                  </p>

                  <h2 className="mt-1 text-base font-semibold tracking-tight text-[#123044] sm:text-lg">
                    How can we help you today?
                  </h2>
                </div>

                <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#EAF4FB] sm:flex">
                  <ShieldCheck size={18} className="text-[#4B90BD]" />
                </div>
              </div>

              {/* Dashboard body */}

              <div className="p-5 sm:p-8">
                <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
                  {/* Main care card */}

                  <div className="relative overflow-hidden rounded-[24px] bg-[#4B90BD]/20 p-6 sm:p-8">
                    <div className="relative z-10 max-w-[440px]">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                        <Stethoscope size={21} className="text-[#54977F]" />
                      </div>

                      <h3 className="text-xl font-semibold tracking-tight text-[#123044] sm:text-2xl">
                        Find the right care,
                        <br />
                        all in one place.
                      </h3>

                      <p className="mt-3 max-w-[380px] text-sm leading-6 text-[#647786]">
                        Discover healthcare services around you without
                        switching between multiple apps.
                      </p>

                      <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3E806B]">
                        Explore healthcare
                        <ArrowUpRight size={16} />
                      </button>
                    </div>

                    {/* Decorative circle */}

                    <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full border-[35px] border-white/50" />
                  </div>

                  {/* Emergency card */}

                  <div className="rounded-[24px] bg-[#123044] p-6 sm:p-7">
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E5484D]/10">
                        <Ambulance size={21} className="text-[#E5484D]" />
                      </div>

                      <span className="rounded-full bg-white/5 px-3 py-1.5 text-[10px] font-medium text-white/40">
                        24 / 7
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">
                      Emergency
                      <br />
                      assistance
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                      Get connected with emergency services when every second
                      matters.
                    </p>

                    <button className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      Get help
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Service cards */}

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {services.map((service) => {
                    const Icon = service.icon;

                    return (
                      <div
                        key={service.title}
                        className="rounded-[20px] border border-[#DDE8DD] bg-white p-4 transition-colors duration-200 hover:border-[#A0C6E8]"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF4FB]">
                          <Icon size={17} className="text-[#4B90BD]" />
                        </div>

                        <p className="mt-4 text-xs font-semibold text-[#123044]">
                          {service.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              CONNECTION STATUS
          ===================================================== */}

          <div className="absolute -right-2 top-1/3 hidden rounded-2xl border border-white bg-white p-3 shadow-[0_20px_50px_rgba(18,48,68,0.12)] sm:block sm:-right-8">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF4FB]">
                <ShieldCheck size={17} className="text-[#4B90BD]" />
              </div>

              <div>
                <p className="text-[10px] font-semibold text-[#123044]">
                  Connected
                </p>

                <p className="mt-0.5 text-[9px] text-[#91A0A8]">
                  Healthcare network
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}

        <div className="mx-auto mt-12 flex max-w-[760px] items-center justify-center gap-3 pb-16 text-center">
          <div className="hidden h-px flex-1 bg-[#DDE8DD] sm:block" />

          <p className="text-xs font-medium tracking-wide text-[#91A0A8]">
            One platform. Essential healthcare. Connected.
          </p>

          <div className="hidden h-px flex-1 bg-[#DDE8DD] sm:block" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
