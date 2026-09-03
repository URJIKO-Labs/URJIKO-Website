export function renderBreadcrumbs(items = []) {
  if (!items || items.length <= 1) return '';

  const itemsHtml = items
    .map((item, index) => {
      const isLast = index === items.length - 1;
      if (isLast) {
        return `
          <li aria-current="page">
            <span class="text-secondary font-medium">${item.label}</span>
          </li>
        `;
      }
      return `
        <li>
          <a href="${item.path || '#'}" data-link class="text-muted hover:text-teal">${item.label}</a>
          <span class="mx-2 text-muted" aria-hidden="true" style="margin: 0 var(--space-2);">/</span>
        </li>
      `;
    })
    .join('');

  return `
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol class="flex items-center text-sm" style="list-style: none; padding: 0;" role="list">
        ${itemsHtml}
      </ol>
    </nav>
  `;
}
