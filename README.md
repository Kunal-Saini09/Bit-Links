# 🔗 Bit-Links - URL Shortener

A modern URL shortener built with Next.js 16 and MongoDB. Convert long URLs into short, shareable links with instant redirection.

---

## 🚀 Features

- Create short, custom URLs
- Instant redirection to original URLs
- URL validation and error handling
- Clean and responsive UI (Tailwind CSS)
- Fast and lightweight
- Serverless architecture (Vercel-ready)

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Database:** MongoDB
- **Hosting:** Vercel
- **Styling:** Tailwind CSS

---

## 📸 Screenshots

<img width="1919" height="874" alt="Screenshot 2026-01-07 205920" src="https://github.com/user-attachments/assets/10492789-58ea-4930-a3b8-2f0c8eb6457e" />

---

## 🔧 Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   ```bash
   cp .env.local.example .env.local
   ```

3. **Add your MongoDB connection string to `.env.local`:**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** to see the app

---

## 🚀 Vercel Deployment Guide

### 1. Push Code to GitHub
Make sure your code is pushed to a GitHub repository.

### 2. Import Project to Vercel
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel will auto-detect Next.js settings

### 3. Configure MongoDB Atlas (IMPORTANT!)
Before deploying, you **must** configure MongoDB Atlas to allow Vercel connections:

1. Go to [MongoDB Atlas Dashboard](https://cloud.mongodb.com)
2. Select your cluster
3. Click **Network Access** in the left sidebar
4. Click **Add IP Address**
5. Select **"Allow Access from Anywhere"** (0.0.0.0/0)
   - This is required because Vercel uses dynamic IPs
   - Click **Confirm**

### 4. Add Environment Variables in Vercel
1. In Vercel Dashboard, go to: **Project Settings → Environment Variables**
2. Add the following variable:
   - **Name:** `MONGODB_URI`
   - **Value:** Your MongoDB connection string (from MongoDB Atlas)
   - **Environments:** Select Production, Preview, and Development
3. Click **Save**

### 5. Deploy
- Click **Deploy** in Vercel
- Vercel will build and deploy your app automatically
- Check deployment logs for any errors

### 6. Verify Deployment
- Visit your deployed URL (e.g., `https://your-app.vercel.app`)
- Test creating a short URL
- Test the redirect functionality

---

## ❗ Troubleshooting Vercel Issues

### Issue: "MongoServerSelectionError" or Connection Timeout

**Solution:**
1. Go to MongoDB Atlas → Network Access
2. Ensure `0.0.0.0/0` is in the IP whitelist
3. If it times out after that, wait 2-3 minutes for MongoDB to update

### Issue: Environment Variable Not Found

**Solution:**
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Verify `MONGODB_URI` is set
3. **Important:** Redeploy after adding environment variables
   - Go to Deployments tab
   - Click the three dots on the latest deployment
   - Click "Redeploy"

### Issue: App Works Locally But Not on Vercel

**Check:**
1. MongoDB Atlas IP whitelist includes `0.0.0.0/0`
2. Environment variable `MONGODB_URI` is set in Vercel
3. MongoDB connection string includes `?retryWrites=true&w=majority`
4. View function logs in Vercel Dashboard → Deployments → Function Logs

### Issue: Function Timeout

**Solution:**
- The `vercel.json` file already configures 10-second timeout
- If still timing out, check MongoDB Atlas performance metrics

---

## 📂 Project Structure

```
bit-links/
├── app/
│   ├── api/
│   │   └── generate/          # API route for creating short URLs
│   ├── [shorturl]/            # Dynamic route for URL redirects
│   ├── shorten/               # URL shortening page
│   ├── about/                 # About page
│   ├── contact/               # Contact page
│   └── layout.js              # Root layout
├── components/
│   ├── Navbar.js              # Navigation component
│   └── Animated.js            # Animation component
├── lib/
│   └── mongodb.js             # MongoDB connection (serverless-optimized)
├── public/
│   └── vector.avif            # Static assets
├── .env.local.example         # Environment variables template
├── vercel.json                # Vercel configuration
└── next.config.mjs            # Next.js configuration
```

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- [Vercel Documentation](https://vercel.com/docs)

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
