import { icons } from '../common/Icons.js';
import { featuredProjects } from '../../config/projects.js';

/**
 * Visual Mockup for SmartBiz ERP
 */
function renderSmartBizVisual() {
  return `
    <div class="card card--lg" role="region" aria-label="SmartBiz ERP Dashboard Preview" style="background: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); border-radius: var(--radius-xl); padding: var(--space-6);">
      <!-- Header Bar -->
      <div class="flex items-center justify-between pb-4 mb-5" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">SmartBiz Control Panel</span>
        </div>
        <span class="badge badge--blue text-xs font-semibold">Active Session</span>
      </div>

      <!-- 2x2 Stats Grid -->
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

      <!-- Progress Bars -->
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
      <!-- Header Bar -->
      <div class="flex items-center justify-between pb-4 mb-5" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">Transport Operations Panel</span>
        </div>
        <span class="badge badge--blue text-xs font-semibold">Fleet Live</span>
      </div>

      <!-- 3 Stats Grid -->
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

      <!-- Status Indicators Section -->
      <div class="p-4 mb-4" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
        <div class="text-xs font-semibold text-navy mb-3">Fleet Status Indicators</div>
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
              <span class="font-medium text-navy">In Transit (Active Routes)</span>
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

      <!-- Dispatch Indicator -->
      <div class="p-3 flex items-center justify-between" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
        <div class="flex items-center gap-2">
          <span class="badge badge--navy text-xs">DISPATCH #842</span>
          <span class="text-xs font-medium text-navy">Route Central &bull; Driver Assigned</span>
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
      <!-- Header Bar -->
      <div class="flex items-center justify-between pb-4 mb-5" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">EduFlow School Dashboard</span>
        </div>
        <span class="badge badge--blue text-xs font-semibold">Semester Active</span>
      </div>

      <!-- 3 Stats Grid -->
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

      <!-- Attendance Bar Section -->
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

      <!-- Timetable & Grading Module -->
      <div class="p-3 flex items-center justify-between" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
        <div class="flex items-center gap-2">
          <span class="badge badge--navy text-xs">TERM 2</span>
          <span class="text-xs font-medium text-navy">Timetable &amp; Grade Records Synced</span>
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
      <!-- Header Bar -->
      <div class="flex items-center justify-between pb-4 mb-5" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">ShegerHealth Platform Demo</span>
        </div>
        <span class="badge badge--blue text-xs font-semibold">Workflow Concept</span>
      </div>

      <!-- 3 Stats Grid -->
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

      <!-- Structured Clinical Modules -->
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

      <!-- Security & Privacy Status -->
      <div class="p-3 flex items-center justify-between" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
        <div class="flex items-center gap-2">
          <span style="width: 6px; height: 6px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-xs font-medium text-navy">Role-Based Access &amp; Data Security</span>
        </div>
        <span class="text-xs font-bold" style="color: var(--color-blue);">Enforced</span>
      </div>
    </div>
  `;
}

/**
 * Dispatches the appropriate visual mockup based on project ID
 */
function renderProjectVisual(project) {
  switch (project.id) {
    case 'smartbiz':
      return renderSmartBizVisual();
    case 'transport':
      return renderTransportVisual();
    case 'eduflow':
      return renderEduFlowVisual();
    case 'shegerhealth':
      return renderShegerHealthVisual();
    default:
      return renderSmartBizVisual();
  }
}

/**
 * Featured Projects Section Component
 * Renders 4 featured case studies with alternating layouts.
 */
