
//obtener la fecha y hora actual
const obtenerFechaHora = () => {
    return new Date().toDateString();
};


//controlador para obtener la lista de usuarios
export const getUsuarios = (req: any, res: any) => {
    res.json({
        message: "Lista de usuarios",
        timestamp: obtenerFechaHora()
    });
};


//controlador para obtener un usuario por el id
export const getUsuariosById = (req: any, res: any) => {
    const {id}= req.params;
    res.json({
        message: `Detalles del usuario por el Id: ${id}`,
        timestamp: obtenerFechaHora()
    });
};