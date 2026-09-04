/**
 * URJIKO Labs — Central Company Configuration
 */

export const companyConfig = {
  name: "URJIKO Labs",
  legalName: "URJIKO Labs LLC",
  tagline:
    "Practical digital solutions for modern businesses and organizations.",
  shortDescription:
    "URJIKO Labs designs and develops websites, business systems, custom software, and intelligent digital solutions that help organizations work smarter and grow.",
  foundingYear: 2026,
  websiteUrl: "https://urjiko-website.vercel.app",

  // Contact Channels
  contact: {
    email: "urjikolabs@gmail.com",
    phoneEthio: "0976 601 074",
    phoneEthioRaw: "0976601074",
    phoneEthioDisplay: "+251 976 601 074",
    phoneEthioTel: "+251976601074",
    phoneSafari: "0714 124 250",
    phoneSafariRaw: "0714124250",
    phoneSafariDisplay: "+251 714 124 250",
    phoneSafariTel: "+251714124250",
    phoneDisplay: "+251 976 601 074 / +251 714 124 250",
    location: "Harar, Ethiopia",
  },

  // Primary Direct Messaging (URJIKO Support for 1-on-1 client inquiries)
  telegram: {
    url: "https://t.me/urjiko_support",
    username: "@urjiko_support",
    handle: "urjiko_support",
    label: "URJIKO Support",
    ctaText: "Message URJIKO Support",
  },

  // Telegram Public Channel & Community
  telegramChannel: {
    url: "https://t.me/urjikolabs",
    username: "@urjikolabs",
    handle: "urjikolabs",
    label: "Join Telegram Channel",
    ctaText: "Join Our Telegram Channel",
  },

  // Social & External Links
  socialLinks: {
    telegramSupport: "https://t.me/urjiko_support",
    telegramChannel: "https://t.me/urjikolabs",
    github: "https://github.com/urjiko-labs",
    linkedin: "https://www.linkedin.com/company/urjiko-labs/",
  },

  // Global Navigation Links
  navLinks: [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Solutions", path: "/solutions" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],

  // Footer Navigation Structure
  footerNav: {
    company: [
      { label: "Home", path: "/" },
      { label: "Services", path: "/services" },
      { label: "Solutions", path: "/solutions" },
      { label: "Portfolio", path: "/portfolio" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
    ],
    services: [
      { label: "Web Development", path: "/services#web-dev" },
      { label: "Business Systems", path: "/services#business-systems" },
      { label: "Custom Software", path: "/services#custom-software" },
      { label: "AI Solutions", path: "/services#ai-solutions" },
      { label: "Mobile Apps", path: "/services#mobile-app" },
      { label: "Maintenance & Support", path: "/services#maintenance" },
    ],
    connect: [
      { label: "Email", type: "email", href: "mailto:urjikolabs@gmail.com" },
      {
        label: "URJIKO Support",
        type: "telegram",
        href: "https://t.me/urjiko_support",
      },
      {
        label: "Telegram Channel",
        type: "telegram",
        href: "https://t.me/urjikolabs",
      },
      {
        label: "GitHub",
        type: "github",
        href: "https://github.com/urjiko-labs",
      },
      {
        label: "LinkedIn",
        type: "linkedin",
        href: "https://www.linkedin.com/company/urjiko-labs/",
      },
    ],
  },

  // Primary Action
  primaryCTA: {
    label: "Discuss Your Project",
    path: "/contact",
  },
};

/**
 * SEO & Route Metadata Configuration
 */
export const seoConfig = {
  defaultTitle: "URJIKO Labs — Building Practical Digital Solutions",
  titleTemplate: "%s | URJIKO Labs",
  defaultDescription:
    "URJIKO Labs builds high-reliability web applications, business management systems, custom software, and AI solutions.",
  siteUrl: "https://urjiko-website.vercel.app",

  routes: {
    "/": {
      title: "URJIKO Labs — Digital Solutions for Modern Businesses",
      description:
        "Practical digital products, web development, business management systems, and custom software engineering.",
      heading: "Building Practical Digital Products & Software Solutions",
    },
    "/services": {
      title:
        "Services — Website Development, Business Systems & Custom Software | URJIKO Labs",
      description:
        "Professional software development services in Ethiopia — website development, business management systems, custom software, AI solutions, and ongoing technical support for organizations.",
      heading: "Technology Built Around Your Business",
    },
    "/solutions": {
      title:
        "Solutions — Business, Education, Transport & Healthcare Software | URJIKO Labs",
      description:
        "Practical digital solutions for real-world problems — business operations, education management, transport systems, and healthcare platforms built by URJIKO Labs in Ethiopia.",
      heading: "Practical Software for Real-World Problems",
    },
    "/portfolio": {
      title: "Portfolio | URJIKO Labs",
      description:
        "Explore software solutions, business systems, and digital experiences developed by URJIKO Labs.",
      heading: "Software Built to Solve Real Problems.",
    },
    "/about": {
      title: "About URJIKO Labs",
      description:
        "Our mission, engineering philosophy, and commitment to practical, reliable digital transformation.",
      heading: "About URJIKO Labs",
    },
    "/contact": {
      title: "Contact URJIKO Labs",
      description:
        "Get in touch with URJIKO Labs to discuss your project, request a consultation, or connect via Telegram.",
      heading: "Discuss Your Project",
    },
    "/404": {
      title: "404 — Page Not Found | URJIKO Labs",
      description: "The requested page could not be found.",
      heading: "Page Not Found",
    },
  },
};
