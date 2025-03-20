import mysql from 'mysql2';

// Conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'zunami04',
  database: process.env.DB_NAME || 'Taller4O'
});

//Obtener de la base de datos
export const getAll = (req: any, res: any) => {
  connection.query('SELECT * FROM productos', (error, results) => {
    if (error) {
      console.error("Error al consultar la base de datos:", error);
      return res.status(500).json({ error: 'Error al obtener productos' });
    }
    res.json(results);
  });
};

// Insertar un producto en la base de datos
export const insertAll = (req: any, res: any) => {
  try {
    const { nombre, precio, descripcion, categoria } = req.body;

    // Validaciones básicas
    if (!nombre || !precio || !descripcion || !categoria) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    if (isNaN(precio)) {
      return res.status(400).json({ error: 'El precio debe ser un número válido' });
    }

    // Consulta parametrizada para evitar inyección SQL
    const sql = 'INSERT INTO productos (Nombre, precio, descripcion, categoria) VALUES (?, ?, ?, ?)';
    const values = [nombre, precio, descripcion, categoria];

    connection.query(sql, values, (error, results) => {
      if (error) {
        console.error('❌ Error al insertar en la base de datos:', error);
        return res.status(500).json({ error: 'Error al insertar el producto' });
      }
      res.status(201).json({ message: '✅ Producto insertado correctamente' });
      console.log('Se acaba de insertar un nuevo producto. Nombre=', nombre, ' Precio=', precio, ' Descripcion=', descripcion, ' Categoria=', categoria)
    });
  } catch (error) {
    console.error('❌ Error inesperado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Actualizar un producto en la base de datos
export const updateAll = (req: any, res: any) => {
  try {
    const {id} = req.params;
    const { nombre, precio, descripcion, categoria } = req.body;

    // Validaciones básicas
    if(!id){
      return res.status(400).json({error: 'El id del usuario es obligatorio'});
    }

    if (!nombre || !precio || !descripcion || !categoria) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    if (isNaN(precio)) {
      return res.status(400).json({ error: 'El precio debe ser un número válido' });
    }

    // Consulta parametrizada para evitar inyección SQL
    const sql = 'UPDATE productos set Nombre = ?, precio = ?, descripcion = ?, categoria = ? WHERE id = ?';
    const values = [nombre, precio, descripcion, categoria, id];

    connection.query(sql, values, (error, results: any) => {
      if (error) {
        console.error('❌ Error al actualizar en la base de datos:', error);
        return res.status(500).json({ error: 'Error al actualizar el producto' });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }

      res.status(201).json({ message: '✅ Producto actualizado correctamente' });
      console.log('productos actualizados: id=', id, 'Nombre=', nombre, 'Precio=', precio, 'Descripcion=', descripcion, 'Categoria=', categoria)
    });
  } catch (error) {
    console.error('❌ Error inesperado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Actualizar un producto en la base de datos
export const deleteAll = (req: any, res: any) => {
  try {
    const {id} = req.params;

    // Validaciones básicas
    if(!id){
      return res.status(400).json({error: 'El id del usuario es obligatorio'});
    }

    // Consulta parametrizada para evitar inyección SQL
    const sql = 'DELETE FROM productos WHERE id = ?';
    const values = [id];

    connection.query(sql, values, (error, results: any) => {
      if (error) {
        console.error('❌ Error al eliminar en la base de datos:', error);
        return res.status(500).json({ error: 'Error al eliminar el producto' });
      }
      
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }

      res.status(201).json({ message: '✅ Producto eliminado correctamente' });
      console.log('El producto con el id=', id, ' fue eliminado correctamente');
      
    });
  } catch (error) {
    console.error('❌ Error inesperado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};