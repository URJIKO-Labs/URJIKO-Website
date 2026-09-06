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
            <label class="text-navy font-semibold text-sm">Service Needed</label>
            <div class="custom-select" data-name="service">
              <div class="custom-select__trigger contact-input">
                <span>Select a service...</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
              <div class="custom-select__dropdown">
                <div class="custom-select__option" data-value="">Select a service...</div>
                <div class="custom-select__option" data-value="web-dev">Website Development</div>
                <div class="custom-select__option" data-value="business-systems">Business Management System (POS, Inventory, CRM)</div>
                <div class="custom-select__option" data-value="custom-software">Custom Software Development</div>
                <div class="custom-select__option" data-value="ai-solutions">AI & Automation Solutions</div>
                <div class="custom-select__option" data-value="mobile-app">Mobile App Development</div>
                <div class="custom-select__option" data-value="digital-platform">Digital Platform / SaaS</div>
                <div class="custom-select__option" data-value="maintenance">Maintenance & Support</div>
                <div class="custom-select__option" data-value="consultation">Not sure yet / Need consultation</div>
              </div>
              <input type="hidden" name="service" value="">
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-navy font-semibold text-sm">Budget Range</label>
            <div class="custom-select" data-name="budget">
              <div class="custom-select__trigger contact-input">
                <span>Select budget range...</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
              <div class="custom-select__dropdown">
                <div class="custom-select__option" data-value="">Select budget range...</div>
                <div class="custom-select__option" data-value="under-10k">Under 10,000 ETB</div>
                <div class="custom-select__option" data-value="10k-25k">10,000 - 25,000 ETB</div>
                <div class="custom-select__option" data-value="25k-50k">25,000 - 50,000 ETB</div>
                <div class="custom-select__option" data-value="50k-100k">50,000 - 100,000 ETB</div>
                <div class="custom-select__option" data-value="over-100k">Over 100,000 ETB</div>
                <div class="custom-select__option" data-value="not-sure">Not sure yet</div>
              </div>
              <input type="hidden" name="budget" value="">
            </div>
          </div>
        </div>

        <div class="grid grid--2 gap-4">
          <div class="flex flex-col gap-2">
            <label class="text-navy font-semibold text-sm">Preferred Contact Method</label>
            <div class="custom-select" data-name="contact-method">
              <div class="custom-select__trigger contact-input">
                <span>Telegram</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
              <div class="custom-select__dropdown">
                <div class="custom-select__option" data-value="telegram">Telegram</div>
                <div class="custom-select__option" data-value="phone">Phone Call</div>
                <div class="custom-select__option" data-value="email">Email</div>
              </div>
              <input type="hidden" name="contact-method" value="telegram">
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-navy font-semibold text-sm">Project Timeline</label>
            <div class="custom-select" data-name="timeline">
              <div class="custom-select__trigger contact-input">
                <span>When do you need this?</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
              <div class="custom-select__dropdown">
                <div class="custom-select__option" data-value="">When do you need this?</div>
                <div class="custom-select__option" data-value="asap">ASAP</div>
                <div class="custom-select__option" data-value="1-week">Within 1 week</div>
                <div class="custom-select__option" data-value="2-weeks">Within 2 weeks</div>
                <div class="custom-select__option" data-value="1-month">Within 1 month</div>
                <div class="custom-select__option" data-value="flexible">Flexible / Not sure</div>
              </div>
              <input type="hidden" name="timeline" value="">
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label for="description" class="text-navy font-semibold text-sm">Project Description <span class="text-blue">*</span></label>
          <textarea id="description" name="description" required rows="5" placeholder="Tell us about your project goals, timeline, and any specific requirements..." class="contact-input" style="resize: vertical;"></textarea>
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-navy font-semibold text-sm">Attachments <span class="text-muted" style="font-weight: 400;">(optional)</span></label>
          <div class="file-upload" id="file-upload-area">
            <input type="file" id="file-input" name="files" multiple accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" style="display: none;">
            <div class="file-upload__trigger">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              <span style="font-size: 0.85rem; font-weight: 500;">Click to upload or drag files</span>
              <span class="text-muted" style="font-size: 0.7rem;">PDF, DOC, PNG, JPG (max 5MB)</span>
            </div>
            <div class="file-upload__list" id="file-list"></div>
          </div>
        </div>

        <div class="mt-4">
          <button type="submit" class="btn btn--primary" style="width: 100%; justify-content: center; padding: 0.75rem 1.5rem; font-size: 1rem;">
            Send Inquiry
          </button>
        </div>
      </form>
    </div>

    <style>
      .contact-input {
        padding: 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        font-family: inherit;
        width: 100%;
        box-sizing: border-box;
        background-color: var(--color-white);
        color: var(--color-navy);
        font-size: var(--font-size-sm);
        transition: border-color 0.2s, box-shadow 0.2s;
      }
      .contact-input:focus {
        outline: none;
        border-color: var(--color-blue);
        box-shadow: 0 0 0 3px rgba(7, 87, 184, 0.1);
      }
      .custom-select {
        position: relative;
      }
      .custom-select__trigger {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        user-select: none;
      }
      .custom-select__trigger svg {
        color: var(--color-navy);
        flex-shrink: 0;
        transition: transform 0.2s;
      }
      .custom-select__dropdown.open + .custom-select__trigger svg,
      .custom-select__dropdown.open ~ .custom-select__trigger svg {
        transform: rotate(180deg);
      }
      .custom-select__dropdown {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        background: var(--color-white);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        box-shadow: 0 8px 24px rgba(6, 36, 92, 0.12);
        z-index: 50;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-8px);
        transition: opacity 0.2s, transform 0.2s, visibility 0.2s;
        max-height: 240px;
        overflow-y: auto;
      }
      .custom-select__dropdown.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      .custom-select__option {
        padding: 0.65rem 0.75rem;
        font-size: var(--font-size-sm);
        color: var(--color-navy);
        cursor: pointer;
        transition: background-color 0.15s;
      }
      .custom-select__option:first-child {
        color: var(--color-muted);
      }
      .custom-select__option:hover {
        background-color: var(--color-bg-light-blue);
      }
      .custom-select__option:last-child {
        border-radius: 0 0 var(--radius-sm) var(--radius-sm);
      }
      .file-upload {
        border: 1px dashed var(--color-border);
        border-radius: var(--radius-sm);
        transition: border-color 0.2s, background-color 0.2s;
        cursor: pointer;
        background: var(--color-bg-soft);
      }
      .file-upload:hover {
        border-color: var(--color-blue);
        background-color: var(--color-bg-light-blue);
      }
      .file-upload.dragover {
        border-color: var(--color-blue);
        background-color: var(--color-bg-light-blue);
      }
      .file-upload__trigger {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        padding: 1rem 0.75rem;
        text-align: center;
        color: var(--color-navy);
      }
      .file-upload__list {
        padding: 0 0.5rem 0.5rem;
      }
      .file-upload__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.35rem 0.6rem;
        background: var(--color-bg-soft);
        border-radius: 4px;
        margin-bottom: 0.25rem;
        font-size: 0.75rem;
        color: var(--color-navy);
      }
      .file-upload__item button {
        background: none;
        border: none;
        color: var(--color-muted);
        cursor: pointer;
        padding: 0;
        font-size: 1.1rem;
        line-height: 1;
      }
      .file-upload__item button:hover {
        color: var(--color-error);
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
