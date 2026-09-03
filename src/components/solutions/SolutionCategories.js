import { icons } from '../common/Icons.js';

/**
 * Industry Solution Categories Data
 * 4 categories: Business, Education, Transport, Healthcare
 */
const SOLUTION_CATEGORIES = [
  {
    id: 'business-solutions',
    badge: 'BUSINESS SOLUTIONS',
    title: 'Business Solutions',
    description: 'Tools that help businesses manage operations, sales, customers, inventory, and decision-making more efficiently.',
    bgClass: 'bg-white',
    gridClass: 'grid--3',
    cards: [
      {
        title: 'Inventory Management',
        description: 'Real-time stock tracking, multi-location inventory, automated reorder alerts, and supplier sync.'
      },
      {
        title: 'Point of Sale',
        description: 'Fast, intuitive checkout interface with receipt printing, payment tracking, and barcode support.'
      },
      {
        title: 'Customer Management',
        description: 'Centralized customer directory with transaction histories, preferences, and credit monitoring.'
      },
      {
        title: 'Sales Management',
        description: 'Pipeline oversight, invoice creation, recurring billing, and real-time revenue performance metrics.'
      },
      {
        title: 'Business Analytics',
        description: 'Custom financial reports, sales trends, inventory turnover analysis, and visual dashboards.'
      }
    ],
    featured: {
      name: 'SmartBiz ERP',
      badgeClass: 'badge--blue',
      badgeText: 'Core Product',
      link: '/portfolio'
    },
    cta: {
      label: 'Explore Business',
      link: '/portfolio'
    }
  },
  {
    id: 'education-solutions',
    badge: 'EDUCATION SOLUTIONS',
    title: 'Education Solutions',
    description: 'Digital systems that help schools and educational organizations manage students, teachers, classes, attendance, grades, and academic workflows.',
    bgClass: 'bg-soft',
    gridClass: 'grid--3',
    cards: [
      {
        title: 'Student Management',
        description: 'Complete student profiles, enrollment tracking, demographic records, and academic history.'
      },
      {
        title: 'Teacher Management',
        description: 'Faculty directories, subject assignments, department allocations, and teaching schedules.'
      },
      {
        title: 'Attendance',
        description: 'Digital daily attendance recording for students and staff with automated absence notifications.'
      },
      {
        title: 'Grades',
        description: 'Comprehensive gradebook management, automated report card generation, and exam assessments.'
      },
      {
        title: 'Timetable',
        description: 'Automated class and room scheduling with conflict resolution and teacher availability tracking.'
      }
    ],
    featured: {
      name: 'EduFlow',
      badgeClass: 'badge--navy',
      badgeText: 'Education Platform',
      link: '/portfolio'
    },
    cta: {
      label: 'Explore Education',
      link: '/portfolio'
    }
  },
  {
    id: 'transport-solutions',
    badge: 'TRANSPORT SOLUTIONS',
    title: 'Transport Solutions',
    description: 'Operational systems that help transport organizations coordinate vehicles, drivers, requests, workflows, and reporting.',
    bgClass: 'bg-white',
    gridClass: 'grid--3',
    cards: [
      {
        title: 'Vehicle Management',
        description: 'Fleet registry with maintenance schedules, inspection logs, insurance records, and vehicle health.'
      },
      {
        title: 'Driver Management',
        description: 'Driver rosters, license compliance, shift assignments, and trip performance histories.'
      },
      {
        title: 'Transport Requests',
        description: 'Digital dispatch workflows, trip approvals, passenger allocations, and request tracking.'
      },
      {
        title: 'Operations',
        description: 'Live operational control, daily trip execution monitoring, and incident management workflows.'
      },
      {
        title: 'Reports',
        description: 'Automated fuel consumption tracking, mileage logs, operational cost reports, and fleet analytics.'
      }
    ],
    featured: {
      name: 'Transport Management',
      badgeClass: 'badge--navy',
      badgeText: 'Operations System',
      link: '/portfolio'
    },
    cta: {
      label: 'Explore Transport',
      link: '/portfolio'
    }
  },
  {
    id: 'healthcare-solutions',
    badge: 'HEALTHCARE SOLUTIONS',
    title: 'Healthcare Solutions',
    description: 'Digital platforms designed to support healthcare workflows, records, management, and operational visibility.',
    bgClass: 'bg-soft',
    gridClass: 'grid--2',
    cards: [
      {
        title: 'Digital Records',
        description: 'Secure digital patient charts, medical history archives, treatment notes, and lab records.'
      },
      {
        title: 'Patient Workflows',
        description: 'Streamlined appointment scheduling, triage queues, intake workflows, and patient check-in.'
      },
      {
        title: 'Management Dashboards',
        description: 'Facility occupancy rates, department performance, staff coverage, and service analytics.'
      }
    ],
    featured: {
      name: 'ShegerHealth',
      badgeClass: 'badge--blue',
      badgeText: 'Project Concept',
      link: '/portfolio',
      disclaimer: 'ShegerHealth is a demonstration project exploring digital healthcare workflows.'
    },
    cta: {
      label: 'Explore Healthcare',
      link: '/portfolio'
    }
  }
];

