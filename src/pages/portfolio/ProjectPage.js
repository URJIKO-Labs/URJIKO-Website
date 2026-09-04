import { icons } from '../../components/common/Icons.js';
import { featuredProjects } from '../../config/projects.js';

/**
 * Visual Mockup for SmartBiz ERP
 */
function renderSmartBizVisual() {
  return `
    <div class="card card--lg" role="region" aria-label="SmartBiz ERP Dashboard Preview" style="background: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); border-radius: var(--radius-xl); padding: var(--space-6);">
      <div class="flex items-center justify-between pb-4 mb-5" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">SmartBiz Control Panel</span>
        </div>
        <span class="badge badge--blue text-xs font-semibold">Active Session</span>
      </div>
      <div class="grid grid--2 gap-3 mb-5" style="grid-template-columns: repeat(2, 1fr); gap: var(--space-3); margin-bottom: var(--space-5);">
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
          <div class="text-xs text-muted mb-1 font-medium">Today's Sales</div>
          <div class="text-xl font-bold text-navy">47 Orders</div>
          <div class="text-xs font-medium mt-1" style="color: var(--color-blue);">Updated live</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
          <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Inventory</div>
          <div class="text-xl font-bold" style="color: var(--color-blue);">Stocked</div>
          <div class="text-xs text-muted mt-1">Zero stockouts</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
          <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Customers</div>
          <div class="text-xl font-bold text-navy">1,243</div>
          <div class="text-xs text-muted mt-1">Accounts synced</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
          <div class="text-xs text-muted mb-1 font-medium">Revenue</div>
          <div class="text-xl font-bold text-navy">Growing</div>
          <div class="text-xs font-medium mt-1" style="color: var(--color-blue);">+18.4% MoM</div>
        </div>
      </div>
      <div class="p-4 flex flex-col gap-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
        <div>
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-semibold text-navy">Daily Target Fulfillment</span>
            <span class="text-xs font-bold" style="color: var(--color-blue);">92%</span>
          </div>
          <div style="width: 100%; height: 7px; background-color: var(--color-border); border-radius: var(--radius-full); overflow: hidden;">
            <div style="width: 92%; height: 100%; background-color: var(--color-blue); border-radius: var(--radius-full);" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" aria-label="Daily Target Fulfillment"></div>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-semibold text-navy">Inventory Replenishment</span>
            <span class="text-xs font-bold" style="color: var(--color-navy);">86%</span>
          </div>
          <div style="width: 100%; height: 7px; background-color: var(--color-border); border-radius: var(--radius-full); overflow: hidden;">
            <div style="width: 86%; height: 100%; background-color: var(--color-navy); border-radius: var(--radius-full);" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" aria-label="Inventory Replenishment"></div>
          </div>
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
    <div class="card card--lg" role="region" aria-label="Transport Operations Panel Preview" style="background: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); border-radius: var(--radius-xl); padding: var(--space-6);">
      <div class="flex items-center justify-between pb-4 mb-5" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">Transport Panel</span>
        </div>
        <span class="badge badge--blue text-xs font-semibold">Fleet Live</span>
      </div>
      <div class="grid gap-3 mb-5" style="grid-template-columns: repeat(3, 1fr); gap: var(--space-3); margin-bottom: var(--space-5);">
        <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Vehicle Fleet</div>
          <div class="text-2xl font-bold text-navy">24</div>
          <div class="text-xs text-muted mt-1">Vehicles Total</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Active Drivers</div>
          <div class="text-2xl font-bold text-navy">18</div>
          <div class="text-xs text-muted mt-1">On Schedule</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Pending Requests</div>
          <div class="text-2xl font-bold" style="color: var(--color-blue);">7</div>
          <div class="text-xs text-muted mt-1">Awaiting Action</div>
        </div>
      </div>
      <div class="p-4 mb-4" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
        <div class="text-xs font-semibold text-navy mb-3">Fleet Status Indicators</div>
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
              <span class="font-medium text-navy">In Transit (Active)</span>
            </div>
            <span class="font-bold text-navy">14 Vehicles</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-navy); display: inline-block;"></span>
              <span class="font-medium text-navy">Ready for Assignment</span>
            </div>
            <span class="font-bold text-navy">8 Vehicles</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span style="width: 8px; height: 8px; border-radius: 50%; background-color: #64748B; display: inline-block;"></span>
              <span class="font-medium text-muted">Scheduled Maintenance</span>
            </div>
            <span class="font-bold text-muted">2 Vehicles</span>
          </div>
        </div>
      </div>
      <div class="p-3 flex items-center justify-between" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
        <div class="flex items-center gap-2">
          <span class="badge badge--navy text-xs">DISPATCH #842</span>
          <span class="text-xs font-medium text-navy">Route Central</span>
        </div>
        <span class="text-xs font-bold" style="color: var(--color-blue);">In Progress</span>
      </div>
    </div>
  `;
}

