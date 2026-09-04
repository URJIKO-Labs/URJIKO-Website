import { companyConfig } from "../../config/company.js";
import { icons } from "../common/Icons.js";

export function renderContactInfo() {
  return `
    <div class="flex flex-col gap-6" style="height: 100%;">
      
      <div style="background: var(--color-bg-soft); padding: var(--space-6); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg);">
        <h2 class="text-navy font-semibold text-xl mb-4">Contact Information</h2>
        <p class="text-secondary mb-6" style="line-height: 1.6;">
          Reach out to us directly through email or Telegram. We aim to respond within one business day.
        </p>

        <div class="flex flex-col gap-4">
          
          <a href="tel:${companyConfig.contact.phoneEthioTel}" class="flex items-center gap-3" style="text-decoration: none; color: var(--color-navy); padding: var(--space-3); border-radius: var(--radius-md); background: #FFF; border: 1px solid var(--color-border); transition: border-color 0.2s;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--color-bg-light-blue); display: flex; align-items: center; justify-content: center; color: var(--color-blue); flex-shrink: 0;">
              ${icons.phone("w-5 h-5")}
            </div>
            <div>
              <div class="text-xs text-muted mb-1 font-semibold uppercase tracking-wider">Phone (Ethio Telecom)</div>
              <div class="font-medium">${companyConfig.contact.phoneEthio}</div>
            </div>
          </a>

          <a href="tel:${companyConfig.contact.phoneSafariTel}" class="flex items-center gap-3" style="text-decoration: none; color: var(--color-navy); padding: var(--space-3); border-radius: var(--radius-md); background: #FFF; border: 1px solid var(--color-border); transition: border-color 0.2s;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--color-bg-light-blue); display: flex; align-items: center; justify-content: center; color: var(--color-blue); flex-shrink: 0;">
              ${icons.phone("w-5 h-5")}
            </div>
            <div>
              <div class="text-xs text-muted mb-1 font-semibold uppercase tracking-wider">Phone (Safaricom)</div>
              <div class="font-medium">${companyConfig.contact.phoneSafari}</div>
            </div>
          </a>

          <a href="mailto:${companyConfig.contact.email}" class="flex items-center gap-3" style="text-decoration: none; color: var(--color-navy); padding: var(--space-3); border-radius: var(--radius-md); background: #FFF; border: 1px solid var(--color-border); transition: border-color 0.2s;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--color-bg-light-blue); display: flex; align-items: center; justify-content: center; color: var(--color-blue); flex-shrink: 0;">
              ${icons.mail("w-5 h-5")}
            </div>
            <div>
              <div class="text-xs text-muted mb-1 font-semibold uppercase tracking-wider">Email Us</div>
              <div class="font-medium" style="overflow-wrap: break-word;">${companyConfig.contact.email}</div>
            </div>
          </a>

          <a href="${companyConfig.telegram.url}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3" style="text-decoration: none; color: var(--color-navy); padding: var(--space-3); border-radius: var(--radius-md); background: #FFF; border: 1px solid var(--color-border); transition: border-color 0.2s;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--color-bg-light-blue); display: flex; align-items: center; justify-content: center; color: var(--color-blue); flex-shrink: 0;">
              ${icons.telegram("w-5 h-5")}
            </div>
            <div>
              <div class="text-xs text-muted mb-1 font-semibold uppercase tracking-wider">Direct Message</div>
              <div class="font-medium">Telegram (${companyConfig.telegram.username})</div>
            </div>
          </a>

          <div class="flex items-center gap-3" style="padding: var(--space-3); border-radius: var(--radius-md); background: #FFF; border: 1px solid var(--color-border);">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--color-bg-soft); display: flex; align-items: center; justify-content: center; color: var(--color-muted); flex-shrink: 0;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div>
              <div class="text-xs text-muted mb-1 font-semibold uppercase tracking-wider">Location</div>
              <div class="font-medium text-navy">${companyConfig.contact.location}</div>
            </div>
          </div>

        </div>
      </div>
      
    </div>

    <style>
      @media (max-width: 768px) {
        .flex.flex-col.gap-6[style*="height: 100%"] > div {
          padding: var(--space-4) !important;
        }
      }
    </style>
  `;
}
