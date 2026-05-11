# EmailJS Setup Guide

Your Contact form is now configured to send emails using EmailJS. Follow these steps to set it up:

## 1. Create an EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account
- Log in to your dashboard

## 2. Get Your Public Key
- In the EmailJS dashboard, go to **Account** settings
- Copy your **Public Key** and paste it in `.env` as `VITE_EMAILJS_PUBLIC_KEY`

## 3. Create an Email Service
- In the EmailJS dashboard, go to **Email Services**
- Click **"Add New Service"**
- Select **Gmail** (or your preferred email service)
- Follow the authentication steps to connect your email service
- Copy the **Service ID** and paste it in `.env` as `VITE_EMAILJS_SERVICE_ID`

## 4. Create an Email Template
- Go to **Email Templates** in your dashboard
- Click **"Create New Template"**
- Use the following template variables:
  - `from_name` - Sender's name
  - `from_email` - Sender's email
  - `to_email` - Recipient email (rushikeshghosalkar023@gmail.com)
  - `message` - Email message body

### Example Template:
```
Subject: New Message from Portfolio

From: {{from_name}} ({{from_email}})
To: {{to_email}}

Message:
{{message}}
```

- Save the template and copy its **Template ID**
- Paste it in `.env` as `VITE_EMAILJS_TEMPLATE_ID`

## 5. Test Your Setup
- Run `npm run dev` to start the development server
- Navigate to the Contact section
- Fill in the form and send a test message
- Check if you receive an email at rushikeshghosalkar023@gmail.com

## Environment Variables
Your `.env` file should look like:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

**Important:** The `.env` file is already added to `.gitignore`, so your credentials won't be committed to version control.
