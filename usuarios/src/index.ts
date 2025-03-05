import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usuariosRoutes from "./routes/usuarios.routes"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


app.use("/api/v1/usuarios", usuariosRoutes);

app.listen(PORT, () => {
  console.log(`Microservicio de Usuarios corriendo en el puerto:${PORT}`);
});
