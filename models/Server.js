const mongoose = require("mongoose");

const ServerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  status: { type: String, default: "stopped" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Server", ServerSchema);
