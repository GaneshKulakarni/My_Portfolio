# 🔐 Security Guide for Portfolio Project

## ⚠️ IMPORTANT: You Already Pushed Secrets to GitHub!

### **What Was Exposed:**
Your EmailJS credentials were pushed to GitHub in the previous commit:
- Service ID: `service_xc2kffo`
- Template ID: `template_ubzbkjb`
- Public Key: `Ngwi16u41dSZiG9w7`

---

## 🚨 **IMMEDIATE ACTIONS REQUIRED:**

### **1. Regenerate Your EmailJS Keys** (CRITICAL)

Since your keys are now public on GitHub, you should regenerate them:

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Account** → **General**
3. Click **Regenerate** next to your Public Key
4. Update your `.env` file with the new key
5. (Optional) Create a new service/template with new IDs

### **2. Remove Secrets from Git History**

Your secrets are still in Git history. To completely remove them:

```bash
# WARNING: This rewrites Git history - coordinate with team if applicable
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch src/components/Contact.jsx" \
  --prune-empty --tag-name-filter cat -- --all

# Force push to GitHub (DANGEROUS - only if you're the only contributor)
git push origin --force --all
```

**OR** (Easier but less secure):
Just regenerate your keys and move forward with environment variables.

---

## ✅ **What We Fixed:**

### **1. Created `.env` File**
```env
VITE_EMAILJS_SERVICE_ID=service_xc2kffo
VITE_EMAILJS_TEMPLATE_ID=template_ubzbkjb
VITE_EMAILJS_PUBLIC_KEY=Ngwi16u41dSZiG9w7
```

### **2. Updated Contact.jsx**
Changed from hardcoded values to environment variables:
```javascript
// Before (INSECURE)
'service_xc2kffo'

// After (SECURE)
import.meta.env.VITE_EMAILJS_SERVICE_ID
```

### **3. Added to `.gitignore`**
```
.env
.env.local
.env.production
```

### **4. Created `.env.example`**
Template file for other developers (safe to commit).

---

## 📋 **Security Checklist:**

- [x] Created `.env` file with credentials
- [x] Updated `Contact.jsx` to use environment variables
- [x] Added `.env` to `.gitignore`
- [x] Created `.env.example` template
- [ ] **REGENERATE EmailJS keys** (DO THIS NOW!)
- [ ] Test contact form still works
- [ ] Commit and push changes
- [ ] (Optional) Remove secrets from Git history

---

## 🔄 **Next Steps:**

### **For Local Development:**
1. Your `.env` file is already set up
2. Restart your dev server: `npm run dev`
3. Test the contact form

### **For Deployment (Vercel/Netlify/etc):**
1. Go to your deployment platform
2. Add environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Redeploy your site

### **For GitHub:**
1. **DO NOT** commit `.env` file
2. **DO** commit `.env.example` file
3. Update your README with setup instructions

---

## 📝 **README Setup Instructions to Add:**

```markdown
## Environment Variables

This project uses EmailJS for the contact form. To run locally:

1. Copy `.env.example` to `.env`
2. Fill in your EmailJS credentials:
   - Get them from https://dashboard.emailjs.com/
3. Never commit the `.env` file to Git
```

---

## 🛡️ **Best Practices Going Forward:**

1. ✅ **Never hardcode secrets** in source code
2. ✅ **Always use environment variables** for sensitive data
3. ✅ **Add `.env` to `.gitignore`** immediately
4. ✅ **Use `.env.example`** as a template
5. ✅ **Regenerate keys** if they're ever exposed
6. ✅ **Review commits** before pushing to GitHub

---

## ⚡ **Quick Commands:**

```bash
# Restart dev server to load new env vars
npm run dev

# Check if .env is ignored
git status

# Commit the security fixes
git add .
git commit -m "Security: Move EmailJS credentials to environment variables"
git push
```

---

## 🎯 **Summary:**

**Risk Level:** MEDIUM ⚠️
- EmailJS public keys are designed for frontend use
- However, anyone can now use your service
- **ACTION REQUIRED:** Regenerate your EmailJS keys

**What's Protected Now:**
- ✅ Future commits won't expose secrets
- ✅ `.env` is in `.gitignore`
- ✅ Code uses environment variables

**What's Still at Risk:**
- ⚠️ Old commits in Git history still have secrets
- ⚠️ Keys are public on GitHub
- **SOLUTION:** Regenerate keys immediately!

---

## 📞 **Need Help?**

If you need to completely remove secrets from Git history, consider using:
- [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)
- GitHub's guide: [Removing sensitive data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)

**Remember:** The easiest solution is to just regenerate your EmailJS keys! 🔑
