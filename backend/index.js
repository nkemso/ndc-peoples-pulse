const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const Pusher = require('pusher');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 5000;

// Pusher for real-time War Chest updates
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID || "app_id",
  key: process.env.PUSHER_KEY || "key",
  secret: process.env.PUSHER_SECRET || "secret",
  cluster: process.env.PUSHER_CLUSTER || "mt1",
  useTLS: true
});

app.use(cors());
app.use(bodyParser.json());

// --- Routes ---

// 1. Members
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

// 2. Financials (War Chest)
app.get('/api/ledger/total', async (req, res) => {
  const total = await prisma.donation.aggregate({
    _sum: { amount: true }
  });
  res.json({ total: total._sum.amount || 0 });
});

app.post('/api/donate', async (req, res) => {
  const { memberId, amount, type, tier } = req.body;
  const hash = '0x' + Math.random().toString(16).slice(2, 10) + '...'; // Mock hash
  
  const donation = await prisma.donation.create({
    data: { memberId, amount, type, tier, hash }
  });

  // Trigger Pusher update
  pusher.trigger('war-chest', 'new-donation', { amount, donorId: memberId });

  res.json(donation);
});

// 3. AI Content (Golden Works)
app.post('/api/ai/generate', async (req, res) => {
  const { prompt, tone } = req.body;
  // This would typically call Gemini Pro API
  res.json({ 
    content: `[AI Generated with ${tone} tone]: Based on NDC policy, we are empowering the people...` 
  });
});

app.get('/', (req, res) => {
  res.send('NDC Pulse API - Operational');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
