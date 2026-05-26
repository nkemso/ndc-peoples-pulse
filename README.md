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

## Deployment

### 🚀 Rapid Deployment (Recommended)

#### Backend
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/nkemso/ndc-peoples-pulse)

*Note: Ensure you configure the `DATABASE_URL` and `PUSHER_*` environment variables in the Render dashboard.*

#### Frontend
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnkemso%2Fndc-peoples-pulse&root-directory=frontend)

### Manual Instructions

#### 1. Backend (PostgreSQL + Prisma)
1. Set up a PostgreSQL database.
2. Update `backend/.env` with your `DATABASE_URL`.
3. Run `npm install` in the `backend` folder.
4. Run `npx prisma db push` to initialize the schema.
5. Deploy to a platform like **Render**, **Railway**, or **Heroku**.

#### 2. Frontend
1. Run `npm install` in the `frontend` folder.
2. Build the app: `npm run build`.
3. Deploy the `dist` folder to **Vercel**, **Netlify**, or **GitHub Pages**.

## NDC - Power to the People!
