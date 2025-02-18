import { Router } from "express";
import { getAll } from "../controladores/productos.controller";

const router = Router();

router.get("/all", getAll);

export default router;
