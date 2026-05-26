const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const api = {
  async get(endpoint) {
    const res = await fetch(`${API_URL}${endpoint}`);
    return res.json();
  },
  async post(endpoint, data) {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  }
};
