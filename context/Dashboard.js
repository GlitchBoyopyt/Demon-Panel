import { motion } from "framer-motion";

<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  onClick={() => axios.post(`http://localhost:5000/api/servers/start/${server._id}`)}
>
  Start
</motion.button>
