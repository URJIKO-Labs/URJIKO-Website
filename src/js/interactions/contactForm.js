// If the site is hosted on Vercel, forward the API requests to the Render backend
const API_ENDPOINT = window.location.hostname.includes('vercel.app')
  ? 'https://urjiko-website.onrender.com/api/contact'
  : '/api/contact';

const serviceLabels = {
  'web-dev': 'Website Development',
  'business-systems': 'Business Systems & Custom Software',
  'ai-solutions': 'AI & Intelligent Solutions',
  'mobile-app': 'Mobile App Development',
  'ui-ux': 'UI/UX Design',
  maintenance: 'Maintenance & Technical Support',
  consultation: 'Need Consultation',
};

const budgetLabels = {
  'under-10k': 'Under 10,000 ETB',
  '10k-25k': '10,000 - 25,000 ETB',
  '25k-50k': '25,000 - 50,000 ETB',
  '50k-100k': '50,000 - 100,000 ETB',
  'over-100k': 'Over 100,000 ETB',
  'not-sure': 'Not sure yet',
};

const timelineLabels = {
  asap: 'ASAP',
  '1-week': 'Within 1 week',
  '2-weeks': 'Within 2 weeks',
  '1-month': 'Within 1 month',
  flexible: 'Flexible',
};

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.textContent = message;

  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%) translateY(100px)',
    backgroundColor:
      type === 'success' ? 'var(--color-success)' : 'var(--color-error)',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '8px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    fontWeight: '500',
    fontSize: '0.95rem',
    zIndex: '9999',
    opacity: '0',
    transition:
      'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease',
    maxWidth: '90%',
    width: 'max-content',
    textAlign: 'center',
  });

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

export function initContactForm() {
  const form = document.getElementById('urjiko-contact-form');
  if (!form || form.dataset.initialized) return;
  form.dataset.initialized = 'true';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = 'Sending...';
    btn.disabled = true;

    try {
      const formData = new FormData(form);

      // If you are testing locally with Vite, API_ENDPOINT won't work.
      // But we will send raw FormData so the backend can process files.
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        body: formData,
      });

      let result;
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        result = await res.json();
      } else {
        throw new Error(
          'API not available. Please ensure the backend server is running.',
        );
      }

      if (!res.ok || !result.ok) {
        throw new Error(result.error || 'Submission failed');
      }

      form.reset();

      const customSelects = form.querySelectorAll(
        '.custom-select__trigger span',
      );
      customSelects.forEach((span) => {
        span.textContent = 'Please select...';
        span.style.color = 'var(--color-muted)';
      });

      showToast('Message Sent Successfully!', 'success');
    } catch (err) {
      const msg = err.message || 'Something went wrong. Please try again.';
      showToast(msg, 'error');
    } finally {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }
  });
  const fileInput = document.getElementById('file-input');
  const fileList = document.getElementById('file-list');
  if (fileInput && fileList) {
    fileInput.addEventListener('change', (e) => {
      fileList.innerHTML = '';
      Array.from(e.target.files).forEach((file) => {
        const item = document.createElement('div');
        item.style.cssText =
          'font-size: 0.75rem; color: var(--color-navy); margin-top: 0.25rem;';
        item.textContent = `📄 ${file.name}`;
        fileList.appendChild(item);
      });
    });
  }
}
