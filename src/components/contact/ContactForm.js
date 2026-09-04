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
            <label for="phone" class="text-navy font-semibold text-sm">Phone / WhatsApp</label>
            <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" class="contact-input">
          </div>
        </div>

        <div class="grid grid--2 gap-4">
          <div class="flex flex-col gap-2">
            <label for="service" class="text-navy font-semibold text-sm">Service Needed</label>
            <select id="service" name="service" class="contact-input">
              <option value="">Select a service...</option>
              <option value="web-dev">Website Development</option>
              <option value="business-systems">Business Management Systems</option>
              <option value="custom-software">Custom Software</option>
              <option value="ai-solutions">AI & Intelligent Solutions</option>
              <option value="maintenance">Maintenance & Support</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="flex flex-col gap-2">
            <label for="budget" class="text-navy font-semibold text-sm">Budget Range</label>
            <select id="budget" name="budget" class="contact-input">
              <option value="">Select budget range...</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="over-50k">$50,000+</option>
            </select>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label for="contact-method" class="text-navy font-semibold text-sm">Preferred Contact Method</label>
          <select id="contact-method" name="contact-method" class="contact-input">
            <option value="email">Email</option>
            <option value="phone">Phone Call</option>
            <option value="whatsapp">WhatsApp</option>
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
              alert("This is a frontend demonstration. No backend service is currently configured to receive this inquiry.");
              form.reset();
            });
          }
        })();
      </script>
    </div>

    <style>
      .contact-input {
        padding: 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: 4px;
        font-family: inherit;
        width: 100%;
        box-sizing: border-box;
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
