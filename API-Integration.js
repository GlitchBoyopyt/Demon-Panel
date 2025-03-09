const axios = require("axios");

const PTERO_API_KEY = "your_api_key";
const PTERO_URL = "https://your-pterodactyl-panel.com";

async function startServer(serverId) {
    try {
        const response = await axios.post(
            `${PTERO_URL}/api/client/servers/${serverId}/power`,
            { signal: "start" },
            { headers: { Authorization: `Bearer ${PTERO_API_KEY}`, "Content-Type": "application/json" } }
        );
        console.log("Server Started:", response.data);
    } catch (error) {
        console.error("Error Starting Server:", error.response?.data || error.message);
    }
}

// Example: Start a server with ID "abc123"
startServer("abc123");
