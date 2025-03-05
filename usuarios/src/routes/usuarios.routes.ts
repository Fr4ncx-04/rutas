import {Router} from "express";
import {getUsuarios} from "../controladores/usuarios.controller"

const router=Router();

//ruta para obtener todos los usuarios
router.get("/", getUsuarios);

export default router; 