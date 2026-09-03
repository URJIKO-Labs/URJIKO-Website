/**
 * URJIKO Labs — Portfolio Project Data
 * Structured data for all projects, separated from presentation.
 */

export const featuredProjects = [
  {
    id: 'smartbiz',
    number: '01',
    name: 'SmartBiz ERP',
    category: 'Business Management',
    badge: 'BUSINESS MANAGEMENT',
    statusBadge: 'Active Project',
    tagline: 'Business Management & Inventory Solution',
    description: 'A practical business management system designed to help businesses manage important daily operations — sales, inventory, customers, and reporting — from one unified platform.',
    problem: 'Businesses often lack centralized visibility into sales activity, inventory levels, customer accounts, and daily transactions. Information is scattered across spreadsheets, paper records, and disconnected tools, making it harder to track performance and make informed decisions.',
    solution: 'SmartBiz brings core business operations into one practical system, providing a unified dashboard for sales, inventory, customers, credit management, and reporting — accessible from any device.',
    features: ['Dashboard & Analytics', 'Point of Sale (POS)', 'Inventory Management', 'Product Management', 'Customer Management', 'Credit & Balances', 'Sales Tracking', 'Profit & Reporting', 'Business Insights', 'Mobile-Friendly UI'],
    businessValue: ['Centralized business information', 'Better organization of daily operations', 'Easier sales and inventory monitoring', 'Clearer reporting and business insights', 'More efficient daily workflows'],
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST API', 'Authentication', 'Responsive UI'],
    solutionLink: '/solutions#business-solutions',
    solutionLabel: 'Business Solutions',
    layout: 'left',
  },
  {
    id: 'transport',
    number: '02',
    name: 'Transport Management System',
    category: 'Transport & Operations',
    badge: 'TRANSPORT & OPERATIONS',
    statusBadge: 'Management System',
    tagline: 'Transport & Operations Management Solution',
    description: 'A centralized digital system for organizing transport-related workflows, coordinating vehicles, drivers, requests, and administrative operations.',
    problem: 'Transport operations involve multiple requests, people, vehicles, drivers, and administrative workflows that can be difficult to coordinate manually. Lack of centralized information leads to inefficiencies and missed communication.',
    solution: 'A structured digital platform that centralizes transport operations — from request management and vehicle tracking to driver assignments and administrative reporting.',
    features: ['Authentication & Roles', 'Transport Requests', 'Vehicle Management', 'Driver Management', 'Operations Dashboard', 'Workflow Management', 'Administration Panel', 'Reports & Data'],
    businessValue: ['Centralized operations management', 'Better visibility into transport activities', 'Structured request and approval workflows', 'Easier administration and reporting', 'Improved coordination across teams'],
    technologies: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'REST API', 'Role-Based Access', 'Responsive UI'],
    solutionLink: '/solutions#transport-solutions',
    solutionLabel: 'Transport Solutions',
    layout: 'right',
  },
  {
    id: 'eduflow',
    number: '03',
    name: 'EduFlow',
    category: 'Education',
    badge: 'EDUCATION',
    statusBadge: 'MVP / Prototype',
    tagline: 'School Management Solution',
    description: 'An education management platform designed around common school administration workflows — organizing students, teachers, classes, attendance, grades, and scheduling.',
    problem: 'Schools manage complex information across students, teachers, classes, attendance records, grades, and schedules. Without a centralized system, administrative tasks become time-consuming and error-prone.',
    solution: 'A centralized school management platform that organizes key educational workflows into a clean, structured interface with role-based access for administrators and staff.',
    features: ['Student Management', 'Teacher Management', 'Class Organization', 'Attendance Tracking', 'Grade Management', 'Timetable & Scheduling', 'Administration Dashboard', 'Role-Based Access'],
    businessValue: ['Organized school information', 'Centralized administration', 'Easier student and teacher monitoring', 'Structured academic workflows', 'Improved visibility for school leaders'],
    technologies: ['React', 'JavaScript', 'Node.js', 'REST API', 'Authentication', 'Responsive UI'],
    solutionLink: '/solutions#education-solutions',
    solutionLabel: 'Education Solutions',
    layout: 'left',
  },
  {
    id: 'shegerhealth',
    number: '04',
    name: 'ShegerHealth',
    category: 'Healthcare',
    badge: 'HEALTHCARE',
    statusBadge: 'Demo / Concept',
    tagline: 'Digital Healthcare Platform Demo',
    description: 'A digital healthcare platform concept focused on structured workflows, management dashboards, and administrative tools for healthcare organizations.',
    problem: 'Healthcare organizations can benefit from better digital tools for organizing information, managing workflows, and improving administrative efficiency across departments.',
    solution: 'A digital healthcare platform concept that demonstrates structured workflows, management interfaces, and administrative tools — designed to explore how technology can support healthcare operations.',
    features: ['Digital Records', 'Patient Workflows', 'Management Dashboard', 'Forms & Data Entry', 'Navigation & Routing', 'Responsive Interface', 'Administrative Tools'],
    businessValue: ['Organized digital information', 'Structured healthcare workflows', 'Easier administrative management', 'Digital accessibility for staff', 'Clearer management interfaces'],
    technologies: ['JavaScript', 'React', 'REST API', 'Responsive UI'],
    solutionLink: '/solutions#healthcare-solutions',
    solutionLabel: 'Healthcare Solutions',
    disclaimer: 'ShegerHealth is a demonstration project exploring digital healthcare workflows. It is not a certified medical system.',
    layout: 'right',
  }
];

