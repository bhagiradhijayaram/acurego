import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, PhoneCall, ChevronDown } from "lucide-react";

import Container from "../common/Container";

const navigation = [
  {
    label: "Services",
    href: "#services",
    dropdown: true,
  },
  {
    label: "How it works",
    href: "#how-it-works",
  },
  {
    label: "For providers",
    href: "#providers",
  },
  {
    label: "About us",
    href: "#about",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#DDE8DD]/80 bg-white/95 shadow-[0_8px_30px_rgba(18,48,68,0.06)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav
          className={`flex h-[82px] items-center justify-between transition-all duration-500 ${
            scrolled ? "h-[72px]" : ""
          }`}
        >
          {/* ------------------------------------------------
              BRAND
          ------------------------------------------------ */}

          <a
            href="/"
            className="group flex items-center gap-3"
            aria-label="AcureGo home"
          >
            {/* Logo */}

            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[13px] bg-[#123044] shadow-[0_8px_24px_rgba(18,48,68,0.16)]">
              <div className="absolute h-5 w-5 rounded-full border-[2px] border-[#4B90BD]" />

              <div className="absolute h-[2px] w-5 bg-white" />

              <div className="absolute h-5 w-[2px] bg-white" />
            </div>

            {/* Wordmark */}

            <div className="flex flex-col leading-none">
              <span className="text-[19px] font-bold tracking-[-0.055em] text-[#123044]">
                Acure<span className="text-[#4B90BD]">Go</span>
              </span>

              <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.19em] text-[#91A0A8]">
                Healthcare, connected
              </span>
            </div>
          </a>

          {/* ------------------------------------------------
              DESKTOP NAVIGATION
          ------------------------------------------------ */}

          <div className="hidden items-center lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-[#DDE8DD]/80 bg-white/60 p-1 backdrop-blur-md">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[13px] font-medium text-[#647786] transition-all duration-200 hover:bg-white hover:text-[#123044]"
                >
                  <span>{item.label}</span>

                  {item.dropdown && (
                    <ChevronDown
                      size={13}
                      className="text-[#91A0A8] transition-transform duration-200 group-hover:translate-y-0.5"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------
              RIGHT ACTIONS
          ------------------------------------------------ */}

          <div className="hidden items-center gap-3 lg:flex">
            {/* Emergency */}

            <a
              href="#emergency"
              className="group flex items-center gap-2 rounded-full px-3.5 py-2.5 text-[13px] font-semibold text-[#123044] transition-all duration-200 hover:bg-[#FFF1F1]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF1F1] text-[#E5484D] transition-transform duration-200 group-hover:scale-105">
                <PhoneCall size={14} strokeWidth={2.3} />
              </span>

              <span>Emergency</span>
            </a>

            {/* CTA */}

            <a
              href="#get-started"
              className="group flex items-center gap-2 rounded-full bg-[#4B90BD] px-4.5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_25px_rgba(75,144,189,0.18)] transition-all duration-300 hover:bg-[#2F6F9E] hover:shadow-[0_12px_30px_rgba(75,144,189,0.24)]"
            >
              <span>Get started</span>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>

          {/* ------------------------------------------------
              MOBILE MENU BUTTON
          ------------------------------------------------ */}

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE8DD] bg-white text-[#123044] shadow-sm lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        {/* ------------------------------------------------
            MOBILE MENU
        ------------------------------------------------ */}

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileOpen ? "max-h-[500px] pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[24px] border border-[#DDE8DD] bg-white/95 p-3 shadow-[0_20px_50px_rgba(18,48,68,0.10)]">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-[#647786] transition-colors hover:bg-white hover:text-[#123044]"
              >
                <span>{item.label}</span>

                {item.dropdown && (
                  <ChevronDown size={15} className="text-[#91A0A8]" />
                )}
              </a>
            ))}

            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-[#DDE8DD] pt-3">
              {/* Emergency */}

              <a
                href="#emergency"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#FFF1F1] px-4 py-3 text-sm font-semibold text-[#E5484D]"
              >
                <PhoneCall size={15} />
                Emergency
              </a>

              {/* Get Started */}

              <a
                href="#get-started"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#4B90BD] px-4 py-3 text-sm font-semibold text-white"
              >
                Get started
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
