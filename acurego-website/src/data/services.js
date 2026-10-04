import {
  Ambulance,
  Building2,
  CalendarCheck,
  Pill,
  Stethoscope,
} from "lucide-react";

export const healthcareServices = [
  {
    id: "emergency",
    title: "Emergency Assistance",
    description:
      "Get immediate access to emergency support, nearby ambulances, and hospitals when every second matters.",
    icon: Ambulance,
    number: "01",
    accent: "emergency",
    href: "#emergency",
  },
  {
    id: "hospitals",
    title: "Find Hospitals",
    description:
      "Discover trusted hospitals around you and quickly find the right facility for your healthcare needs.",
    icon: Building2,
    number: "02",
    accent: "teal",
    href: "#hospitals",
  },
  {
    id: "doctors",
    title: "Find Doctors",
    description:
      "Explore doctors by specialty, availability, and location to find the right healthcare professional.",
    icon: Stethoscope,
    number: "03",
    accent: "teal",
    href: "#doctors",
  },
  {
    id: "appointments",
    title: "Book Appointments",
    description:
      "Find available doctors and schedule appointments without the usual calls, queues, or confusion.",
    icon: CalendarCheck,
    number: "04",
    accent: "teal",
    href: "#appointments",
  },
  {
    id: "medicines",
    title: "Order Medicines",
    description:
      "Get your medicines delivered to your doorstep through a simple and reliable healthcare experience.",
    icon: Pill,
    number: "05",
    accent: "teal",
    href: "#medicines",
  },
];
