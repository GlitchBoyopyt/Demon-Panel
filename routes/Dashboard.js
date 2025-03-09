const handleServerAction = async (serverId, action) => {
  try {
    await axios.post(`http://localhost:5000/api/pterodactyl/${action}/${serverId}`);
    alert(`Server ${action}ed successfully!`);
  } catch (error) {
    alert("Failed to perform action!");
  }
};

// Usage in UI
<button onClick={() => handleServerAction(server._id, "start")}>Start</button>
<button onClick={() => handleServerAction(server._id, "stop")}>Stop</button>
<button onClick={() => handleServerAction(server._id, "restart")}>Restart</button>
