import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/servers", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then(res => setServers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Server Dashboard</h1>
      <ul>
        {servers.map(server => (
          <li key={server._id}>
            {server.name} - {server.status}
            <button onClick={() => axios.post(`http://localhost:5000/api/servers/start/${server._id}`)}>Start</button>
            <button onClick={() => axios.post(`http://localhost:5000/api/servers/stop/${server._id}`)}>Stop</button>
            <button onClick={() => axios.post(`http://localhost:5000/api/servers/restart/${server._id}`)}>Restart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
