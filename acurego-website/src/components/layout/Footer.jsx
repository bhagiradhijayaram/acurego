import {
  ArrowUpRight,
  ChevronRight,
  HeartPulse,
  Mail,
  PhoneCall,
} from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-[#0A101C] text-white pt-20">
      <Container>
        <SectionHeading
          eyebrow="Healthcare services"
          icon={HeartPulse}
          title={
            <>
              One place for
              <br />
              <span className="text-[#4B90BD]">every step of care.</span>
            </>
          }
          description="A connected healthcare experience designed to help people find care, reach providers, and get support when it matters."
          action={{
            label: "Explore Acurego",
            href: "#services",
            icon: ChevronRight,
          }}
          theme="dark"
        />

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

        {/* =========================================================
            NAVIGATION / CONTACT
        ========================================================= */}
        <div className="grid border-b border-white/[0.08] lg:grid-cols-[1fr_1fr_1fr_1.2fr] mt-12 gap-0 lg:mt-16">
          {/* Services */}
          <FooterGroup
            number="01"
            title="Navigate"
            links={[
              ["Services", "#services"],
              ["Emergency", "#emergency"],
              ["How it works", "#how-it-works"],
              ["The app", "#app"],
            ]}
          />

          {/* Network */}
          <FooterGroup
            number="02"
            title="Network"
            links={[
              ["For providers", "#providers"],
              ["About AcureGo", "#about"],
              ["Get started", "#get-started"],
            ]}
          />

          {/* Social */}
          <div className="border-b border-white/[0.08] px-0 py-8 sm:py-10 lg:border-b-0 lg:border-r lg:px-8">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold tracking-[0.16em] text-white/20">
                03
              </span>

              <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                Follow
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-5">
              <SocialLink icon={FaInstagram} label="Instagram" href="#" />

              <SocialLink icon={FaLinkedinIn} label="LinkedIn" href="#" />

              <SocialLink
                icon={Mail}
                label="hello@acurego.com"
                href="mailto:hello@acurego.com"
              />
            </div>
          </div>

          {/* Emergency / Contact */}
          <div className="px-0 py-8 sm:py-10 lg:px-8">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold tracking-[0.16em] text-white/20">
                04
              </span>

              <span className="text-[9px] uppercase tracking-[0.18em] text-[#E5484D]">
                Emergency
              </span>
            </div>

            <div className="mt-8">
              <div className="flex items-start gap-3">
                <PhoneCall
                  size={15}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#E5484D]"
                />

                <div>
                  <p className="text-[13px] font-medium text-white/75">
                    When every second matters.
                  </p>

                  <p className="mt-2 max-w-[260px] text-[11px] leading-5 text-white/30">
                    AcureGo helps connect emergency requests with available
                    healthcare support.
                  </p>
                </div>
              </div>

              <a
                href="#emergency"
                className="group mt-7 inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#E5484D]"
              >
                Emergency assistance
                <ArrowUpRight
                  size={11}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            CONTACT LINE
        ========================================================= */}
        <div className="border-b border-white/[0.08] py-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
                Start with AcureGo
              </p>

              <a
                href="mailto:hello@acurego.com"
                className="mt-2 block text-[18px] font-medium tracking-[-0.03em] text-white/70 transition-colors hover:text-white sm:text-[22px]"
              >
                hello@acurego.com
              </a>
            </div>

            <span className="text-[9px] uppercase tracking-[0.18em] text-white/20">
              Built for India's connected healthcare network
            </span>
          </div>
        </div>

        {/* =========================================================
            LEGAL
        ========================================================= */}
        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] text-white/20">
            © {new Date().getFullYear()} AcureGo
          </p>

          <div className="flex flex-wrap gap-x-7 gap-y-3">
            <FooterLegalLink label="Privacy" />
            <FooterLegalLink label="Terms" />
            <FooterLegalLink label="Accessibility" />
          </div>

          <p className="text-[9px] uppercase tracking-[0.16em] text-white/15">
            Healthcare, connected.
          </p>
        </div>
      </Container>
    </footer>
  );
};

/* ===============================================================
   FOOTER GROUP
================================================================ */

const FooterGroup = ({ number, title, links }) => {
  return (
    <div className="border-b border-white/[0.08] px-0 py-8 sm:py-10 lg:border-b-0 lg:border-r lg:px-8">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-semibold tracking-[0.16em] text-white/20">
          {number}
        </span>

        <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
          {title}
        </span>
      </div>

      <nav className="mt-8 flex flex-col gap-4">
        {links.map(([label, href]) => (
          <FooterLink key={label} href={href} label={label} />
        ))}
      </nav>
    </div>
  );
};

/* ===============================================================
   FOOTER LINK
================================================================ */

const FooterLink = ({ href, label }) => {
  return (
    <a
      href={href}
      className="group flex w-fit items-center gap-3 text-[13px] font-medium text-white/45 transition-colors duration-200 hover:text-white"
    >
      <span>{label}</span>

      <ArrowUpRight
        size={11}
        strokeWidth={1.8}
        className="text-white/15 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#4B90BD] group-hover:opacity-100"
      />
    </a>
  );
};

/* ===============================================================
   SOCIAL LINK
================================================================ */

const SocialLink = ({ icon: Icon, label, href }) => {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 text-[13px] font-medium text-white/45 transition-colors duration-200 hover:text-white"
    >
      <Icon
        size={14}
        strokeWidth={1.6}
        className="text-white/20 transition-colors duration-200 group-hover:text-[#54977F]"
      />

      <span>{label}</span>

      <ArrowUpRight
        size={10}
        strokeWidth={1.8}
        className="text-white/15 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
      />
    </a>
  );
};

/* ===============================================================
   LEGAL
================================================================ */

const FooterLegalLink = ({ label }) => {
  return (
    <a
      href="#"
      className="text-[9px] text-white/20 transition-colors duration-200 hover:text-white/55"
    >
      {label}
    </a>
  );
};

export default Footer;
