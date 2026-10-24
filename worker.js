// Cloudflare Worker for orangepeel.design.
// Only requests to /api/* reach this code (see "run_worker_first" in wrangler.jsonc);
// every page, image and video is served straight from the static files, free and unlimited.
//
// POST /api/contact: takes the contact form (contact.html) and emails it to the studio
// through Cloudflare Email Routing. Replying to the email replies to the person who wrote in.
import { EmailMessage } from "cloudflare:email";

const FROM = "website@orangepeel.design"; // must be an address on the domain; it only sends
const SUBJECT_PREFIX = "New enquiry";
const MAX = { name: 120, email: 200, company: 160, budget: 40, message: 5000, service: 60 };

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact") return contact(request, env);
    return env.ASSETS.fetch(request);
  },
};

async function contact(request, env) {
  if (request.method !== "POST") return json({ ok: false, error: "method" }, 405);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "format" }, 400);
  }

  // Bots fill in the hidden "website" field; pretend it worked and drop it
  if (body.website) return json({ ok: true });

  const clean = (v, n) => String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, n);
  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const company = clean(body.company, MAX.company);
  const budget = clean(body.budget, MAX.budget);
  const services = (Array.isArray(body.services) ? body.services : []).slice(0, 8).map((s) => clean(s, MAX.service)).filter(Boolean);
  const message = String(body.message ?? "").trim().slice(0, MAX.message);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: "missing" }, 400);
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company && `Company: ${company}`,
    services.length && `Help with: ${services.join(", ")}`,
    budget && `Budget: ${budget}`,
    "",
    message,
    "",
    "—",
    "Sent from the contact form on orangepeel.design. Reply to this email to answer them directly.",
  ].filter((l) => l || l === "").join("\r\n"); // drop empty optional lines, keep the blank spacers

  const subject = `${SUBJECT_PREFIX} from ${name}${company ? ` (${company})` : ""}`;
  const raw = [
    `From: Orange Peel website <${FROM}>`,
    `To: ${env.CONTACT_TO}`,
    `Reply-To: ${name.replace(/[<>"]/g, "")} <${email}>`,
    `Subject: ${encodeHeader(subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@orangepeel.design>`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "Content-Transfer-Encoding: base64",
    "",
    base64(lines).replace(/.{1,76}/g, "$&\r\n"),
  ].join("\r\n");

  try {
    await env.CONTACT_EMAIL.send(new EmailMessage(FROM, env.CONTACT_TO, raw));
  } catch (err) {
    console.error("contact email failed", err);
    return json({ ok: false, error: "send" }, 502);
  }
  return json({ ok: true });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
}

function base64(text) {
  const bytes = new TextEncoder().encode(text);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}

// Subjects can contain accents or emoji, so encode them for the email header
function encodeHeader(text) {
  return /^[\x20-\x7e]*$/.test(text) ? text : `=?UTF-8?B?${base64(text)}?=`;
}
