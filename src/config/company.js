/**
 * URJIKO Labs — Central Company Configuration
 */

export const companyConfig = {
  name: 'URJIKO Labs',
  legalName: 'URJIKO Labs LLC',
  tagline: 'Practical digital solutions for modern businesses and organizations.',
  shortDescription: 'URJIKO Labs designs and develops websites, business systems, custom software, and intelligent digital solutions that help organizations work smarter and grow.',
  foundingYear: 2026,
  
  // Contact Channels
  contact: {
    email: 'urjikolabs@gmail.com',
    phone: null,
    phoneDisplay: null,
    location: 'Addis Ababa, Ethiopia',
  },

  // Primary Direct Messaging (Telegram only)
  telegram: {
    url: 'https://t.me/urjikolabs',
    username: '@urjikolabs',
    handle: 'urjikolabs',
    label: 'Message us on Telegram',
    ctaText: 'Message Us on Telegram',
  },

  // Social & External Links
  socialLinks: {
    telegram: 'https://t.me/urjikolabs',
    github: 'https://github.com/URJIKO-Labs',
    linkedin: null,
  },

  // Global Navigation Links
  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],

  // Footer Navigation Structure
  footerNav: {
    company: [
      { label: 'Home', path: '/' },
      { label: 'Services', path: '/services' },
      { label: 'Solutions', path: '/solutions' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
    ],
    services: [
      { label: 'Web Development', path: '/services' },
      { label: 'Business Systems', path: '/services' },
      { label: 'Custom Software', path: '/services' },
      { label: 'AI Solutions', path: '/services' },
    ],
    connect: [
      { label: 'Email', type: 'email', href: 'mailto:urjikolabs@gmail.com' },
      { label: 'Telegram', type: 'telegram', href: 'https://t.me/urjikolabs' },
      { label: 'GitHub', type: 'github', href: 'https://github.com/URJIKO-Labs' },
      { label: 'LinkedIn', type: 'linkedin', href: '#' },
    ],
  },

  // Primary Action
  primaryCTA: {
    label: 'Discuss Your Project',
    path: '/contact',
  },
};

/**
 * SEO & Route Metadata Configuration
 */
export const seoConfig = {
  defaultTitle: 'URJIKO Labs — Building Practical Digital Solutions',
  titleTemplate: '%s | URJIKO Labs',
  defaultDescription: 'URJIKO Labs builds high-reliability web applications, business management systems, custom software, and AI solutions.',
  siteUrl: 'https://urjikolabs.com',

  routes: {
    '/': {
      title: 'URJIKO Labs — Digital Solutions for Modern Businesses',
      description: 'Practical digital products, web development, business management systems, and custom software engineering.',
      heading: 'Building Practical Digital Products & Software Solutions',
    },
    '/services': {
      title: 'Services — URJIKO Labs',
      description: 'Explore our technology services: Web Development, Business Management Systems, Custom Software, and AI Intelligent Solutions.',
      heading: 'Engineering Capabilities & Services',
    },
    '/solutions': {
      title: 'Solutions — URJIKO Labs',
      description: 'Specialized digital solutions engineered for businesses, schools, clinics, hotels, and growing organizations.',
      heading: 'Specialized Industry Solutions',
    },
    '/portfolio': {
      title: 'Portfolio — URJIKO Labs',
      description: 'Selected case studies and digital systems engineered by URJIKO Labs for real-world impact.',
      heading: 'Selected Works & Case Studies',
    },
    '/about': {
      title: 'About URJIKO Labs',
      description: 'Our mission, engineering philosophy, and commitment to practical, reliable digital transformation.',
      heading: 'About URJIKO Labs',
    },
    '/contact': {
      title: 'Contact URJIKO Labs',
      description: 'Get in touch with URJIKO Labs to discuss your project, request a consultation, or connect via Telegram.',
      heading: 'Discuss Your Project',
    },
    '/404': {
      title: '404 — Page Not Found | URJIKO Labs',
      description: 'The requested page could not be found.',
      heading: 'Page Not Found',
    },
  },
};
