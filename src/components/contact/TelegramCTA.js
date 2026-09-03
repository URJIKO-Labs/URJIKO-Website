import { companyConfig } from '../../config/company.js';
import { icons } from '../common/Icons.js';

export function renderTelegramCTA({
  title = 'Have a project idea?',
  description = "Tell us what you're trying to solve. We'll discuss how practical technology can streamline your business.",
  btnText = companyConfig.telegram.ctaText || 'Message Us on Telegram',
} = {}) {
  const telegramUrl = companyConfig.telegram.url;

  return `
    <div class="card card--lg flex flex-col items-start gap-4" style="border-left: 4px solid var(--color-teal); background-color: var(--color-bg-soft);">
      <div class="flex items-center gap-3">
        <div class="card__icon" style="margin-bottom: 0; color: var(--color-teal); background-color: var(--color-white);">
          ${icons.telegram('w-6 h-6')}
        </div>
        <div>
          <h3 style="font-size: var(--font-size-xl); margin-bottom: 0.25rem;">${title}</h3>
          <span class="text-xs text-muted">Primary Direct Messaging Channel</span>
        </div>
      </div>
      <p style="margin-bottom: var(--space-2);">${description}</p>
      <a 
        href="${telegramUrl}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn btn--primary flex items-center gap-2"
      >
        ${icons.telegram('w-5 h-5')}
        <span>${btnText}</span>
      </a>
    </div>
  `;
}
