{
  "id": "newsletter-sendgrid",
  "name": "Newsletter Form with SendGrid",
  "prompt": "Create a newsletter signup form that sends emails to a SendGrid contact list",
  "description": "A basic form component that collects an email address and sends it to SendGrid's marketing contacts API.",
  "env": ["SENDGRID_API_KEY", "SENDGRID_LIST_ID"],
  "tags": ["form", "newsletter", "sendgrid", "email"],
  "exports": ["component.tsx", "api.ts"],
  "requiresApi": true
}