/**
 * Render Industry Solution Categories
 * Renders 4 industry sections: Business, Education, Transport, Healthcare
 * with compact cards, featured project indicators, and category CTA links.
 */
export function renderSolutionCategories() {
  return SOLUTION_CATEGORIES.map(category => `
    <section 
      id="${category.id}" 
      class="section ${category.bgClass}" 
      aria-labelledby="${category.id}-heading"
      style="border-top: 1px solid var(--color-border-subtle);"
    >
      <div class="container">
        
        <!-- Left-aligned Section Heading -->
        <div class="section-heading mb-8">
          <div class="mb-3">
            <span class="badge badge--blue font-semibold">${category.badge}</span>
          </div>
          <h2 id="${category.id}-heading" class="section-heading__title">${category.title}</h2>
          <p class="section-heading__subtitle text-balance">
            ${category.description}
          </p>
        </div>

        <!-- Compact Solution Cards Grid -->
        <div class="grid ${category.gridClass} gap-4 mb-8">
          ${category.cards.map(card => `
            <div class="card" style="background: var(--color-white); border: 1px solid var(--color-border-subtle); padding: var(--space-5);">
              <div class="flex items-center gap-2 mb-2">
                <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block; flex-shrink: 0;" aria-hidden="true"></span>
                <h4 class="text-navy font-semibold" style="margin: 0; font-size: var(--font-size-base); line-height: 1.4;">
                  ${card.title}
                </h4>
              </div>
              <p class="text-secondary text-sm mb-0" style="line-height: 1.5;">
                ${card.description}
              </p>
            </div>
          `).join('')}
        </div>

        <!-- Featured Project Indicator -->
        <div style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md); padding: var(--space-4) var(--space-5); margin-bottom: var(--space-6);">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex flex-wrap items-center gap-3">
              <span class="badge ${category.featured.badgeClass} font-semibold">${category.featured.badgeText}</span>
              <span class="font-semibold text-navy" style="font-size: var(--font-size-base);">${category.featured.name}</span>
            </div>
            <a href="${category.featured.link}" data-link class="card__link font-semibold flex items-center gap-1" style="margin-top: 0; font-size: var(--font-size-sm);">
              <span>View Project</span>
              ${icons.arrowRight('w-4 h-4')}
            </a>
          </div>
          ${category.featured.disclaimer ? `
            <p class="text-xs text-muted mb-0 mt-3 pt-3" style="border-top: 1px solid rgba(7, 87, 184, 0.12); line-height: 1.5;">
              ${category.featured.disclaimer}
            </p>
          ` : ''}
        </div>

        <!-- Category CTA Link -->
        <div class="flex items-center">
          <a href="${category.cta.link}" data-link class="btn btn--secondary flex items-center gap-2">
            <span>${category.cta.label}</span>
            ${icons.arrowRight('w-4 h-4')}
          </a>
        </div>

      </div>
    </section>
  `).join('\n');
}
