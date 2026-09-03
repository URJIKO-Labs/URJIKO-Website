import { icons } from './Icons.js';

export function renderLoadingState({ text = 'Loading content...' } = {}) {
  return `
    <div class="loading" role="status" aria-live="polite">
      <div class="loading__spinner" aria-hidden="true"></div>
      <p class="loading__text">${text}</p>
    </div>
  `;
}

export function renderErrorState({
  title = 'Something went wrong',
  description = "We couldn't load this content right now. Please check your connection and try again.",
  retryBtnText = 'Try Again',
  onRetryAction = 'window.location.reload()',
} = {}) {
  return `
    <div class="error-state" role="alert">
      <div class="error-state__icon">
        ${icons.alertTriangle('w-8 h-8')}
      </div>
      <h3 class="error-state__title">${title}</h3>
      <p class="error-state__description">${description}</p>
      ${
        retryBtnText
          ? `
        <button type="button" onclick="${onRetryAction}" class="btn btn--secondary btn--sm">
          ${retryBtnText}
        </button>
      `
          : ''
      }
    </div>
  `;
}

export function renderEmptyState({
  title = 'No items found',
  description = 'Check back soon as we continuously update our platform and solutions.',
  actionLabel = null,
  actionPath = null,
} = {}) {
  return `
    <div class="empty-state">
      <div class="empty-state__icon">
        ${icons.inbox('w-12 h-12')}
      </div>
      <h3 class="empty-state__title">${title}</h3>
      <p class="empty-state__description">${description}</p>
      ${
        actionLabel && actionPath
          ? `
        <a href="${actionPath}" data-link class="btn btn--primary btn--sm">
          ${actionLabel}
        </a>
      `
          : ''
      }
    </div>
  `;
}
