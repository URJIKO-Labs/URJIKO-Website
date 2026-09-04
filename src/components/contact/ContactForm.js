export function renderContactForm() {
  return `
    <div class="card" style="background-color: var(--color-white); border: 1px solid var(--color-border-subtle);">
      <h3 class="text-navy font-bold mb-4" style="font-size: 1.5rem;">Project Inquiry</h3>
      <p class="text-secondary mb-6">Fill out the form below and we'll review your message and get back to you as soon as possible.</p>
      
      <form id="urjiko-contact-form" class="flex flex-col gap-4">
        <div class="grid grid--2 gap-4">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-navy font-semibold text-sm">Full Name <span class="text-blue">*</span></label>
            <input type="text" id="name" name="name" required placeholder="John Doe" class="contact-input">
          </div>
          <div class="flex flex-col gap-2">
            <label for="organization" class="text-navy font-semibold text-sm">Organization / Company</label>
            <input type="text" id="organization" name="organization" placeholder="Your Company Ltd" class="contact-input">
          </div>
        </div>

        <div class="grid grid--2 gap-4">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-navy font-semibold text-sm">Email Address <span class="text-blue">*</span></label>
            <input type="email" id="email" name="email" required placeholder="john@example.com" class="contact-input">
          </div>
          <div class="flex flex-col gap-2">
            <label for="phone" class="text-navy font-semibold text-sm">Phone / Telegram</label>
            <input type="tel" id="phone" name="phone" placeholder="+251 9XX XXX XXX" class="contact-input">
          </div>
        </div>

        <div class="grid grid--2 gap-4">
          <div class="flex flex-col gap-2">
            <label for="service" class="text-navy font-semibold text-sm">Service Needed</label>
            <select id="service" name="service" class="contact-input">
              <option value="">Select a service...</option>
              <option value="web-dev">Website Development</option>
              <option value="business-systems">Business Management System (POS, Inventory, CRM)</option>
              <option value="custom-software">Custom Software Development</option>
              <option value="ai-solutions">AI & Automation Solutions</option>
              <option value="mobile-app">Mobile App Development</option>
              <option value="digital-platform">Digital Platform / SaaS</option>
              <option value="maintenance">Maintenance & Support</option>
              <option value="consultation">Not sure yet / Need consultation</option>
            </select>
          </div>
          <div class="flex flex-col gap-2">
            <label for="budget" class="text-navy font-semibold text-sm">Budget Range</label>
            <select id="budget" name="budget" class="contact-input">
              <option value="">Select budget range...</option>
              <option value="under-10k">Under 10,000 ETB</option>
              <option value="10k-25k">10,000 - 25,000 ETB</option>
              <option value="25k-50k">25,000 - 50,000 ETB</option>
              <option value="50k-100k">50,000 - 100,000 ETB</option>
              <option value="over-100k">Over 100,000 ETB</option>
              <option value="not-sure">Not sure yet</option>
            </select>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label for="contact-method" class="text-navy font-semibold text-sm">Preferred Contact Method</label>
            <select id="contact-method" name="contact-method" class="contact-input">
              <option value="telegram">Telegram</option>
              <option value="phone">Phone Call</option>
              <option value="email">Email</option>
            </select>
        </div>

        <div class="flex flex-col gap-2">
          <label for="description" class="text-navy font-semibold text-sm">Project Description <span class="text-blue">*</span></label>
          <textarea id="description" name="description" required rows="5" placeholder="Tell us about your project goals, timeline, and any specific requirements..." class="contact-input" style="resize: vertical;"></textarea>
        </div>

        <div class="mt-4">
          <button type="submit" class="btn btn--primary" style="width: 100%; justify-content: center; padding: 0.75rem 1.5rem; font-size: 1rem;">
            Send Inquiry
          </button>
        </div>
      </form>
      
      <script>
        (function() {
          const form = document.getElementById('urjiko-contact-form');
          if (form) {
            form.addEventListener('submit', function(e) {
              e.preventDefault();
              const btn = form.querySelector('button[type="submit"]');
              const originalText = btn.innerHTML;
              btn.innerHTML = 'Message Sent!';
              btn.disabled = true;
              btn.style.backgroundColor = '#16a34a';
              form.reset();
              setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                btn.style.backgroundColor = '';
              }, 3000);
            });
          }
        })();
      </script>
    </div>

    <style>
      .contact-input {
        padding: 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        font-family: inherit;
        width: 100%;
        box-sizing: border-box;
        background-color: #fff;
        color: var(--color-navy);
        font-size: var(--font-size-sm);
        transition: border-color 0.2s, box-shadow 0.2s;
      }
      .contact-input:focus {
        outline: none;
        border-color: var(--color-blue);
        box-shadow: 0 0 0 3px rgba(7, 87, 184, 0.1);
      }
      .contact-input option {
        padding: 0.6rem 0.75rem;
        font-size: var(--font-size-sm);
        color: var(--color-navy);
        background-color: #fff;
      }
      .contact-input option:hover {
        background-color: var(--color-bg-light-blue);
      }
      select.contact-input {
        appearance: none;
        -webkit-appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2306245C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 0.75rem center;
        padding-right: 2.5rem;
        cursor: pointer;
      }
      @media (max-width: 768px) {
        .contact-input {
          padding: 14px 12px;
          font-size: 16px;
        }
      }
    </style>
  `;
}
