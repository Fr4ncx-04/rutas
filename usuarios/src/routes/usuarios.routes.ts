import {Router} from "express";
import {getUsuarios} from "../controladores/usuarios.controller"

const router=Router();

//ruta para obtener todos los usuarios
router.get("/lista", getUsuarios);

export default router;