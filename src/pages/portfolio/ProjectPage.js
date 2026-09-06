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
 * Render a dedicated project detail page (Case Study Format)
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
    smartbiz: 'Product Preview',
    transport: 'Product Preview',
    eduflow: 'MVP',
    shegerhealth: 'Demo / Concept',
  };

  const projectScopes = {
    smartbiz: 'UX/UI, Frontend, Backend, Database',
    transport: 'UX/UI, Frontend, Backend, Access Control',
    eduflow: 'UX/UI, Frontend, Backend, Authentication',
    shegerhealth: 'UX/UI, Workflow Design',
  };

  const visual = projectVisuals[project.id];
  const status = projectStatuses[project.id];
  const scope = projectScopes[project.id];

  return `
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

    <!-- Case Study Hero -->
    <section class="section" aria-labelledby="project-detail-heading" style="padding-top: var(--space-8); padding-bottom: var(--space-8);">
      <div class="container">
        <div class="grid" style="grid-template-columns: 1fr; gap: var(--space-10); @media(min-width: 900px) { grid-template-columns: 1.1fr 0.9fr; }">
          
          <div class="flex flex-col justify-center">
            <div class="flex items-center gap-2 mb-4">
              <span class="badge ${status === 'Live' ? 'badge--success' : 'badge--blue'} text-xs">${status}</span>
              <span class="badge badge--outline text-xs">${project.category}</span>
            </div>
            
            <h1 id="project-detail-heading" style="font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 800; color: var(--color-navy); margin-bottom: var(--space-4); line-height: 1.1;">
              ${project.name}
            </h1>
            
            <p class="text-secondary mb-6" style="font-size: clamp(1.1rem, 2vw, 1.35rem); font-weight: 500; color: var(--color-navy); line-height: 1.5;">
              ${project.tagline}
            </p>
            
            <p class="text-secondary mb-8" style="font-size: 1.05rem; line-height: 1.6; max-width: 36rem;">
              ${project.description}
            </p>
            
            <!-- Project Facts Row -->
            <div class="grid grid--2 gap-4" style="border-top: 1px solid var(--color-border-subtle); border-bottom: 1px solid var(--color-border-subtle); padding: var(--space-4) 0; margin-bottom: var(--space-8);">
              <div>
                <div class="text-xs text-muted font-semibold uppercase tracking-wide mb-1">Industry</div>
                <div class="text-sm font-medium text-navy">${project.category}</div>
              </div>
              <div>
                <div class="text-xs text-muted font-semibold uppercase tracking-wide mb-1">Scope</div>
                <div class="text-sm font-medium text-navy">${scope}</div>
              </div>
              <div>
                <div class="text-xs text-muted font-semibold uppercase tracking-wide mb-1">Status</div>
                <div class="text-sm font-medium text-navy">${status}</div>
              </div>
              <div>
                <div class="text-xs text-muted font-semibold uppercase tracking-wide mb-1">Platform</div>
                <div class="text-sm font-medium text-navy">Responsive Web App</div>
              </div>
            </div>

            <div class="flex flex-wrap gap-4 items-center">
              <a href="/contact" data-link class="btn btn--primary">
                <span>Discuss a similar project</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
            </div>
          </div>
          
          <div class="flex items-center justify-center">
            ${
              visual
                ? `
              <div style="background: var(--color-bg-soft); border-radius: var(--radius-xl); border: 1px solid var(--color-border); padding: var(--space-4); width: 100%; box-shadow: var(--shadow-md);">
                <img src="${visual}" alt="${project.name}" style="width: 100%; height: auto; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
                <div class="text-center mt-3 text-xs text-muted">Primary interface overview</div>
              </div>
            `
                : ''
            }
          </div>

        </div>
      </div>
    </section>

    <!-- The Challenge & Workflow -->
    <section class="section" style="background: var(--color-bg-soft); padding-top: var(--space-10); padding-bottom: var(--space-10);">
      <div class="container" style="max-width: 56rem;">
        
        <div class="mb-12">
          <h2 class="text-navy" style="font-size: clamp(1.75rem, 3vw, 2.25rem); font-weight: 700; margin-bottom: var(--space-4);">The Challenge</h2>
          <p class="text-secondary" style="font-size: 1.1rem; line-height: 1.7;">
            ${project.problem}
          </p>
        </div>

        <div class="mb-12">
          <h2 class="text-navy" style="font-size: clamp(1.75rem, 3vw, 2.25rem); font-weight: 700; margin-bottom: var(--space-6);">Workflow Transformation</h2>
          
          <div style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-6); box-shadow: var(--shadow-sm);">
            
            <div class="grid" style="grid-template-columns: 1fr; gap: var(--space-4); @media(min-width: 768px) { grid-template-columns: 1fr auto 1fr; }">
              <!-- Before -->
              <div>
                <div class="badge badge--outline mb-3">BEFORE</div>
                <ul class="text-secondary text-sm flex flex-col gap-3" style="list-style: none; padding: 0; margin: 0;">
                  <li class="flex items-start gap-2"><span class="text-error mt-0.5">✕</span> Disconnected data sources</li>
                  <li class="flex items-start gap-2"><span class="text-error mt-0.5">✕</span> Manual reporting & calculations</li>
                  <li class="flex items-start gap-2"><span class="text-error mt-0.5">✕</span> Lack of real-time visibility</li>
                </ul>
              </div>

              <!-- Arrow -->
              <div class="flex items-center justify-center text-blue" style="padding: var(--space-4) 0;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>

              <!-- After -->
              <div>
                <div class="badge badge--blue mb-3">AFTER (URJIKO SOLUTION)</div>
                <ul class="text-navy text-sm font-medium flex flex-col gap-3" style="list-style: none; padding: 0; margin: 0;">
                  <li class="flex items-start gap-2"><span class="text-success mt-0.5">✓</span> Single centralized database</li>
                  <li class="flex items-start gap-2"><span class="text-success mt-0.5">✓</span> Automated real-time metrics</li>
                  <li class="flex items-start gap-2"><span class="text-success mt-0.5">✓</span> Role-based operational dashboards</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div>
          <h2 class="text-navy" style="font-size: clamp(1.75rem, 3vw, 2.25rem); font-weight: 700; margin-bottom: var(--space-4);">The Solution</h2>
          <p class="text-secondary" style="font-size: 1.1rem; line-height: 1.7;">
            ${project.solution}
          </p>
        </div>

      </div>
    </section>

    <!-- Product Walkthrough / Gallery -->
    <section class="section" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">
      <div class="container text-center mb-10">
        <h2 class="text-navy" style="font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 700;">Product Walkthrough</h2>
        <p class="text-secondary mx-auto mt-4" style="max-width: 42rem; font-size: 1.1rem;">A closer look at the interfaces and workflows that make this system work.</p>
      </div>

      <div class="container" style="max-width: 56rem;">
        ${renderProjectVisual(project.id)}
      </div>
    </section>

    <!-- Tech Stack & Results -->
    <section class="section" style="background: var(--color-navy); color: var(--color-white); padding-top: var(--space-12); padding-bottom: var(--space-12);">
      <div class="container">
        <div class="grid grid--2 gap-10">
          
          <div>
            <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: var(--space-6); color: var(--color-white);">Technology & Scope</h2>
            <div class="mb-6">
              <h3 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.6); margin-bottom: var(--space-3);">URJIKO's Role</h3>
              <p style="color: rgba(255,255,255,0.9); line-height: 1.6;">Discovery, product design, frontend architecture, backend API, and database modeling.</p>
            </div>
            <div>
              <h3 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.6); margin-bottom: var(--space-3);">Stack</h3>
              <div class="flex flex-wrap gap-2">
                ${project.technologies.map((t) => `<span style="padding: 4px 10px; border-radius: 4px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); font-size: 0.85rem;">${t}</span>`).join('')}
              </div>
            </div>
          </div>

          <div>
            <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: var(--space-6); color: var(--color-white);">Current Status</h2>
            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-lg); padding: var(--space-6);">
              <div class="flex items-center gap-3 mb-4">
                <span style="width: 12px; height: 12px; border-radius: 50%; background: var(--color-blue); box-shadow: 0 0 10px var(--color-blue);"></span>
                <span style="font-size: 1.1rem; font-weight: 600;">${status}</span>
              </div>
              <p style="color: rgba(255,255,255,0.8); line-height: 1.6; font-size: 0.95rem;">
                ${project.disclaimer ? project.disclaimer : 'This system has successfully completed the initial design and build phases. The core workflows have been validated, and it is currently being prepared for the next stage of user testing and production rollout.'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section" style="padding-top: var(--space-12); padding-bottom: var(--space-12); background: var(--color-bg-soft);">
      <div class="container text-center">
        <h2 style="font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 700; color: var(--color-navy); margin-bottom: var(--space-4);">
          Have a similar workflow challenge?
        </h2>
        <p class="text-secondary mx-auto mb-8" style="max-width: 36rem; font-size: 1.1rem; line-height: 1.6;">
          Tell us how your organization currently works, and we'll help you map out the right digital solution.
        </p>
        <a href="/contact" data-link class="btn btn--primary btn--lg">
          <span>Discuss your workflow</span>
          ${icons.arrowRight('w-4 h-4')}
        </a>
      </div>
    </section>
  `;
}
