//controlador para obtener la lista de usuarios
export const getUsuarios = (req: any, res: any) => {
        const Usuarios = [
            {id: "1", name: "Jose", email:"jose@gmail.com"},
            {id: "2", name: "Francisco", email:"fran@gmail.com"},
            {id: "3", name: "Jovanny", email:"jovanny@gmail.com"}
        ];
        res.json(Usuarios);
};
