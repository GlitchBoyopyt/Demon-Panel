import express from "express";
import { startServer, stopServer, restartServer } from "../utils/pterodactyl.js";

const router = express.Router();

router.post("/start/:serverId", async (req, res) => {
  const result = await startServer(req.params.serverId);
  res.json(result);
});

router.post("/stop/:serverId", async (req, res) => {
  const result = await stopServer(req.params.serverId);
  res.json(result);
});

router.post("/restart/:serverId", async (req, res) => {
  const result = await restartServer(req.params.serverId);
  res.json(result);
});

export default router;
