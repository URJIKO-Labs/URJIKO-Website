const WEB3FORMS_KEY = 'c7bd18aa-761c-490c-8d78-5b21095d6b88';
const TELEGRAM_TOKEN = '8723180161:AAEaI_KVNISGvc35f66FH94p6SNO8kgn3ls';
const TELEGRAM_CHAT_ID = '7212861487';

function sendToTelegram(data) {
  const serviceLabels = {
    'web-dev': 'Website Development',
    'business-systems': 'Business Management System',
    'custom-software': 'Custom Software Development',
    'ai-solutions': 'AI & Automation Solutions',
    'mobile-app': 'Mobile App Development',
    'digital-platform': 'Digital Platform / SaaS',
    maintenance: 'Maintenance & Support',
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

  const name = data.get('name') || '';
  const org = data.get('organization') || 'Not specified';
  const email = data.get('email') || '';
  const phone = data.get('phone') || 'Not specified';
  const service = serviceLabels[data.get('service')] || 'Not specified';
  const budget = budgetLabels[data.get('budget')] || 'Not specified';
  const contactMethod = data.get('contact-method') || 'Telegram';
  const timeline = timelineLabels[data.get('timeline')] || 'Not specified';
  const description = data.get('description') || '';

  const esc = (str) =>
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const message = `📩 <b>New Project Inquiry</b>

👤 <b>Name:</b> ${esc(name)}
🏢 <b>Organization:</b> ${esc(org)}
📧 <b>Email:</b> ${esc(email)}
📱 <b>Phone:</b> ${esc(phone)}

💼 <b>Service:</b> ${service}
💰 <b>Budget:</b> ${budget}
📞 <b>Preferred Contact:</b> ${contactMethod}
⏰ <b>Timeline:</b> ${timeline}

📝 <b>Project Description:</b>
${esc(description)}`;

  return fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML',
    }),
  });
}

export function initContactForm() {
  const form = document.getElementById('urjiko-contact-form');
  if (!form || form.dataset.initialized) return;
  form.dataset.initialized = 'true';

  const fileArea = document.getElementById('file-upload-area');
  const fileInput = document.getElementById('file-input');
  const fileList = document.getElementById('file-list');
  let uploadedFiles = [];

  if (fileArea && fileInput) {
    fileArea.addEventListener('click', () => fileInput.click());

    fileArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      fileArea.style.borderColor = 'var(--color-blue)';
      fileArea.style.background = 'rgba(7, 87, 184, 0.05)';
    });

    fileArea.addEventListener('dragleave', () => {
      fileArea.style.borderColor = 'var(--color-border)';
      fileArea.style.background = 'transparent';
    });

    fileArea.addEventListener('drop', (e) => {
      e.preventDefault();
      fileArea.style.borderColor = 'var(--color-border)';
      fileArea.style.background = 'transparent';
      handleFiles(e.dataTransfer.files);
    });

    fileInput.addEventListener('change', (e) => {
      handleFiles(e.target.files);
    });

    function handleFiles(files) {
      Array.from(files).forEach((file) => {
        if (file.size > 5 * 1024 * 1024) {
          alert(file.name + ' is too large (max 5MB)');
          return;
        }
        if (uploadedFiles.length >= 5) {
          alert('Maximum 5 files allowed');
          return;
        }
        uploadedFiles.push(file);
      });
      renderFileList();
    }
  }

  function renderFileList() {
    const list = document.getElementById('file-list');
    if (!list) return;

    list.innerHTML = uploadedFiles
      .map(
        (file, i) => `
      <div class="file-upload__item">
        <span>${file.name}</span>
        <button type="button" data-index="${i}">&times;</button>
      </div>
    `,
      )
      .join('');

    list.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        uploadedFiles.splice(parseInt(btn.dataset.index), 1);
        renderFileList();
      });
    });
  }

  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.textContent = message;

    // Base styles
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%) translateY(100px)', // Start below screen
      backgroundColor: type === 'success' ? 'var(--color-success)' : 'var(--color-error)',
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

    // Trigger animation in
    requestAnimationFrame(() => {
      toast.style.transform = 'translateX(-50%) translateY(0)';
      toast.style.opacity = '1';
    });

    // Remove after 3.5 seconds
    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = 'Sending...';
    btn.disabled = true;

    try {
      const formData = new FormData(form);
      formData.append('access_key', WEB3FORMS_KEY);
      formData.append('subject', 'New Project Inquiry — URJIKO Labs');
      formData.append('from_name', 'URJIKO Labs Website');

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      sendToTelegram(formData).catch(() => {});

      form.reset();

      // Fix for file list not clearing visually:
      // Update state and call the render function directly
      uploadedFiles = [];
      if (typeof renderFileList === 'function') {
        renderFileList();
      } else {
        const list = document.getElementById('file-list');
        if (list) list.innerHTML = '';
      }

      const customSelects = form.querySelectorAll(
        '.custom-select__trigger span',
      );
      customSelects.forEach((span) => {
        span.textContent = 'Please select...';
        span.style.color = 'var(--color-muted)';
      });

      showToast('Message Sent Successfully!', 'success');
    } catch {
      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }
  });
}
