# GitHub Pages Deployment Guide

## Steps to Deploy to GitHub Pages

### 1. Update Configuration (Already Done ✓)
- Created `.github/workflows/deploy.yml`
- Updated `astro.config.mjs` with your GitHub username and repo name

### 2. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Goldmine Masterbatch website"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/goldmine_multitrade_masterbatch.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/goldmine_multitrade_masterbatch`
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically run and deploy your site

### 4. Access Your Site

After deployment completes (2-3 minutes), your site will be live at:
```
https://YOUR_USERNAME.github.io/goldmine_multitrade_masterbatch/
```

## Important Notes

⚠️ **Before pushing to GitHub:**

1. Make sure to replace `samkit.sheth` in `astro.config.mjs` with your actual GitHub username:
   ```js
   site: 'https://YOUR_USERNAME.github.io',
   ```

2. If your repository name is different, update the `base` path:
   ```js
   base: '/your-repo-name',
   ```

## Troubleshooting

### If deployment fails:
1. Check the Actions tab in your GitHub repository
2. Look at the error logs
3. Common issues:
   - Node modules issues: Delete `node_modules` and `package-lock.json`, then `npm install`
   - Permissions: Make sure GitHub Actions has write permissions in Settings → Actions → General

### If styles don't load:
- Make sure the `site` and `base` in `astro.config.mjs` match your GitHub username and repo name

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the `public/` folder with your domain
2. Update `astro.config.mjs`:
   ```js
   site: 'https://yourdomain.com',
   base: '/',
   ```
3. Configure DNS settings with your domain provider

## Local Testing with Base Path

To test the site locally with the base path:

```bash
npm run build
npm run preview
```

Then visit: `http://localhost:4321/goldmine_multitrade_masterbatch/`

