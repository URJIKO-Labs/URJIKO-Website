// Use the environment variable if defined (for Vercel), otherwise default to relative path
const API_ENDPOINT = import.meta.env.VITE_API_URL || '/api/contact';

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

  let selectedFiles = [];

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = 'Sending...';
    btn.disabled = true;

    try {
      const formData = new FormData(form);
      // Remove the native file input data to avoid duplicates, we will append manually
      formData.delete('file-input-temp');
      
      // Append accumulated files
      selectedFiles.forEach(file => {
        formData.append('files', file);
      });
      
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        body: formData,
      });

      let result;
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        result = await res.json();
      } else {
        throw new Error('API not available. Please ensure the backend server is running.');
      }

      if (!res.ok || !result.ok) {
        throw new Error(result.error || 'Submission failed');
      }

      form.reset();
      selectedFiles = [];
      if (document.getElementById('file-list')) {
        document.getElementById('file-list').innerHTML = '';
      }

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
    const renderFiles = () => {
      fileList.innerHTML = '';
      selectedFiles.forEach((file, index) => {
        const item = document.createElement('div');
        item.style.cssText = 'display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.75rem; color: var(--color-navy); margin-top: 0.35rem; margin-right: 0.75rem; background: var(--color-bg-soft); padding: 2px 6px; border-radius: 4px;';
        
        const fileName = document.createElement('span');
        fileName.textContent = `📄 ${file.name}`;
        
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.innerHTML = '&times;';
        removeBtn.style.cssText = 'background: none; border: none; color: var(--color-error); font-size: 1rem; line-height: 1; cursor: pointer; padding: 0 0 0 2px;';
        
        removeBtn.onclick = (e) => {
          e.preventDefault();
          selectedFiles.splice(index, 1);
          renderFiles();
        };
        
        item.appendChild(fileName);
        item.appendChild(removeBtn);
        fileList.appendChild(item);
      });
    };

    fileInput.addEventListener('change', (e) => {
      const newFiles = Array.from(e.target.files);
      if (selectedFiles.length + newFiles.length > 5) {
        showToast('You can only attach up to 5 files.', 'error');
        e.target.value = '';
        return;
      }
      
      selectedFiles = [...selectedFiles, ...newFiles];
      renderFiles();
      e.target.value = ''; // Reset input so same file can be selected again if removed
    });
  }
}