export function renderFeaturedProjects() {
  const styles = `
    <style>
      @media (min-width: 1024px) {
        .project-layout { grid-template-columns: 1fr 1fr !important; }
        .project-layout--left .project-visual { order: 1; }
        .project-layout--left .project-content { order: 2; }
        .project-layout--right .project-visual { order: 2; }
        .project-layout--right .project-content { order: 1; }
      }
      @media (max-width: 768px) {
        .project-visual .grid[style*="repeat(3"] {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
    </style>
  `;

  const projectsHtml = featuredProjects
    .map((project, index) => {
      const bg = index % 2 === 0 ? 'var(--color-white)' : 'var(--color-bg-soft)';

      return `
        <section class="section" id="project-${project.id}" aria-labelledby="project-${project.id}-title" style="border-top: 1px solid var(--color-border-subtle); background: ${bg};">
          <div class="container">
            <!-- Project Header -->
            <div class="flex items-center gap-3 mb-3">
              <span class="font-bold" style="color: var(--color-blue); font-size: var(--font-size-2xl); font-family: monospace;">${project.number}</span>
              <span class="badge badge--navy">${project.badge}</span>
              <span class="badge badge--blue">${project.statusBadge}</span>
            </div>
            <h2 id="project-${project.id}-title" style="font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 700; color: var(--color-navy); margin-bottom: var(--space-2);">${project.name}</h2>
            <p class="text-secondary mb-2" style="font-size: var(--font-size-md);">${project.tagline}</p>
            
            <!-- Two Column Layout: Content + Visual (alternating based on layout field) -->
            <div class="grid items-start project-layout project-layout--${project.layout}" style="grid-template-columns: 1fr; gap: var(--space-10); margin-top: var(--space-8);">
              
              <!-- Content Column (always first in DOM for mobile, use CSS order for desktop) -->
              <div class="project-content">
                <p class="text-secondary mb-6" style="line-height: 1.65;">${project.description}</p>
                
                <!-- The Problem -->
                <div class="mb-6">
                  <h3 class="text-navy font-semibold mb-2" style="font-size: var(--font-size-lg);">The Problem</h3>
                  <p class="text-secondary text-sm" style="line-height: 1.6;">${project.problem}</p>
                </div>
                
                <!-- The Solution -->
                <div class="mb-6">
                  <h3 class="text-navy font-semibold mb-2" style="font-size: var(--font-size-lg);">The Solution</h3>
                  <p class="text-secondary text-sm" style="line-height: 1.6;">${project.solution}</p>
                </div>
                
                <!-- Business Value -->
                <div class="mb-6">
                  <h3 class="text-navy font-semibold mb-3" style="font-size: var(--font-size-lg);">Business Value</h3>
                  <ul style="list-style: none; padding: 0; margin: 0;" class="flex flex-col gap-2">
                    ${project.businessValue.map((v) => `<li class="flex items-start gap-2 text-sm text-secondary"><span style="color: var(--color-blue); margin-top: 2px;">✓</span><span>${v}</span></li>`).join('')}
                  </ul>
                </div>

                <!-- Disclaimer if exists -->
                ${project.disclaimer ? `<p class="text-xs text-muted mb-4" style="font-style: italic;">${project.disclaimer}</p>` : ''}

                <!-- CTAs -->
                <div class="flex flex-wrap gap-3 items-center">
                  <a href="/contact" data-link class="btn btn--primary">
                    <span>Explore Project</span>
                    ${icons.arrowRight('w-4 h-4')}
                  </a>
                  <a href="${project.solutionLink}" data-link class="btn btn--secondary text-sm">View ${project.solutionLabel} &rarr;</a>
                </div>
              </div>

              <!-- Visual Column: CSS-only project dashboard mockup -->
              <div class="project-visual">
                ${renderProjectVisual(project)}
              </div>
            </div>

            <!-- Key Features Grid -->
            <div class="mt-8">
              <h3 class="text-navy font-semibold mb-4" style="font-size: var(--font-size-lg);">Key Features</h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: var(--space-3);">
                ${project.features.map((f) => `<div class="flex items-center gap-2 p-3" style="background: var(--color-white); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm);"><span style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-blue); flex-shrink: 0;"></span><span class="text-sm font-medium text-navy">${f}</span></div>`).join('')}
              </div>
            </div>

            <!-- Technologies -->
            <div class="mt-6 flex flex-wrap gap-2">
              ${project.technologies.map((t) => `<span class="badge badge--outline text-xs">${t}</span>`).join('')}
            </div>
          </div>
        </section>
      `;
    })
    .join('');

  return `
    ${styles}
    ${projectsHtml}
  `;
}
