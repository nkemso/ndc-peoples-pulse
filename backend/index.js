const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const Pusher = require('pusher');
const { contentAgent, strategyAgent } = require('./ai_agents');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 5000;

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID || "app_id",
  key: process.env.PUSHER_KEY || "key",
  secret: process.env.PUSHER_SECRET || "secret",
  cluster: process.env.PUSHER_CLUSTER || "mt1",
  useTLS: true
});

app.use(cors());
app.use(bodyParser.json());

// --- AI Endpoints ---

// Golden Works AI (Content Agent)
app.post('/api/ai/generate-content', async (req, res) => {
  const { prompt, tone } = req.body;
  const content = await contentAgent(prompt, tone);
  res.json({ content });
});

// Strategic Intelligence (Strategy Agent)
app.post('/api/ai/analyze-strategy', async (req, res) => {
  const { context } = req.body;
  const analysis = await strategyAgent(context);
  res.json({ analysis });
});

// --- Other Routes ---

app.post('/api/members/verify', async (req, res) => {
  const { phone, nin, pvcId } = req.body;
  try {
    const member = await prisma.member.upsert({
      where: { phoneNumber: phone },
      update: { verified: true, nin, pvcId },
      create: { 
        phoneNumber: phone, 
        nin, 
        pvcId, 
        fullName: 'New Member', 
        state: 'Unknown', 
        lga: 'Unknown', 
        ward: 'Unknown',
        verified: true 
      }
    });
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/ledger/total', async (req, res) => {
  try {
    const total = await prisma.donation.aggregate({
      _sum: { amount: true }
    });
    res.json({ total: total._sum.amount || 0 });
  } catch (e) {
    res.json({ total: 0, error: "DB not connected" });
  }
});

app.get('/', (req, res) => {
  res.send('NDC Pulse Multi-Agent API - Operational');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
