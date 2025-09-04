# Google Developers Event 2025 Registration Portal

A modern registration portal for the Google Developers Event 2025, built with Next.js and deployed on Vercel.

## 🚀 Live Demo

[https://gdg-theta.vercel.app/](https://gdg-theta.vercel.app/)

## ✨ Features
- Beautiful, animated registration form
- Collects Name, Email, and Phone
- Submits registrations to a Google Sheet via SheetDB API
- Responsive and mobile-friendly UI
- Thank you page with event details

## 🛠️ Getting Started

### 1. Clone the repository
```sh
git clone <your-repo-url>
cd frontend
```

### 2. Install dependencies
```sh
pnpm install
# or
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the `frontend` directory:
```
NEXT_PUBLIC_SHEETDB_API=https://sheetdb.io/api/v1/qh2az9g0nfk1y
```

> **Note:** `.env.local` is gitignored and should not be committed.

### 4. Run locally
```sh
pnpm dev
# or
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## 🏗️ Deployment
This project is deployed on Vercel: [https://gdg-theta.vercel.app/](https://gdg-theta.vercel.app/)

To deploy your own version:
1. Install [Vercel CLI](https://vercel.com/docs/cli):
   ```sh
   npm install -g vercel
   ```
2. Run `vercel` in the `frontend` directory and follow the prompts.
3. Set the `NEXT_PUBLIC_SHEETDB_API` environment variable in your Vercel project settings.

## 🔒 Security
- No sensitive API keys are stored in the codebase.
- All secrets are managed via environment variables.

## 📄 License
MIT
