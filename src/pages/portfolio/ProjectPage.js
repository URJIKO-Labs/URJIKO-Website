import { icons } from '../../components/common/Icons.js';
import { featuredProjects } from '../../config/projects.js';

/**
 * Visual Mockup for SmartBiz ERP — uses honest non-numerical labels
 */
function renderSmartBizVisual() {
  return `
    <div class="card card--lg" role="region" aria-label="SmartBiz ERP Dashboard Preview" style="background: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); border-radius: var(--radius-xl); padding: var(--space-5);">
      <div class="flex items-center justify-between pb-3 mb-4" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">SmartBiz Control Panel</span>
        </div>
        <span class="badge badge--blue text-xs font-semibold">Product Preview</span>
      </div>
      <div class="grid grid--2 gap-3 mb-4" style="grid-template-columns: repeat(2, 1fr); gap: var(--space-3); margin-bottom: var(--space-4);">
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
          <div class="text-xs text-muted mb-1 font-medium">Sales & POS</div>
          <div class="text-lg font-bold text-navy">Overview</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
          <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Inventory</div>
          <div class="text-lg font-bold" style="color: var(--color-blue);">Stock Status</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
          <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Customers</div>
          <div class="text-lg font-bold text-navy">CRM Module</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
          <div class="text-xs text-muted mb-1 font-medium">Reports</div>
          <div class="text-lg font-bold text-navy">Analytics</div>
        </div>
      </div>
      <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-navy">Core Modules</span>
          <span class="text-xs font-bold" style="color: var(--color-blue);">6 Integrated</span>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <span class="badge badge--outline text-xs">POS</span>
          <span class="badge badge--outline text-xs">Inventory</span>
          <span class="badge badge--outline text-xs">Sales</span>
          <span class="badge badge--outline text-xs">Customers</span>
          <span class="badge badge--outline text-xs">Reports</span>
          <span class="badge badge--outline text-xs">Dashboard</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Visual Mockup for Transport Management System
 */
function renderTransportVisual() {
  return `
    <div class="card card--lg" role="region" aria-label="Transport Operations Panel Preview" style="background: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); border-radius: var(--radius-xl); padding: var(--space-5);">
      <div class="flex items-center justify-between pb-3 mb-4" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">Transport Panel</span>
        </div>
        <span class="badge badge--navy text-xs font-semibold">Product Preview</span>
      </div>
      <div class="grid gap-3 mb-4" style="grid-template-columns: repeat(3, 1fr); gap: var(--space-3); margin-bottom: var(--space-4);">
        <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Vehicles</div>
          <div class="text-lg font-bold text-navy">Roster</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Drivers</div>
          <div class="text-lg font-bold text-navy">Assignments</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Requests</div>
          <div class="text-lg font-bold" style="color: var(--color-blue);">Queue</div>
        </div>
      </div>
      <div class="p-3 mb-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
        <div class="text-xs font-semibold text-navy mb-2">Fleet Status</div>
        <div class="flex flex-col gap-1.5">
          <div class="flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span style="width: 6px; height: 6px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
              <span class="font-medium text-navy">In Transit</span>
            </div>
            <span class="badge badge--outline text-xs">Active</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span style="width: 6px; height: 6px; border-radius: 50%; background-color: var(--color-navy); display: inline-block;"></span>
              <span class="font-medium text-navy">Ready</span>
            </div>
            <span class="badge badge--outline text-xs">Available</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span style="width: 6px; height: 6px; border-radius: 50%; background-color: var(--color-text-muted); display: inline-block;"></span>
              <span class="font-medium text-muted">Maintenance</span>
            </div>
            <span class="badge badge--outline text-xs">Scheduled</span>
          </div>
        </div>
      </div>
      <div class="p-3 flex items-center justify-between" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
        <div class="flex items-center gap-2">
          <span class="badge badge--navy text-xs">DISPATCH</span>
          <span class="text-xs font-medium text-navy">Route Management</span>
        </div>
        <span class="text-xs font-bold" style="color: var(--color-blue);">Workflow</span>
      </div>
    </div>
  `;
}

/**
 * Visual Mockup for EduFlow School Management
 */
function renderEduFlowVisual() {
  return `
    <div class="card card--lg" role="region" aria-label="EduFlow School Dashboard Preview" style="background: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); border-radius: var(--radius-xl); padding: var(--space-5);">
      <div class="flex items-center justify-between pb-3 mb-4" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">EduFlow Dashboard</span>
        </div>
        <span class="badge badge--blue text-xs font-semibold">MVP</span>
      </div>
      <div class="grid gap-3 mb-4" style="grid-template-columns: repeat(3, 1fr); gap: var(--space-3); margin-bottom: var(--space-4);">
        <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Students</div>
          <div class="text-lg font-bold text-navy">Profiles</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Teachers</div>
          <div class="text-lg font-bold text-navy">Faculty</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Classes</div>
          <div class="text-lg font-bold text-navy">Sections</div>
        </div>
      </div>
      <div class="p-3 mb-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-navy">Attendance Tracking</span>
          <span class="text-xs font-bold" style="color: var(--color-blue);">Daily Logs</span>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <span class="badge badge--outline text-xs">Present</span>
          <span class="badge badge--outline text-absent">Absent</span>
          <span class="badge badge--outline text-xs">Leave</span>
        </div>
      </div>
      <div class="p-3 flex items-center justify-between" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
        <div class="flex items-center gap-2">
          <span class="badge badge--navy text-xs">ACADEMIC</span>
          <span class="text-xs font-medium text-navy">Grades & Timetable</span>
        </div>
        <span class="text-xs font-bold" style="color: var(--color-blue);">Synced</span>
      </div>
    </div>
  `;
}

/**
 * Visual Mockup for ShegerHealth
 */
function renderShegerHealthVisual() {
  return `
    <div class="card card--lg" role="region" aria-label="ShegerHealth Healthcare Dashboard Preview" style="background: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); border-radius: var(--radius-xl); padding: var(--space-5);">
      <div class="flex items-center justify-between pb-3 mb-4" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">ShegerHealth Demo</span>
        </div>
        <span class="badge badge--navy text-xs font-semibold">Demo</span>
      </div>
      <div class="grid gap-3 mb-4" style="grid-template-columns: repeat(3, 1fr); gap: var(--space-3); margin-bottom: var(--space-4);">
        <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Patients</div>
          <div class="text-lg font-bold text-navy">Profiles</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Records</div>
          <div class="text-lg font-bold text-navy">Digital</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Workflows</div>
          <div class="text-lg font-bold" style="color: var(--color-blue);">Structured</div>
        </div>
      </div>
      <div class="p-3 mb-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
        <div class="text-xs font-semibold text-navy mb-2">Clinical Modules</div>
        <div class="flex flex-col gap-1.5">
          <div class="flex items-center justify-between text-xs py-1" style="border-bottom: 1px solid var(--color-border-subtle);">
            <span class="text-navy font-medium">Patient Intake</span>
            <span class="badge badge--outline text-xs">Standardized</span>
          </div>
          <div class="flex items-center justify-between text-xs py-1" style="border-bottom: 1px solid var(--color-border-subtle);">
            <span class="text-navy font-medium">Lab Requests</span>
            <span class="badge badge--outline text-xs">Connected</span>
          </div>
          <div class="flex items-center justify-between text-xs py-1">
            <span class="text-navy font-medium">Pharmacy Logs</span>
            <span class="badge badge--outline text-xs">Structured</span>
          </div>
        </div>
      </div>
      <div class="p-3 flex items-center justify-between" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
        <div class="flex items-center gap-2">
          <span style="width: 6px; height: 6px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-xs font-medium text-navy">Role-Based Access</span>
        </div>
        <span class="text-xs font-bold" style="color: var(--color-blue);">Enforced</span>
      </div>
    </div>
  `;
}

/**
 * Dispatches the appropriate visual mockup based on project ID
 */
function renderProjectVisual(projectId) {
  switch (projectId) {
    case 'smartbiz':
      return renderSmartBizVisual();
    case 'transport':
      return renderTransportVisual();
    case 'eduflow':
      return renderEduFlowVisual();
    case 'shegerhealth':
      return renderShegerHealthVisual();
    default:
      return '';
  }
}

/**
 * Render a dedicated project detail page
 * @param {string} projectId - The project ID (smartbiz, transport, eduflow, shegerhealth)
 */
export function renderProjectPage(projectId) {
  const project = featuredProjects.find((p) => p.id === projectId);

  if (!project) {
    return `
      <div class="container section text-center">
        <div style="max-width: 32rem; margin: 0 auto; padding: var(--space-12) 0;">
          <span class="badge badge--navy mb-4">Not Found</span>
          <h1 style="font-size: var(--font-size-4xl); color: var(--color-navy); margin-bottom: var(--space-2);">Project Not Found</h1>
          <p class="text-secondary mb-8">
            The project you're looking for doesn't exist.
          </p>
          <a href="/portfolio" data-link class="btn btn--primary">Back to Portfolio</a>
        </div>
      </div>
    `;
  }

  const projectVisuals = {
    smartbiz: `${import.meta.env.BASE_URL}images/project-smartbiz.svg`,
    transport: `${import.meta.env.BASE_URL}images/project-transport.svg`,
    eduflow: `${import.meta.env.BASE_URL}images/project-eduflow.svg`,
    shegerhealth: `${import.meta.env.BASE_URL}images/project-shegerhealth.svg`,
  };

  const projectStatuses = {
    smartbiz: "Product Preview",
    transport: "Product Preview",
    eduflow: "MVP",
    shegerhealth: "Demo / Concept",
  };

  const projectScopes = {
    smartbiz: "UI/UX Design, Frontend Development, Backend Development, Database Integration, Responsive Design",
    transport: "UI/UX Design, Frontend Development, Backend Development, Role-Based Access, Responsive Design",
    eduflow: "UI/UX Design, Frontend Development, Backend Development, Authentication, Responsive Design",
    shegerhealth: "UI/UX Design, Frontend Development, Workflow Design, Dashboard Design",
  };

  const visual = projectVisuals[project.id];
  const status = projectStatuses[project.id];
  const scope = projectScopes[project.id];

  const styles = `
    <style>
      @media (min-width: 1024px) {
        .project-detail-layout { grid-template-columns: 1fr 1fr !important; }
        .project-detail-layout .project-detail-visual { order: 2; }
        .project-detail-layout .project-detail-content { order: 1; }
      }
      @media (max-width: 768px) {
        .project-detail-visual { order: 1; }
        .project-detail-layout { gap: var(--space-6) !important; }
      }
    </style>
  `;

  return `
    ${styles}
    <!-- Breadcrumbs -->
    <div class="container" style="padding-top: var(--space-6);">
      <nav aria-label="Breadcrumb">
        <ol class="flex items-center gap-2 text-sm text-muted" style="list-style: none; padding: 0; margin: 0;">
          <li><a href="/" data-link style="color: var(--color-blue); text-decoration: none;">Home</a></li>
          <li aria-hidden="true" style="color: var(--color-border);">/</li>
          <li><a href="/portfolio" data-link style="color: var(--color-blue); text-decoration: none;">Portfolio</a></li>
          <li aria-hidden="true" style="color: var(--color-border);">/</li>
          <li aria-current="page" class="text-navy font-medium">${project.name}</li>
        </ol>
      </nav>
    </div>

    <!-- Project Header -->
    <section class="section" aria-labelledby="project-detail-heading" style="padding-top: var(--space-4); padding-bottom: var(--space-6);">
      <div class="container">
        <div class="flex items-center gap-2 mb-3">
          <span class="badge badge--outline text-xs">${project.category}</span>
          <span class="badge badge--blue text-xs">${status}</span>
        </div>
        <h1 id="project-detail-heading" style="font-size: clamp(1.75rem, 4vw, 2.75rem); font-weight: 700; color: var(--color-navy); margin-bottom: var(--space-3); line-height: 1.2;">
          ${project.name}
        </h1>
        <p class="text-secondary" style="font-size: var(--font-size-lg); max-width: 48rem; line-height: 1.6;">
          ${project.tagline}
        </p>
      </div>
    </section>

    <!-- Main Product Visual -->
    <section style="padding-top: 0; padding-bottom: var(--space-6);">
      <div class="container">
        ${visual ? `
          <div style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-xl); padding: var(--space-5); text-align: center;">
            <img 
              src="${visual}" 
              alt="${project.name} — ${project.tagline}" 
              width="800" 
              height="500" 
              loading="lazy"
              style="width: 100%; max-width: 640px; height: auto; border-radius: var(--radius-md);"
            >
            <div style="margin-top: var(--space-3);">
              <span class="text-xs text-muted">${project.name} — Product Preview</span>
            </div>
          </div>
        ` : ''}
      </div>
    </section>

    <!-- Two Column: Content + Visual -->
    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="grid items-start project-detail-layout" style="grid-template-columns: 1fr; gap: var(--space-8);">
          <!-- Content -->
          <div class="project-detail-content">
            <p class="text-secondary mb-8" style="line-height: 1.7; font-size: var(--font-size-md);">
              ${project.description}
            </p>

            <!-- The Problem -->
            <div class="mb-8">
              <h2 class="text-navy font-semibold mb-3" style="font-size: var(--font-size-xl);">The Problem</h2>
              <p class="text-secondary" style="line-height: 1.7;">${project.problem}</p>
            </div>

            <!-- The Solution -->
            <div class="mb-8">
              <h2 class="text-navy font-semibold mb-3" style="font-size: var(--font-size-xl);">The Solution</h2>
              <p class="text-secondary" style="line-height: 1.7;">${project.solution}</p>
            </div>

            <!-- Business Value -->
            <div class="mb-8">
              <h2 class="text-navy font-semibold mb-4" style="font-size: var(--font-size-xl);">Intended Business Value</h2>
              <ul style="list-style: none; padding: 0; margin: 0;" class="flex flex-col gap-2">
                ${project.businessValue.map((v) => `<li class="flex items-start gap-3 text-secondary"><span style="color: var(--color-blue); margin-top: 4px; font-size: 1rem;">✓</span><span style="line-height: 1.6; font-size: 0.95rem;">${v}</span></li>`).join('')}
              </ul>
            </div>

            <!-- Disclaimer -->
            ${project.disclaimer ? `<p class="text-sm text-muted mb-6" style="font-style: italic; padding: var(--space-3); background: var(--color-bg-soft); border-radius: var(--radius-sm); border-left: 3px solid var(--color-blue);">${project.disclaimer}</p>` : ''}

            <!-- Key Features -->
            <div class="mb-8">
              <h2 class="text-navy font-semibold mb-4" style="font-size: var(--font-size-xl);">Key Features</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: var(--space-2);">
                ${project.features.map((f) => `<div class="flex items-center gap-2 p-2.5" style="background: var(--color-white); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm);"><span style="width: 5px; height: 5px; border-radius: 50%; background: var(--color-blue); flex-shrink: 0;"></span><span class="text-sm text-navy">${f}</span></div>`).join('')}
              </div>
            </div>

            <!-- Project Scope -->
            ${scope ? `
            <div class="mb-8">
              <h2 class="text-navy font-semibold mb-4" style="font-size: var(--font-size-xl);">Scope</h2>
              <div class="flex flex-wrap gap-1.5">
                ${scope.split(', ').map((s) => `<span class="badge badge--outline text-xs">${s}</span>`).join('')}
              </div>
            </div>
            ` : ''}

            <!-- Technologies -->
            <div class="mb-8">
              <h2 class="text-navy font-semibold mb-4" style="font-size: var(--font-size-xl);">Technologies</h2>
              <div class="flex flex-wrap gap-1.5">
                ${project.technologies.map((t) => `<span class="badge badge--outline text-xs">${t}</span>`).join('')}
              </div>
            </div>

            <!-- Current Status -->
            <div class="mb-8" style="padding: var(--space-4); background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
              <h3 class="text-navy font-semibold mb-2" style="font-size: var(--font-size-md);">Current Status</h3>
              <span class="badge badge--blue">${status}</span>
            </div>

            <!-- CTAs -->
            <div class="flex flex-wrap gap-4">
              <a href="/contact" data-link class="btn btn--primary">
                <span>Discuss Your Project</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
              <a href="/portfolio" data-link class="btn btn--secondary">Back to Portfolio</a>
            </div>
          </div>

          <!-- Visual -->
          <div class="project-detail-visual">
            ${renderProjectVisual(project.id)}
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section" style="background: var(--color-navy); color: var(--color-white); padding-top: var(--space-10); padding-bottom: var(--space-10);">
      <div class="container text-center">
        <h2 style="font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; margin-bottom: var(--space-3); color: var(--color-white);">
          Like What You See?
        </h2>
        <p style="font-size: var(--font-size-md); color: rgba(255, 255, 255, 0.85); margin-bottom: var(--space-5); max-width: 36rem; margin-left: auto; margin-right: auto; line-height: 1.6;">
          Let's discuss how we can build a practical solution around your organization's workflow.
        </p>
        <a href="/contact" data-link class="btn btn--lg" style="background: var(--color-white); color: var(--color-navy) !important; border: 1px solid var(--color-white); font-weight: 600;">
          <span style="color: var(--color-navy) !important;">Discuss Your Project</span>
          <span style="color: var(--color-navy) !important;">${icons.arrowRight('w-4 h-4')}</span>
        </a>
      </div>
    </section>
  `;
}
