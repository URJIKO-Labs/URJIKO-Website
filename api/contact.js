/**
 * Vercel Serverless Function — Contact Form Submission
 *
 * Handles form submissions from the URJIKO Labs website.
 * Validates input, applies rate limiting, and forwards to Telegram.
 *
 * Required environment variables:
 *   TELEGRAM_BOT_TOKEN  — Bot token from @BotFather
 *   TELEGRAM_CHAT_ID    — Target chat/channel ID
 */

const RATE_LIMIT = 5;
const RATE_WINDOW = 60_000;
const rateLimitMap = new Map();

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getClientIp(req) {
  return (
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    'unknown'
  );
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.start > RATE_WINDOW) {
    rateLimitMap.set(ip, { start: now, count: 1 });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function json(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return json(res, 405, { ok: false, error: 'Method not allowed' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
    return json(res, 500, { ok: false, error: 'Server configuration error' });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return json(res, 429, {
      ok: false,
      error: 'Too many requests. Please try again in a minute.',
    });
  }

  let body;
  try {
    body = await new Promise((resolve, reject) => {
      const chunks = [];
      req.on('data', (c) => chunks.push(c));
      req.on('end', () => {
        try {
          resolve(JSON.parse(Buffer.concat(chunks).toString()));
        } catch {
          reject(new Error('Invalid JSON'));
        }
      });
      req.on('error', reject);
    });
  } catch {
    return json(res, 400, { ok: false, error: 'Invalid request body' });
  }

  const { name, email, organization, phone, service, budget, contactMethod, timeline, description } = body;

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return json(res, 400, { ok: false, error: 'Name is required (min 2 characters).' });
  }
  if (name.length > 100) {
    return json(res, 400, { ok: false, error: 'Name is too long (max 100 characters).' });
  }
  if (!email || typeof email !== 'string' || !validateEmail(email)) {
    return json(res, 400, { ok: false, error: 'A valid email address is required.' });
  }
  if (description && typeof description === 'string' && description.length > 2000) {
    return json(res, 400, { ok: false, error: 'Description is too long (max 2000 characters).' });
  }

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

  const esc = (s) => escapeHtml(s || 'Not specified');
  const eName = esc(name);
  const eOrg = esc(organization);
  const eEmail = esc(email);
  const ePhone = esc(phone);
  const eService = esc(serviceLabels[service] || service);
  const eBudget = esc(budgetLabels[budget] || budget);
  const eContact = esc(contactMethod || 'Telegram');
  const eTimeline = esc(timelineLabels[timeline] || timeline);
  const eDesc = esc(description);

  const message = `📩 <b>New Project Inquiry</b>

👤 <b>Name:</b> ${eName}
🏢 <b>Organization:</b> ${eOrg}
📧 <b>Email:</b> ${eEmail}
📱 <b>Phone:</b> ${ePhone}

💼 <b>Service:</b> ${eService}
💰 <b>Budget:</b> ${eBudget}
📞 <b>Preferred Contact:</b> ${eContact}
⏰ <b>Timeline:</b> ${eTimeline}

📝 <b>Project Description:</b>
${eDesc}`;

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      },
    );

    if (!tgRes.ok) {
      const errBody = await tgRes.text();
      console.error('Telegram API error:', tgRes.status, errBody);
      return json(res, 502, {
        ok: false,
        error: 'Failed to send message. Please try again or contact us directly.',
      });
    }

    return json(res, 200, { ok: true });
  } catch (err) {
    console.error('Telegram send failed:', err);
    return json(res, 500, {
      ok: false,
      error: 'Something went wrong. Please try again later.',
    });
  }
}
