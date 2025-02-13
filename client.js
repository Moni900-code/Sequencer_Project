const axios = require('axios');

async function requestId() {
    try {
        const response = await axios.get('http://localhost:3000/get-id');
        console.log(`Received ID: ${response.data.id}`);
    } catch (error) {
        console.error('Error requesting ID:', error.message);
    }
}

// Simulate multiple clients requesting IDs
setInterval(requestId, 1000); // Request ID every second