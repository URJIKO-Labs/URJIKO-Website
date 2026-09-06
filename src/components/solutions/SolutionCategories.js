import { icons } from '../common/Icons.js';

/**
 * Solution Categories — Problem-First Structure
 * Each category: Problem → Solution → Related Project
 */
const SOLUTION_CATEGORIES = [
  {
    id: 'business-solutions',
    badge: 'BUSINESS OPERATIONS',
    title: 'Business Management Solutions',
    problem: 'Disconnected sales and inventory, manual reporting, scattered customer records, poor operational visibility.',
    solution: 'ERP, POS, inventory management, customer management, dashboards, and reporting systems.',
    cards: [
      { title: 'ERP & POS', description: 'Centralized point of sale and enterprise resource planning.' },
      { title: 'Inventory Management', description: 'Real-time stock tracking and automated alerts.' },
      { title: 'Customer Management', description: 'Centralized customer directory with transaction histories.' },
      { title: 'Dashboards & Reports', description: 'Business intelligence and visual performance metrics.' },
    ],
    project: {
      name: 'SmartBiz ERP',
      badge: 'BUSINESS',
      badgeClass: 'badge--blue',
      link: '/portfolio/smartbiz',
    },
  },
  {
    id: 'transport-solutions',
    badge: 'TRANSPORT & OPERATIONS',
    title: 'Transport Management Solutions',
    problem: 'Manual requests, difficult workflow tracking, poor operational visibility, role and approval complexity.',
    solution: 'Transport management, request workflows, vehicle and driver coordination, administrative dashboards.',
    cards: [
      { title: 'Transport Requests', description: 'Digital dispatch workflows and trip approvals.' },
      { title: 'Vehicle & Driver Management', description: 'Fleet registry and driver coordination.' },
      { title: 'Operations Dashboard', description: 'Live operational control and monitoring.' },
      { title: 'Reports & Administration', description: 'Automated reporting and administrative tools.' },
    ],
    project: {
      name: 'Transport Management',
      badge: 'TRANSPORT',
      badgeClass: 'badge--navy',
      link: '/portfolio/transport',
    },
  },
  {
    id: 'education-solutions',
    badge: 'EDUCATION',
    title: 'Education Management Solutions',
    problem: 'Student records across spreadsheets, manual attendance, grade tracking complexity, timetable conflicts.',
    solution: 'Student management, teacher management, attendance, grades, timetables, and administration systems.',
    cards: [
      { title: 'Student & Teacher Management', description: 'Complete profiles, enrollment, and faculty directories.' },
      { title: 'Attendance Tracking', description: 'Digital daily attendance with notifications.' },
      { title: 'Grade Management', description: 'Gradebook and automated report card generation.' },
      { title: 'Timetable & Scheduling', description: 'Automated class scheduling with conflict resolution.' },
    ],
    project: {
      name: 'EduFlow',
      badge: 'EDUCATION',
      badgeClass: 'badge--blue',
      link: '/portfolio/eduflow',
    },
  },
  {
    id: 'healthcare-solutions',
    badge: 'HEALTHCARE',
    title: 'Healthcare & Digital Platforms',
    problem: 'Paper-based records, inefficient patient workflows, limited management visibility, manual administrative tasks.',
    solution: 'Digital records, patient workflows, management dashboards, and administrative tools.',
    cards: [
      { title: 'Digital Records', description: 'Secure digital patient charts and medical history.' },
      { title: 'Patient Workflows', description: 'Appointment scheduling and intake workflows.' },
      { title: 'Management Dashboards', description: 'Facility performance and department analytics.' },
    ],
    project: {
      name: 'ShegerHealth',
      badge: 'HEALTHCARE',
      badgeClass: 'badge--navy',
      link: '/portfolio/shegerhealth',
      disclaimer: 'ShegerHealth is a demonstration project exploring digital healthcare workflows.',
    },
  },
];

/**
 * Render Solution Categories
 */
export function renderSolutionCategories() {
  return SOLUTION_CATEGORIES.map((category, index) => {
    const bgClass = index % 2 === 0 ? 'bg-white' : 'bg-soft';
    
    return `
      <section 
        id="${category.id}" 
        class="section ${bgClass}" 
        aria-labelledby="${category.id}-heading"
        style="border-top: 1px solid var(--color-border-subtle); padding-top: var(--space-8); padding-bottom: var(--space-8);"
      >
        <div class="container">
          
          <div class="grid solution-category-grid" style="gap: var(--space-8); align-items: start;">
            
            <!-- Left: Problem & Solution -->
            <div>
              <div class="section-heading" style="margin-bottom: var(--space-4);">
                <span class="badge badge--blue font-semibold" style="font-size: 0.65rem;">${category.badge}</span>
                <h2 id="${category.id}-heading" class="section-heading__title" style="font-size: clamp(1.25rem, 2.5vw, 1.5rem); margin-top: var(--space-3);">${category.title}</h2>
              </div>

              <!-- Problem -->
              <div style="margin-bottom: var(--space-4);">
                <h3 style="font-size: var(--font-size-sm); font-weight: 600; color: var(--color-navy); margin-bottom: var(--space-2);">Common Problems</h3>
                <p class="text-secondary" style="font-size: var(--font-size-sm); line-height: 1.6; margin-bottom: 0;">${category.problem}</p>
              </div>

              <!-- Solution -->
              <div style="margin-bottom: var(--space-4);">
                <h3 style="font-size: var(--font-size-sm); font-weight: 600; color: var(--color-navy); margin-bottom: var(--space-2);">What URJIKO Can Build</h3>
                <p class="text-secondary" style="font-size: var(--font-size-sm); line-height: 1.6; margin-bottom: 0;">${category.solution}</p>
              </div>

              <!-- Related Project -->
              <div style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md); padding: var(--space-3) var(--space-4);">
                <div class="flex flex-wrap items-center justify-between gap-3">
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="badge ${category.project.badgeClass} text-xs">${category.project.badge}</span>
                    <span class="font-semibold text-navy" style="font-size: var(--font-size-sm);">${category.project.name}</span>
                  </div>
                  <a href="${category.project.link}" data-link class="flex items-center gap-1" style="font-size: var(--font-size-xs); color: var(--color-blue); text-decoration: none; font-weight: 600;">
                    <span>View Project</span>
                    ${icons.arrowRight('w-3 h-3')}
                  </a>
                </div>
                ${category.project.disclaimer ? `
                  <p class="text-xs text-muted mb-0 mt-2 pt-2" style="border-top: 1px solid rgba(7, 87, 184, 0.12); line-height: 1.5;">
                    ${category.project.disclaimer}
                  </p>
                ` : ''}
              </div>
            </div>

            <!-- Right: Solution Cards -->
            <div class="flex flex-col gap-3">
              ${category.cards.map(card => `
                <div class="card" style="background: var(--color-white); border: 1px solid var(--color-border-subtle); padding: var(--space-4);">
                  <div class="flex items-center gap-2 mb-1">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background-color: var(--color-blue); display: inline-block; flex-shrink: 0;" aria-hidden="true"></span>
                    <h3 class="text-navy font-semibold" style="margin: 0; font-size: var(--font-size-sm); line-height: 1.4;">
                      ${card.title}
                    </h3>
                  </div>
                  <p class="text-secondary mb-0" style="line-height: 1.5; font-size: var(--font-size-xs);">
                    ${card.description}
                  </p>
                </div>
              `).join('')}
            </div>

          </div>

        </div>
      </section>
    `;
  }).join('\n');
}
