const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/sensex', async (req, res) => {
    try {
        const response = await axios.get('https://api.example.com/sensex'); // Replace with the actual API endpoint
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Sensex data:', error);
        res.status(500).json({ error: 'Failed to fetch Sensex data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});