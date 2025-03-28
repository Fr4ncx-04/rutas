import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productosRoutes from "./routes/productos.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//ruta del servicio de productos
app.use("/api/v1/productos", productosRoutes);

const PRODUCTS_SERVICE = process.env.PRODUCTS_SERVICE || "http://172.19.83.145:4000/api/productos";

// Iniciar el servidor
const PORT = parseInt(process.env.PORT || "4000", 10);
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Microservicio de Productos corriendo en el puerto: ${PORT}`);
});
