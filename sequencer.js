const express = require('express');
const redis = require('redis');
const app = express();

const client = redis.createClient();

client.on('error', (err) => {
    console.error('Redis error:', err);
});

app.get('/get-id', async (req, res) => {
    try {
<<<<<<< HEAD
=======
        
>>>>>>> b69b273 (update sequencer file)
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
