# NDC: The People's Pulse - Unified Build

A decentralized, transparent, and action-oriented political platform for the Nigerian Democratic Congress (NDC).

## Project Structure
- `/frontend`: React + Vite + Tailwind CSS (Mobile-First UI)
- `/backend`: Node.js + Express + Prisma (PostgreSQL)
- `docker-compose.yml`: For rapid local deployment

## Features
- **Mobile-First Design**: Optimized for mobile devices with a bottom navigation system.
- **Biometric Onboarding**: Integrated flows for NIN/PVC verification.
- **Financial Transparency**: Open Books ledger with mock blockchain hashes.
- **Golden Works AI**: Policy-to-Pidgin content engine.
- **USSD Bridge**: Offline access simulation for grassroots mobilization.

## Deployment Instructions

### 1. Backend (PostgreSQL + Prisma)
1. Set up a PostgreSQL database.
2. Update `backend/.env` with your `DATABASE_URL`.
3. Run `npm install` in the `backend` folder.
4. Run `npx prisma db push` to initialize the schema.
5. Deploy to a platform like **Render**, **Railway**, or **Heroku**.

### 2. Frontend
1. Run `npm install` in the `frontend` folder.
2. Build the app: `npm run build`.
3. Deploy the `dist` folder to **Vercel**, **Netlify**, or **GitHub Pages**.

### 3. Git Push
When you are ready with your GitHub token:
```bash
git remote add origin https://<token>@github.com/<username>/ndc-peoples-pulse.git
git branch -M main
git push -u origin main
```

## NDC - Power to the People!
