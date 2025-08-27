# Vercel Deployment Guide

## 🚀 Deploy Your Linux AI Agent Landing Page to Vercel

### Prerequisites
- GitHub account with your project repository
- Vercel account (free tier available)

### Step 1: Prepare Your Repository
1. Make sure all your changes are committed and pushed to GitHub
2. Ensure your project builds successfully with `npm run build`

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite React project
5. Click "Deploy"

#### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts to configure your project
```

### Step 3: Configure Build Settings
Vercel should automatically detect these settings, but verify:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 4: Environment Variables (if needed)
Currently, no environment variables are required for this project.

### Step 5: Custom Domain (Optional)
1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Follow DNS configuration instructions

### Step 6: Update Razorpay Payment Link
**Important**: Before going live, update the payment link in `src/components/Registration.tsx`:
```typescript
const razorpayLink = 'YOUR_ACTUAL_RAZORPAY_PAYMENT_LINK';
```

### Step 7: Verify Deployment
1. Check all pages load correctly
2. Test the countdown timer
3. Verify all links work
4. Test responsive design on mobile
5. Check Lottie animation loads (if you have the file)

### Troubleshooting

#### Build Issues
- Ensure all dependencies are in `package.json`
- Check for any TypeScript errors
- Verify all image files are in `public/images/`

#### Performance Issues
- The build shows a warning about chunk size (>500KB)
- This is normal for a landing page with animations
- Consider code splitting if you add more features

#### Lottie Animation Not Loading
- Ensure `public/animations/linux.json` exists
- Check browser console for 404 errors
- Verify the file path is correct

### Post-Deployment Checklist
- [ ] All pages load without errors
- [ ] Countdown timer works correctly
- [ ] Payment button redirects properly
- [ ] All social media links work
- [ ] Responsive design works on all devices
- [ ] Images and logos display correctly
- [ ] Contact information is accurate

### Support
If you encounter issues:
1. Check Vercel deployment logs
2. Verify all files are committed to GitHub
3. Ensure the project builds locally with `npm run build`

Your landing page should now be live on Vercel! 🎉 