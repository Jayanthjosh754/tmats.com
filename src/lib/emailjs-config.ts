// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables: {{name}}, {{email}}, {{phone}}, {{message}}
// 4. Get your Public Key, Service ID, and Template ID
// 5. Add them to your .env file or replace the values below

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (found in Account > API Keys)
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "L6DMhZ0E06TAqwl6n",
  
  // Your EmailJS Service ID (found in Email Services)
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_rvcqk21",
  
  // Your EmailJS Template ID (found in Email Templates)
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_7420t7y",
  
  // Optional: Auto-reply template ID (send confirmation to the sender)
  AUTOREPLY_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || "template_en150nw",
  
  // Your email address where you want to receive contact form submissions
  TO_EMAIL: import.meta.env.VITE_TO_EMAIL || "info@tm-ats.com",
  
  // Company display name for emails
  COMPANY_NAME: import.meta.env.VITE_COMPANY_NAME || "TM ATS",
};

