# EmailJS Setup Guide for Contact Form

Your contact form is now configured to send real emails! Follow these steps to complete the setup:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. After logging in, go to the **Email Services** section
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - Select **Gmail**
   - Click **Connect Account**
   - Sign in with your Google account (ganeshkulakarni124@gmail.com)
   - Allow EmailJS to send emails on your behalf
4. Copy the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to the **Email Templates** section
2. Click **Create New Template**
3. Use this template content:

**Template Name:** `contact_form`

**Subject:** `New Contact Form Message from {{from_name}}`

**Content:**
```
Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio website contact form.
```

4. Click **Save**
5. Copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** (or API Keys)
2. Find your **Public Key** (also called User ID)
3. Copy it

## Step 5: Update Your Contact Component

Open `src/components/Contact.jsx` and replace these placeholders (around lines 25-27):

```javascript
service_id: 'YOUR_SERVICE_ID',      // Replace with your Service ID from Step 2
template_id: 'YOUR_TEMPLATE_ID',    // Replace with your Template ID from Step 3
user_id: 'YOUR_PUBLIC_KEY',         // Replace with your Public Key from Step 4
```

## Example Configuration

After setup, your code should look like this:

```javascript
body: JSON.stringify({
    service_id: 'service_abc123',      // Your actual Service ID
    template_id: 'template_xyz789',    // Your actual Template ID
    user_id: 'user_def456',            // Your actual Public Key
    template_params: {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'ganeshkulakarni124@gmail.com',
    },
}),
```

## Step 6: Test Your Contact Form

1. Make sure your dev server is running (`npm run dev`)
2. Navigate to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. You should see a success message
6. Check your email inbox (ganeshkulakarni124@gmail.com)

## Troubleshooting

### Email not sending?
- Double-check all three IDs are correct
- Make sure you're using the Public Key, not the Private Key
- Verify your email service is connected in EmailJS dashboard
- Check browser console for error messages

### Getting CORS errors?
- EmailJS should handle CORS automatically
- Make sure you're using the correct API endpoint: `https://api.emailjs.com/api/v1.0/email/send`

### Free Tier Limits
- EmailJS free tier allows 200 emails/month
- This should be plenty for a portfolio website
- Upgrade if you need more

## Alternative: Simple Mailto Solution

If you prefer a simpler solution without EmailJS setup, I can implement a mailto link that opens the user's email client instead. Just let me know!

## Security Note

The Public Key is safe to expose in frontend code - it's designed for client-side use. Never expose your Private Key!
