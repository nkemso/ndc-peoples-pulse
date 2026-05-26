const axios = require('axios');

/**
 * NDC Multi-Agent System
 * Designed for zero-cost operation using Free-tier Inference APIs.
 */

// Agent 1: Golden Works Content Agent (Uses Qwen via Hugging Face - Free Tier)
async function contentAgent(prompt, tone = 'pidgin') {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/Qwen/Qwen2.5-72B-Instruct',
      {
        inputs: `<|im_start|>system
You are the NDC Golden Works AI. Your job is to convert political policy into highly resonant campaign content for Nigerians.
Tone: ${tone}. If pidgin, use charismatic, street-smart Lagos/Abuja pidgin.
If simplified, use Grade 6 level English that everyone can understand.
Policy context must be preserved but simplified.<|im_end|>
<|im_start|>user
${prompt}<|im_end|>
<|im_start|>assistant`,
      },
      {
        headers: { Authorization: `Bearer ${process.env.HF_TOKEN}` }
      }
    );
    
    // HF Inference returns an array of objects
    const result = response.data[0]?.generated_text || response.data;
    // Clean up result if it includes the prompt
    return result.split('<|im_start|>assistant').pop().trim();
  } catch (error) {
    console.error('ContentAgent Error:', error.message);
    return `[Fallback] NDC is working for you! ${prompt}`;
  }
}

// Agent 2: Strategic Intelligence Agent (Uses Llama 3 via Groq - Free Tier)
async function strategyAgent(dataContext) {
  try {
    // Groq API has a very generous free tier
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: "llama-3.1-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are the NDC Strategic Intelligence Agent. Analyze ward-level data, sentiment, and funding to provide 3 actionable mobilization steps."
          },
          {
            role: "user",
            content: `Analyze this context: ${JSON.stringify(dataContext)}`
          }
        ]
      },
      {
        headers: { Authorization: `Bearer ${process.env.GROQ_API_KEY}` }
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('StrategyAgent Error:', error.message);
    return "Continue grassroots mobilization in underperforming wards. Focus on PVC collection awareness.";
  }
}

module.exports = { contentAgent, strategyAgent };
