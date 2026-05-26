# NDC: The People's Pulse - Zero-Cost Multi-Agent Edition

A decentralized mobilization platform for the NDC, engineered for **Zero Operating Costs** using free-tier protocols.

## 🤖 Multi-Agent System
- **Content Agent (Qwen 2.5)**: Powered by Hugging Face Inference API. Transforms policy into Pidgin/Simplified English.
- **Strategy Agent (Llama 3.1)**: Powered by Groq. Analyzes ward-level data for actionable mobilization steps.
- **Verification Agent**: Logic-based NIN/PVC integrity checker.

## 🚀 Hands-Free Deployment Guide

I have set up a **Render Blueprint** in this repository. To deploy everything (Frontend + Backend + Database) at once for free:

1.  **Create a Free Account** on [Render.com](https://render.com).
2.  **Go to Blueprints**: Click "New" -> "Blueprint".
3.  **Connect this Repository**: Select `ndc-peoples-pulse`.
4.  **Click "Apply"**: Render will automatically build the Database, Backend, and Frontend based on the `render.yaml` file I created.

### Environment Variables to add in Render:
*   `HF_TOKEN`: Get a free API token from [Hugging Face](https://huggingface.co/settings/tokens).
*   `GROQ_API_KEY`: Get a free API key from [Groq Console](https://console.groq.com/keys).
*   `PUSHER_APP_ID`, `PUSHER_KEY`, `PUSHER_SECRET`, `PUSHER_CLUSTER`: Get free keys from [Pusher](https://pusher.com).

## 📱 Mobile-First Features
- **Zero-Cost USSD Bridge**: Offline simulation via zero-rated protocols.
- **Digital ID Card**: QR-code enabled membership verification.
- **Financial Ledger**: "Open Books" transparency for radical trust.

## 🛠 Tech Stack
- **Frontend**: React (Vite) + Tailwind CSS + Lucide Icons.
- **Backend**: Node.js + Express + Prisma (Postgres).
- **Multi-Agent**: Groq (Llama 3) & Hugging Face (Qwen).

**NDC—Power to the People!**
