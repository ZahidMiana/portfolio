# EmailJS Setup Instructions

Your contact form is now fully functional! Here's how to set up EmailJS to receive actual emails:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID** (e.g., "service_portfolio")

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New message from {{from_name}} - {{subject}}

**Content:**
```
You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save and note down your **Template ID** (e.g., "template_contact")

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Update Your Code
✅ **COMPLETED!** All EmailJS configuration is now set up:

- **Public Key**: `7W-DhLa5F_A8BU5tE` ✅ (configured in `index.html`)
- **Service ID**: `service_portfolio` ✅ (configured in `script.js`)
- **Template ID**: `template_mty3pdv` ✅ (configured in `script.js`)

Your EmailJS configuration in `script.js`:
```javascript
await emailjs.send('service_portfolio', 'template_mty3pdv', {
    from_name: name,        // matches {{from_name}} in template
    from_email: email,      // matches {{from_email}} in template  
    subject: subject || 'New message from portfolio', // matches {{subject}} in template
    message: message        // matches {{message}} in template
});
```

**✅ All Variable Matching Confirmed:**
- JavaScript `from_name` → EmailJS template `{{from_name}}`
- JavaScript `from_email` → EmailJS template `{{from_email}}`
- JavaScript `subject` → EmailJS template `{{subject}}`
- JavaScript `message` → EmailJS template `{{message}}`

## Step 6: Test Your Form
1. Open your portfolio website
2. Fill out the contact form
3. Submit it
4. Check your email for the message

## Troubleshooting
- Make sure all IDs match exactly (case-sensitive)
- Check the browser console for any error messages
- Verify your EmailJS account limits (free tier has limits)
- If EmailJS fails, the form will fallback to opening the user's email client

## Alternative: Simple Mailto Fallback
If you don't want to set up EmailJS, the form will automatically fallback to opening the user's default email client with a pre-filled message.

Your contact form now includes:
✅ Form validation
✅ Email format validation
✅ Loading states
✅ Success/error notifications
✅ EmailJS integration
✅ Mailto fallback
✅ Mobile-responsive notifications