export const secondaryProjects = [
  {
    id: 'ethiobrew',
    name: 'EthioBrew',
    category: 'Business / Hospitality',
    description: 'A digital experience for a hospitality business — focused on product presentation, brand identity, and customer engagement.',
    capabilities: ['UX/UI Design', 'Responsive Design', 'Product Presentation', 'Business Workflows'],
  },
  {
    id: 'haramaya-gym',
    name: 'Haramaya Gym',
    category: 'Business Website',
    description: 'A professional web presence for a fitness business — service presentation, responsive layout, and clear calls to action.',
    capabilities: ['Professional Web Design', 'Responsive Layout', 'Service Presentation', 'CTAs'],
  },
  {
    id: 'abebe-bookstore',
    name: 'Abebe Book Store',
    category: 'Retail / E-commerce',
    description: 'A retail website focused on product presentation, browsing experience, and customer-facing workflows for a bookstore.',
    capabilities: ['Product Presentation', 'Retail Experience', 'Responsive Interface', 'Customer Workflows'],
  }
];

export const portfolioCapabilities = [
  'Business Management Systems',
  'Inventory Management',
  'Point of Sale',
  'Dashboards & Analytics',
  'Reporting',
  'Authentication',
  'Role-Based Access',
  'Workflow Automation',
  'Data Management',
  'Administration',
  'Responsive Web Applications',
  'API Integration'
];

export const industryAreas = [
  {
    name: 'Business',
    description: 'Business management, inventory, POS, customer workflows, and operational reporting.',
    project: 'SmartBiz ERP',
  },
  {
    name: 'Education',
    description: 'Student, teacher, attendance, grades, timetable, and school administration.',
    project: 'EduFlow',
  },
  {
    name: 'Transport',
    description: 'Operations, vehicles, drivers, requests, workflows, and reporting.',
    project: 'Transport Management',
  },
  {
    name: 'Healthcare',
    description: 'Digital workflows, records, dashboards, and administrative tools.',
    project: 'ShegerHealth',
  },
  {
    name: 'Retail & Hospitality',
    description: 'Customer-facing websites, product presentation, and digital experiences.',
    project: 'EthioBrew, Abebe Book Store',
  }
];
