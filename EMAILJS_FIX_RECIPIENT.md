# 🔧 URGENT FIX: EmailJS Template Configuration

## ❌ Current Error:
```
"The recipients address is empty"
```

This means your EmailJS template is missing the recipient email address configuration.

---

## ✅ SOLUTION - Fix Your EmailJS Template:

### Step 1: Go to EmailJS Dashboard
1. Open [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Go to **Email Templates**
3. Find your template: `template_531y1zj`
4. Click **Edit**

### Step 2: Set the Recipient Email

You have TWO options:

#### **Option A: Hardcode Recipient (Recommended for Portfolio)**

In the template settings, find the **"To Email"** field and enter:
```
ganeshkulakarni124@gmail.com
```

This is the simplest solution - all emails will always go to your email.

#### **Option B: Use Dynamic Recipient**

If you want to use a variable, in the **"To Email"** field, enter:
```
{{to_email}}
```

But this requires the variable to be passed correctly.

---

### Step 3: Configure Template Content

Make sure your template has this structure:

**Subject:**
```
New Contact from {{from_name}}
```

**Content:**
```
Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio website.
```

**Reply-To Email (Important!):**
```
{{from_email}}
```

This allows you to reply directly to the person who contacted you.

---

### Step 4: Save the Template

Click **Save** at the top right.

---

### Step 5: Test Again

1. Go back to your portfolio: http://localhost:5175/
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox!

---

## 🎯 Quick Visual Guide:

When editing your template in EmailJS, you should see these fields:

```
┌─────────────────────────────────────────┐
│ Template Settings                        │
├─────────────────────────────────────────┤
│ Template Name: Contact Form             │
│ Template ID: template_531y1zj           │
│                                          │
│ To Email: ganeshkulakarni124@gmail.com  │  ← SET THIS!
│ From Name: {{from_name}}                │
│ From Email: (your service email)        │
│ Reply-To: {{from_email}}                │  ← SET THIS TOO!
│                                          │
│ Subject: New Contact from {{from_name}} │
│                                          │
│ Content:                                 │
│ [Your message template here]            │
└─────────────────────────────────────────┘
```

---

## 🔍 Alternative: Check Template Settings

If you can't find the "To Email" field:

1. In your template editor, look for **Settings** or **Email Settings**
2. There should be a section for recipient configuration
3. Make sure the recipient email is set to: `ganeshkulakarni124@gmail.com`

---

## ⚡ After You Fix:

Once you've set the recipient email in your EmailJS template:

1. **No code changes needed!** The current code will work
2. Just test the form again
3. You should receive the email within seconds

---

## 📧 Expected Result:

After fixing, when someone fills out your contact form, you'll receive an email like:

```
From: Your Name (via EmailJS)
To: ganeshkulakarni124@gmail.com
Reply-To: visitor@email.com
Subject: New Contact from John Doe

Hello,

You have received a new message from your portfolio contact form:

Name: John Doe
Email: john@example.com

Message:
I'd love to discuss a project with you!

---
This email was sent from your portfolio website.
```

---

## 🆘 Still Having Issues?

If you're still getting errors after setting the recipient:

1. Try creating a **new template** from scratch
2. Use the "Contact Form" template provided by EmailJS
3. Make sure to set the recipient email in the template settings
4. Update the template ID in Contact.jsx

Let me know if you need help!
