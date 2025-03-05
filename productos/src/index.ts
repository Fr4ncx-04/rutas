import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { productosRoutes } from "./routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;


app.use("/api/v1/productos", productosRoutes);

app.listen(PORT, () => {
  console.log(`Microservicio de Productos corriendo en el puerto:${PORT}`);
});
