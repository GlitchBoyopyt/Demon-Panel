import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [servers, setServers] = useState([]);
  const [serverName, setServerName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/servers").then((res) => {
      setServers(res.data);
    });
  }, []);

  const handleCreateServer = () => {
    axios.post("http://localhost:5000/api/servers/create", {
      name: serverName,
      userId: "1", // Replace with actual user ID
      nest: 1, // Nest ID from Pterodactyl
      egg: 1, // Egg ID from Pterodactyl
      dockerImage: "quay.io/pterodactyl/core:java",
      startupCommand: "java -Xms128M -Xmx1024M -jar server.jar",
      memory: 1024,
      cpu: 100,
      disk: 5000,
      environment: { SERVER_JARFILE: "server.jar" },
    }).then(() => {
      alert("Server created successfully!");
    });
  };

  const handleDeleteServer = (serverId) => {
    axios.delete(`http://localhost:5000/api/servers/delete/${serverId}`).then(() => {
      alert("Server deleted successfully!");
    });
  };

  return (
    <div>
      <h1>Demon Panel Dashboard</h1>
      <input type="text" placeholder="Server Name" onChange={(e) => setServerName(e.target.value)} />
      <button onClick={handleCreateServer}>Create Server</button>

      {servers.map((server) => (
        <div key={server._id}>
          <h3>{server.name}</h3>
          <button onClick={() => handleDeleteServer(server._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
                   
