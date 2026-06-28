export const company = {
  name: "Aattizen Telecom",
  tagline: "Internet service & solutions Provider",
  description:
    "Mumbai's premier B2B ISP providing carrier-grade fiber-optic connectivity, private transport, DDoS protection and SD-WAN to the modern enterprise.",
  promise: "Accelerate Your Business with Aattizen",
  vision:
    "To be the network industry's most trusted partner — flexible, secure, and built around our customers.",
  phones: {
    primary: "+91 22-69449445",
    secondary: "+91 22-69449444",
    list: ["+91 22-69449440", "+91 22-69449443", "+91 22-69449444", "+91 22-69449445"],
  },
  emails: {
    sales: "sales@aattizen.net",
    support: "support@aattizen.net",
    contact: "contact@aattizen.net",
    accounts: "account@aattizen.net",
  },
  whatsapp: {
    // E.164 without the leading "+". India country code (91) + 10-digit number.
    number: "919136108668",
    display: "+91 91361 08668",
  },
  address: {
    line1: "202, Midas, Sahar Plaza Complex",
    line2: "Behind Kohinoor Hotel, Andheri Kurla Road",
    line3: "J.B Nagar, Andheri East, Mumbai - 400059",
    mapUrl: "https://maps.app.goo.gl/mBLy215NPg3v6g9v6",
  },
};

export const nav = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Sectors", path: "/#sectors" },
  { label: "About", path: "/about" },
  { label: "Support", path: "/support" },
  { label: "Contact", path: "/contact" },
];

export const stats = [
  {
    value: "99.5%",
    label: "Guaranteed Uptime",
    pulse: true,
    counter: { to: 99.5, decimals: 1, suffix: "%" },
  },
  {
    value: "24/7/365",
    label: "Proactive NOC Support",
  },
  {
    value: "< 4hr",
    label: "Mean Time to Repair",
    counter: { to: 4, prefix: "< ", suffix: "hr" },
  },
  {
    value: "Multi Tier-1",
    label: "Upstream Redundancy",
  },
];
