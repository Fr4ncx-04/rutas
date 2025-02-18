import {Router} from "express";
import {getUsuarios, getUsuariosById} from "../controladores/usuarios.controller"

const router=Router();

//ruta para obtener todos los usuarios
router.get("/", getUsuarios);

//ruta para obtener un usuario por el id
router.get("/:id", getUsuariosById);

export default router;