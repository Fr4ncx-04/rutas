/* import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API Gateway is running');
});

app.listen(port, () => {
  console.log(`API Gateway is running on port ${port}`);
}); */

import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import axios from 'axios';

const app = express()

dotenv.config({path: "./home/taller4O/api-gateway/src/.env"});
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Gateway is running");
});

app.get("/api/v1/productos", async (req, res) => {
  try {
    const respuesta = await axios.get("http://localhost:4000/api/v1/productos");
    res.json(respuesta.data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la lista productos" });
  }
});

app.get("/api/v1/usuarios", async (req, res) => {
  try {
    const respuesta = await axios.get("http://localhost:5000/api/v1/usuarios");
    res.json(respuesta.data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la lista de usuarios" });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API Gateway is running on port ${port}`);
});

