import express from "express";
import { createServer, deleteServer } from "../utils/pterodactyl.js";

const router = express.Router();

// Create a server
router.post("/create", async (req, res) => {
  try {
    const serverData = req.body;
    const response = await createServer(serverData);
    res.status(201).json({ msg: "Server created successfully!", server: response.data });
  } catch (error) {
    res.status(500).json({ error: "Failed to create server", details: error.response.data });
  }
});

// Delete a server
router.delete("/delete/:serverId", async (req, res) => {
  try {
    await deleteServer(req.params.serverId);
    res.json({ msg: "Server deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete server" });
  }
});

export default router;
