import express from 'express';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// Serve static frontend files from 'dist' directory (Vite build output)
app.use(express.static(path.join(__dirname, 'dist')));

// Configure Multer for file uploads (memory storage for passing directly to Telegram)
// Allowing up to 10MB as requested
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

// Helper for escaping HTML in Telegram messages
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

app.post('/api/contact', upload.array('files', 5), async (req, res) => {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return res
        .status(500)
        .json({ ok: false, error: 'Server configuration error' });
    }

    const {
      name,
      email,
      organization,
      phone,
      service,
      budget,
      contactMethod,
      timeline,
      description,
    } = req.body;
    const files = req.files || [];

    if (!name || name.trim().length < 2) {
      return res.status(400).json({ ok: false, error: 'Name is required.' });
    }
    if (!email) {
      return res.status(400).json({ ok: false, error: 'Email is required.' });
    }

    const esc = (s) => escapeHtml(s || 'Not specified');
    const message = `📩 <b>New Project Inquiry</b>\n\n👤 <b>Name:</b> ${esc(name)}\n🏢 <b>Org:</b> ${esc(organization)}\n📧 <b>Email:</b> ${esc(email)}\n📱 <b>Phone:</b> ${esc(phone)}\n💼 <b>Service:</b> ${esc(service)}\n💰 <b>Budget:</b> ${esc(budget)}\n📞 <b>Method:</b> ${esc(contactMethod)}\n⏰ <b>Timeline:</b> ${esc(timeline)}\n📝 <b>Description:</b>\n${esc(description)}`;

    // --- EMAIL SETUP (Nodemailer) ---
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (gmailUser && gmailPass) {
      try {
        const nodemailer = await import('nodemailer');
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        });

        const mailOptions = {
          from: `"URJIKO Website" <${gmailUser}>`,
          to: gmailUser, // Send to yourself
          subject: `New Project Inquiry from ${name || 'Website'}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
              <div style="background-color: #0d1b2a; color: white; padding: 20px; text-align: center;">
                <h2 style="margin: 0; font-size: 24px;">New Project Inquiry</h2>
              </div>
              <div style="padding: 20px; background-color: #f8fafc;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${esc(name)}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong>Organization:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${esc(organization)}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${esc(phone)}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong>Service Needed:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${esc(service)}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong>Budget:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${esc(budget)}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong>Timeline:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${esc(timeline)}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong>Contact Method:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${esc(contactMethod)}</td></tr>
                </table>
                <div style="margin-top: 20px;">
                  <strong>Project Description:</strong>
                  <p style="background: white; padding: 15px; border-radius: 4px; border: 1px solid #e2e8f0; white-space: pre-wrap;">${esc(description)}</p>
                </div>
              </div>
            </div>
          `,
          attachments: files.map((f) => ({
            filename: f.originalname,
            content: f.buffer,
          })),
        };

        await transporter.sendMail(mailOptions);
      } catch (emailErr) {
        console.error('Failed to send Email:', emailErr);
        // We do not throw here, because we still want to try sending the Telegram message
      }
    }
    // --- END EMAIL SETUP ---

    // If no files, just send standard message
    if (files.length === 0) {
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
      if (!tgRes.ok) throw new Error('Telegram API error');
      return res.json({ ok: true });
    }

    // Send the text message first
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
    if (!tgRes.ok) throw new Error('Telegram API error (Message)');

    // If exactly 1 file, send as a single document
    if (files.length === 1) {
      const file = files[0];
      const formData = new FormData();
      formData.append('chat_id', chatId);
      const blob = new Blob([file.buffer], { type: file.mimetype });
      formData.append('document', blob, file.originalname);

      const docRes = await fetch(
        `https://api.telegram.org/bot${token}/sendDocument`,
        {
          method: 'POST',
          body: formData,
        },
      );
      if (!docRes.ok)
        console.error('Failed to send document', file.originalname);
    }
    // If 2-5 files, send as a single grouped album (MediaGroup)
    else if (files.length > 1) {
      const formData = new FormData();
      formData.append('chat_id', chatId);

      const mediaGroup = files.map((file, i) => {
        const attachName = `file${i}`;
        const blob = new Blob([file.buffer], { type: file.mimetype });
        formData.append(attachName, blob, file.originalname);
        return {
          type: 'document',
          media: `attach://${attachName}`,
        };
      });

      formData.append('media', JSON.stringify(mediaGroup));

      const groupRes = await fetch(
        `https://api.telegram.org/bot${token}/sendMediaGroup`,
        {
          method: 'POST',
          body: formData,
        },
      );
      if (!groupRes.ok) {
        const err = await groupRes.text();
        console.error('Failed to send media group', err);
      }
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error('Submission error:', err);
    return res
      .status(500)
      .json({ ok: false, error: 'Something went wrong. Please try again.' });
  }
});

// Fallback for SPA routing
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
