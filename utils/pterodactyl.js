import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const PTERO_API = axios.create({
  baseURL: `${process.env.PTERO_PANEL_URL}/api/application`,
  headers: { "Authorization": `Bearer ${process.env.PTERO_API_KEY}`, "Content-Type": "application/json" },
});

// Start a server
export const startServer = async (serverId) => {
  try {
    await axios.post(`${process.env.PTERO_PANEL_URL}/api/client/servers/${serverId}/power`, { signal: "start" }, {
      headers: { "Authorization": `Bearer ${process.env.PTERO_API_KEY}`, "Content-Type": "application/json" },
    });
    return { msg: "Server started successfully!" };
  } catch (error) {
    return { error: error.response?.data || "Failed to start server" };
  }
};

// Stop a server
export const stopServer = async (serverId) => {
  try {
    await axios.post(`${process.env.PTERO_PANEL_URL}/api/client/servers/${serverId}/power`, { signal: "stop" }, {
      headers: { "Authorization": `Bearer ${process.env.PTERO_API_KEY}`, "Content-Type": "application/json" },
    });
    return { msg: "Server stopped successfully!" };
  } catch (error) {
    return { error: error.response?.data || "Failed to stop server" };
  }
};

// Restart a server
export const restartServer = async (serverId) => {
  try {
    await axios.post(`${process.env.PTERO_PANEL_URL}/api/client/servers/${serverId}/power`, { signal: "restart" }, {
      headers: { "Authorization": `Bearer ${process.env.PTERO_API_KEY}`, "Content-Type": "application/json" },
    });
    return { msg: "Server restarted successfully!" };
  } catch (error) {
    return { error: error.response?.data || "Failed to restart server" };
  }
};
    
