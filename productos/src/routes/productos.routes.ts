import { Router } from "express";
import { getAll } from "../controladores/productos.controller";

const router = Router();

router.get("/", getAll);

export default router; 
