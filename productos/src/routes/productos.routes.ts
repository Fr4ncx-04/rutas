import { Router } from "express";
import { getAll, insertAll, updateAll, deleteAll } from "../controladores/productos.controller";

const router = Router();

router.get("/", getAll);
router.post("/", insertAll);
router.put("/:id", updateAll);
router.delete("/:id", deleteAll)

export default router; 
