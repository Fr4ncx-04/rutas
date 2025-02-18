import express from "express";
import productosRoutes from "./routes/productos.routes"; 

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hola Unach");
});

// Definir prefijo para rutas de productos
app.use("/productos", productosRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`);
});
