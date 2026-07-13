import type { APIRoute } from "astro";

export const prerender = false;

function escape(str: string) {
  return str.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );
}

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const name = escape(String(form.get("name") ?? "").trim());
  const email = escape(String(form.get("email") ?? "").trim());
  const message = escape(String(form.get("message") ?? "").trim());

  if (!name || !email || !message) {
    return new Response(
      `<div id="contact-form-wrapper" class="space-y-2">
         <p class="font-mono text-xs text-red">Please fill in every field.</p>
       </div>`,
      { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const clientEmail = import.meta.env.CLIENT_EMAIL;

  if (!resendApiKey || resendApiKey === "your_resend_api_key_here" || !clientEmail || clientEmail.includes("@example.com")) {
    console.warn("Resend API key or client email is not configured in .env. Falling back to console log.");
    console.log("New contact message:", { name, email, message });
  } else {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact Form <onboarding@resend.dev>",
          to: clientEmail,
          subject: `New Portfolio Message from ${name}`,
          html: `
            <h3>New Message from Portfolio Dashboard</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          `,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Resend API error:", errorText);
        throw new Error("Failed to send message via Resend");
      }
    } catch (err) {
      console.error("Error sending email via Resend:", err);
      return new Response(
        `<div id="contact-form-wrapper" class="space-y-2">
           <p class="font-mono text-xs text-red">Failed to send email. Please email directly or try again.</p>
         </div>`,
        { status: 500, headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }
  }

  return new Response(
    `<div id="contact-form-wrapper" class="border border-rule rounded-sm p-3 bg-paper-dim/40">
       <p class="font-mono text-xs text-ink">Thanks, ${name.split(" ")[0]}. Message received —</p>
       <p class="font-mono text-xs text-muted">I'll get back to you at ${email}.</p>
     </div>`,
    { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
};
