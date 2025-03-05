export const getAll = (req: any, res: any) => {
    const Productos = [
        {id: "1", name: "Bolso"},
        {id: "2", name: "Lapiz"},
        {id: "3", name: "Playera"}
    ];
    res.json(Productos); 
};