/**
 * Visual Mockup for EduFlow School Management
 */
function renderEduFlowVisual() {
  return `
    <div class="card card--lg" role="region" aria-label="EduFlow School Dashboard Preview" style="background: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); border-radius: var(--radius-xl); padding: var(--space-6);">
      <div class="flex items-center justify-between pb-4 mb-5" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">EduFlow Dashboard</span>
        </div>
        <span class="badge badge--blue text-xs font-semibold">Semester Active</span>
      </div>
      <div class="grid gap-3 mb-5" style="grid-template-columns: repeat(3, 1fr); gap: var(--space-3); margin-bottom: var(--space-5);">
        <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Students</div>
          <div class="text-2xl font-bold text-navy">845</div>
          <div class="text-xs text-muted mt-1">Enrolled</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Teachers</div>
          <div class="text-2xl font-bold text-navy">32</div>
          <div class="text-xs text-muted mt-1">Faculty Staff</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Classes</div>
          <div class="text-2xl font-bold text-navy">28</div>
          <div class="text-xs text-muted mt-1">Active Sections</div>
        </div>
      </div>
      <div class="p-4 mb-4" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-navy">Daily Student Attendance</span>
          <span class="text-xs font-bold" style="color: var(--color-blue);">96.4%</span>
        </div>
        <div style="width: 100%; height: 8px; background-color: var(--color-border); border-radius: var(--radius-full); overflow: hidden; margin-bottom: var(--space-2);">
          <div style="width: 96.4%; height: 100%; background-color: var(--color-blue); border-radius: var(--radius-full);" role="progressbar" aria-valuenow="96" aria-valuemin="0" aria-valuemax="100" aria-label="Daily Student Attendance"></div>
        </div>
        <div class="flex justify-between text-xs text-muted">
          <span>815 Present</span>
          <span>30 Absent / Leave</span>
        </div>
      </div>
      <div class="p-3 flex items-center justify-between" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
        <div class="flex items-center gap-2">
          <span class="badge badge--navy text-xs">TERM 2</span>
          <span class="text-xs font-medium text-navy">Timetable &amp; Grades Synced</span>
        </div>
        <span class="text-xs font-bold" style="color: var(--color-blue);">Updated</span>
      </div>
    </div>
  `;
}

/**
 * Visual Mockup for ShegerHealth
 */
