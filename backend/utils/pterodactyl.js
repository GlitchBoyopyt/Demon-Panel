import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const PTERO_API = axios.create({
  baseURL: `${process.env.PTERO_PANEL_URL}/api/application`,
  headers: { "Authorization": `Bearer ${process.env.PTERO_API_KEY}`, "Content-Type": "application/json" },
});

// Create a new server
export const createServer = async (serverData) => {
  return await PTERO_API.post("/servers", {
    name: serverData.name,
    user: serverData.userId,
    nest: serverData.nest,
    egg: serverData.egg,
    docker_image: serverData.dockerImage,
    startup: serverData.startupCommand,
    limits: {
      memory: serverData.memory,
      cpu: serverData.cpu,
      disk: serverData.disk,
      io: 500,
    },
    feature_limits: {
      databases: 1,
      allocations: 1,
      backups: 1,
    },
    environment: serverData.environment,
    allocation: {
      default: 1,
    },
  });
};

// Delete a server
export const deleteServer = async (serverId) => {
  return await PTERO_API.delete(`/servers/${serverId}`);
};
