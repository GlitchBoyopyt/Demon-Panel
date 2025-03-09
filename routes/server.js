const express = require("express");
const { exec } = require("child_process");
const Server = require("../models/Server");

const router = express.Router();

// Start a server
router.post("/start/:id", async (req, res) => {
  const server = await Server.findById(req.params.id);
  if (!server) return res.status(404).json({ msg: "Server not found" });

  exec(`./start_server.sh ${server.name}`, (error, stdout) => {
    if (error) return res.status(500).json({ error: error.message });
    server.status = "running";
    server.save();
    res.json({ msg: `Server ${server.name} started successfully!`, output: stdout });
  });
});

// Stop a server
router.post("/stop/:id", async (req, res) => {
  const server = await Server.findById(req.params.id);
  if (!server) return res.status(404).json({ msg: "Server not found" });

  exec(`./stop_server.sh ${server.name}`, (error, stdout) => {
    if (error) return res.status(500).json({ error: error.message });
    server.status = "stopped";
    server.save();
    res.json({ msg: `Server ${server.name} stopped successfully!`, output: stdout });
  });
});

// Restart a server
router.post("/restart/:id", async (req, res) => {
  const server = await Server.findById(req.params.id);
  if (!server) return res.status(404).json({ msg: "Server not found" });

  exec(`./restart_server.sh ${server.name}`, (error, stdout) => {
    if (error) return res.status(500).json({ error: error.message });
    server.status = "running";
    server.save();
    res.json({ msg: `Server ${server.name} restarted successfully!`, output: stdout });
  });
});

module.exports = router;
