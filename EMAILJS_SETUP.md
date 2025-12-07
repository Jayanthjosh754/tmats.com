# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions via email.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use the following template:

**Subject:**
```
New Contact Form Submission from {{name}}
```

**Content:**
```
You have received a new contact form submission:

Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Message: {{message}}

---
Reply to: {{reply_to}}
```

4. Set the **To Email** field to your email address (e.g., `info@tmats.com`)
5. Set the **From Name** field to: `{{from_name}}`
6. Set the **Reply To** field to: `{{reply_to}}`
7. Note down your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General** in your EmailJS dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)
3. Copy this key

## Step 5: Configure the Application

### Option A: Using Environment Variables (Recommended)

1. Create a `.env` file in the root of your project
2. Add the following variables:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_TO_EMAIL=info@tmats.com
```

3. Replace the placeholder values with your actual EmailJS credentials
4. Restart your development server

### Option B: Direct Configuration

1. Open `src/lib/emailjs-config.ts`
2. Replace the placeholder values with your actual EmailJS credentials:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "your_actual_public_key",
  SERVICE_ID: "your_actual_service_id",
  TEMPLATE_ID: "your_actual_template_id",
  TO_EMAIL: "info@tmats.com",
};
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out the form and submit
4. Check your email inbox for the submission

## Troubleshooting

### Email not received?
- Check your spam/junk folder
- Verify your EmailJS service is connected correctly
- Check the browser console for any error messages
- Ensure your email service (Gmail, Outlook, etc.) allows third-party apps

### Configuration Error?
- Make sure all three values (PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID) are set
- Verify the values are correct (no extra spaces)
- Check that your template variables match: `{{name}}`, `{{email}}`, `{{phone}}`, `{{message}}`

### Rate Limits?
- Free tier: 200 emails/month
- Consider upgrading if you need more emails

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Public Key is safe to expose (it's meant to be public)
- Service ID and Template ID should be kept private in production

## Support

For EmailJS support, visit: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

