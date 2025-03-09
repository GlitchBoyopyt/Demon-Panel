const { exec } = require("child_process");
const express = require("express");
const app = express();

app.use(express.json());

app.post("/server/start", (req, res) => {
    exec("docker start game-server", (error, stdout, stderr) => {
        if (error) return res.status(500).send(`Error: ${stderr}`);
        res.send("✅ Server Started!");
    });
});

app.post("/server/stop", (req, res) => {
    exec("docker stop game-server", (error, stdout, stderr) => {
        if (error) return res.status(500).send(`Error: ${stderr}`);
        res.send("✅ Server Stopped!");
    });
});

app.listen(4000, () => console.log("🔥 Daemon running on port 4000"));
