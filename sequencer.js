const express = require('express');
const redis = require('redis');
const app = express();

// Redis ক্লায়েন্ট তৈরি করুন
const client = redis.createClient();

client.on('error', (err) => {
    console.error('Redis error:', err);
});

// Unique ID জেনারেট করার এন্ডপয়েন্ট
app.get('/get-id', async (req, res) => {
    try {
        // Redis-এ Atomic Operation ব্যবহার করে ID জেনারেট করুন
        const id = await client.incr('unique_id_counter');
        res.json({ id });
    } catch (error) {
        console.error('Error generating ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Sequencer running on port ${PORT}`);
});