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
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//URL del servicio de productos
const PRODUCTS_SERVICE_URL = process.env.PRODUCTS_SERVICE_URL || "http://172.19.83.145:4000/api/v1/productos";

app.get("/", (req, res) => {
  res.send("API Gateway is running");
});

app.get("/api/v1/productos", async (req, res) => {
  try {
    const respuesta = await axios.get(PRODUCTS_SERVICE_URL);
    res.json(respuesta.data);
  } catch (error) {
    console.error("Error al obtener productos:", (error as Error).message);
    res.status(500).json({ error: "Error al obtener la lista de productos" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
