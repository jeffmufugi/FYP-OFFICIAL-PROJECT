require("dotenv").config();
const express = require('express');
const router = express.Router();
const path = require('path');
const cors = require("cors");
const axios = require('axios');
// Define an async function to handle the API request
router.use(cors());
router.post('/gpt', async (req, res) => {
    const userMessage = req.body.message; // Extract message from the request body

    const options = {
        method: 'POST',
        url: 'https://cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com/v1/chat/completions',
        headers: {
            'x-rapidapi-key': '7fbf5a7699msh45b28b4368c6efep199556jsn661a1781490f',
            'x-rapidapi-host': 'cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        data: {
            messages: [
                {
                    role: 'user',
                    content: userMessage // Use the variable instead of hardcoded content
                }
            ],
            model: 'gpt-4o',
            max_tokens: 40,
            temperature: 0.1
        }
    };
    try {
        const response = await axios.request(options);
        const reply = response.data.choices[0].message.content; // Extract response content
        res.json({ message: reply }); // Send the response back to the client
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(500).send({ error: 'Failed to fetch data' });
    }
});

module.exports = router;