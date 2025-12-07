# Quick Start - EmailJS Setup

## Quick Setup (5 minutes)

1. **Sign up at EmailJS**: https://www.emailjs.com/ (Free account - 200 emails/month)

2. **Add Email Service**:
   - Dashboard → Email Services → Add New Service
   - Choose Gmail/Outlook/etc.
   - Copy your **Service ID**

3. **Create Email Template**:
   - Dashboard → Email Templates → Create New Template
   - Use this template:
     ```
     Subject: New Contact Form Submission from {{name}}
     
     Body:
     You have received a new contact form submission:
     
     Name: {{name}}
     Email: {{email}}
     Phone: {{phone}}
     Message: {{message}}
     
     Reply to: {{reply_to}}
     ```
   - Set "To Email" to your email (e.g., info@tmats.com)
   - Copy your **Template ID**

4. **Get Public Key**:
   - Dashboard → Account → General
   - Copy your **Public Key**

5. **Create `.env` file** in project root:
   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_TO_EMAIL=info@tmats.com
   ```

6. **Restart dev server**: `npm run dev`

7. **Test**: Fill out the contact form and check your email!

## Need Help?

See `EMAILJS_SETUP.md` for detailed instructions.

