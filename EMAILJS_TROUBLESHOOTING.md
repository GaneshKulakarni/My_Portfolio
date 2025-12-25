# EmailJS Troubleshooting Guide

## ✅ What I Just Fixed:

1. **Installed official EmailJS SDK** (`@emailjs/browser`)
2. **Updated Contact.jsx** to use the proper EmailJS SDK instead of direct API calls
3. **Added better error messages** - now you'll see the actual error from EmailJS

---

## 🔍 Verify Your EmailJS Setup:

### Step 1: Check Your EmailJS Dashboard

Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)

#### Verify Service ID: `service_xc2kffo`
1. Go to **Email Services** tab
2. Make sure you have a service with ID `service_xc2kffo`
3. Verify it's **connected** (should show green checkmark)
4. If using Gmail, make sure you authorized EmailJS to send emails

#### Verify Template ID: `template_531y1zj`
1. Go to **Email Templates** tab
2. Find template with ID `template_531y1zj`
3. Click **Edit** and verify it has these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_email}}` (optional, can be hardcoded)

**Example Template:**
```
Subject: New Contact from {{from_name}}

Hello,

You received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

#### Verify Public Key: `Ngwi16u41dSZiG9w7`
1. Go to **Account** → **General** (or **API Keys**)
2. Find your **Public Key** (also called User ID)
3. Make sure it matches: `Ngwi16u41dSZiG9w7`

---

## 🧪 Test the Form:

1. Open your portfolio: http://localhost:5173/
2. Scroll to the Contact section
3. Fill out the form with test data:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
4. Click "Send Message"
5. **Check browser console** (F12 → Console tab)
   - Look for "EmailJS Response:" log
   - If there's an error, it will show the specific issue

---

## 🐛 Common Issues & Solutions:

### Error: "The public key is required"
- Your Public Key might be incorrect
- Go to EmailJS Dashboard → Account → General
- Copy the Public Key again and update Contact.jsx

### Error: "Template not found"
- Template ID is wrong or template doesn't exist
- Verify template ID in EmailJS Dashboard → Email Templates

### Error: "Service not found"
- Service ID is wrong or service is not connected
- Verify service ID in EmailJS Dashboard → Email Services
- Make sure the service is connected (green checkmark)

### Error: "Failed to send email"
- Your email service might not be properly authorized
- Go to Email Services → Click your service → Reconnect
- For Gmail: Make sure you allow EmailJS access

### Error: "Invalid template parameters"
- Template variables don't match
- Edit your template and make sure it uses:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{message}}`

---

## 📊 Check EmailJS Quota:

Free tier limits:
- **200 emails/month**
- Check your usage: Dashboard → Account → Usage

---

## 🔧 Alternative: Test with EmailJS Test Mode

1. Go to your template in EmailJS Dashboard
2. Click **Test It** button
3. Fill in test values
4. Click **Send Test Email**
5. Check if you receive the email

If test email works but form doesn't:
- The issue is in the frontend code
- Check browser console for errors
- Verify all IDs match exactly

If test email doesn't work:
- The issue is with EmailJS setup
- Reconnect your email service
- Check spam folder

---

## 🎯 Quick Verification Checklist:

- [ ] EmailJS account created and verified
- [ ] Email service connected (green checkmark in dashboard)
- [ ] Service ID matches: `service_xc2kffo`
- [ ] Template created with correct variables
- [ ] Template ID matches: `template_531y1zj`
- [ ] Public Key matches: `Ngwi16u41dSZiG9w7`
- [ ] Template test email works
- [ ] Browser console shows no errors
- [ ] Not exceeding 200 emails/month limit

---

## 💡 Still Not Working?

1. **Open browser console** (F12)
2. Try sending a message
3. Copy the error message
4. Share it with me - I'll help you fix it!

Or we can switch to the simple mailto solution that works immediately.

---

## 📝 Current Configuration:

```javascript
Service ID:   service_xc2kffo
Template ID:  template_531y1zj
Public Key:   Ngwi16u41dSZiG9w7
Recipient:    ganeshkulakarni124@gmail.com
```

Make sure these match EXACTLY in your EmailJS dashboard!