function renderShegerHealthVisual() {
  return `
    <div class="card card--lg" role="region" aria-label="ShegerHealth Healthcare Dashboard Preview" style="background: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); border-radius: var(--radius-xl); padding: var(--space-6);">
      <div class="flex items-center justify-between pb-4 mb-5" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">ShegerHealth Demo</span>
        </div>
        <span class="badge badge--blue text-xs font-semibold">Workflow Concept</span>
      </div>
      <div class="grid gap-3 mb-5" style="grid-template-columns: repeat(3, 1fr); gap: var(--space-3); margin-bottom: var(--space-5);">
        <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Patients</div>
          <div class="text-2xl font-bold text-navy">Active</div>
          <div class="text-xs text-muted mt-1">Care Profiles</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Records</div>
          <div class="text-2xl font-bold text-navy">Digital</div>
          <div class="text-xs text-muted mt-1">Centralized EHR</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Workflows</div>
          <div class="text-2xl font-bold" style="color: var(--color-blue);">Structured</div>
          <div class="text-xs text-muted mt-1">Multi-Role</div>
        </div>
      </div>
      <div class="p-4 mb-4 flex flex-col gap-2" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
        <div class="text-xs font-semibold text-navy mb-1">Clinical &amp; Departmental Modules</div>
        <div class="flex items-center justify-between text-xs py-1" style="border-bottom: 1px solid var(--color-border-subtle);">
          <span class="text-navy font-medium">Patient Intake &amp; Triage</span>
          <span class="badge badge--navy text-xs">Standardized</span>
        </div>
        <div class="flex items-center justify-between text-xs py-1" style="border-bottom: 1px solid var(--color-border-subtle);">
          <span class="text-navy font-medium">Diagnostic &amp; Lab Requests</span>
          <span class="badge badge--navy text-xs">Connected</span>
        </div>
        <div class="flex items-center justify-between text-xs py-1">
          <span class="text-navy font-medium">Prescription &amp; Pharmacy Logs</span>
          <span class="badge badge--navy text-xs">Structured</span>
        </div>
      </div>
      <div class="p-3 flex items-center justify-between" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
        <div class="flex items-center gap-2">
          <span style="width: 6px; height: 6px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-xs font-medium text-navy">Role-Based Access &amp; Security</span>
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

  const styles = `
    <style>
      @media (min-width: 1024px) {
        .project-detail-layout { grid-template-columns: 1fr 1fr !important; }
        .project-detail-layout .project-detail-visual { order: 2; }
        .project-detail-layout .project-detail-content { order: 1; }
      }
      @media (max-width: 768px) {
        .project-detail-visual { display: none !important; }
        .project-detail-layout { gap: var(--space-6) !important; }
        .project-detail-layout [style*="grid-template-columns: repeat(auto-fill"] {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: var(--space-2) !important;
        }
        .project-detail-layout [style*="grid-template-columns: repeat(auto-fill"] .text-sm {
          font-size: var(--font-size-xs) !important;
        }
      }
    </style>
  `;

  return `
    ${styles}
    <!-- Breadcrumbs -->
    <div class="container" style="padding-top: var(--space-8);">
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
    <section class="section" aria-labelledby="project-detail-heading">
      <div class="container">
        <div class="flex items-center gap-3 mb-4">
          <span class="badge badge--navy">${project.badge}</span>
          <span class="badge badge--blue">${project.statusBadge}</span>
        </div>
        <h1 id="project-detail-heading" style="font-size: clamp(2rem, 5vw, 3rem); font-weight: 700; color: var(--color-navy); margin-bottom: var(--space-3); line-height: var(--line-height-tight);">
          ${project.name}
        </h1>
        <p class="text-secondary" style="font-size: var(--font-size-lg); max-width: 48rem;">
          ${project.tagline}
        </p>
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
              <h2 class="text-navy font-semibold mb-4" style="font-size: var(--font-size-xl);">Business Value</h2>
              <ul style="list-style: none; padding: 0; margin: 0;" class="flex flex-col gap-3">
                ${project.businessValue.map((v) => `<li class="flex items-start gap-3 text-secondary"><span style="color: var(--color-blue); margin-top: 4px; font-size: 1.1rem;">✓</span><span style="line-height: 1.6;">${v}</span></li>`).join('')}
              </ul>
            </div>

            <!-- Disclaimer -->
            ${project.disclaimer ? `<p class="text-sm text-muted mb-6" style="font-style: italic; padding: var(--space-3); background: var(--color-bg-soft); border-radius: var(--radius-sm);">${project.disclaimer}</p>` : ''}

            <!-- Key Features -->
            <div class="mb-8">
              <h2 class="text-navy font-semibold mb-4" style="font-size: var(--font-size-xl);">Key Features</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-3);">
                ${project.features.map((f) => `<div class="flex items-center gap-3 p-3" style="background: var(--color-white); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm);"><span style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-blue); flex-shrink: 0;"></span><span class="text-sm font-medium text-navy">${f}</span></div>`).join('')}
              </div>
            </div>

            <!-- Technologies -->
            <div class="mb-8">
              <h2 class="text-navy font-semibold mb-4" style="font-size: var(--font-size-xl);">Technologies</h2>
              <div class="flex flex-wrap gap-2">
                ${project.technologies.map((t) => `<span class="badge badge--outline">${t}</span>`).join('')}
              </div>
            </div>

            <!-- CTAs -->
            <div class="flex flex-wrap gap-4">
              <a href="/contact" data-link class="btn btn--primary">
                <span>Start a Similar Project</span>
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
    <section class="section" style="background: var(--color-navy); color: var(--color-white);">
      <div class="container text-center">
        <h2 style="font-size: var(--font-size-3xl); font-weight: 700; margin-bottom: var(--space-3); color: var(--color-white);">
          Like What You See?
        </h2>
        <p style="font-size: var(--font-size-lg); color: rgba(255, 255, 255, 0.85); margin-bottom: var(--space-6); max-width: 36rem; margin-left: auto; margin-right: auto;">
          Let's discuss how we can build something similar for your business.
        </p>
        <a href="/contact" data-link class="btn" style="background: var(--color-white); color: var(--color-navy) !important; border: 1px solid var(--color-white); font-weight: 600;">
          <span style="color: var(--color-navy) !important;">Discuss Your Project</span>
          <span style="color: var(--color-navy) !important;">${icons.arrowRight('w-4 h-4')}</span>
        </a>
      </div>
    </section>
  `;
}
