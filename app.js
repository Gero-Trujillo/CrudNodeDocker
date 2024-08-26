// Importamos las librerias y la ruta
import express from "express";
import { createPool } from "mysql2/promise";
import route from "./routes/route.js"

// Instanciamos express
const app = express();

// creamos la conexion 
export const pool = createPool({
  host: "mysqldb",
  user: "root",
  password: "12345",
  database: "gerocrud",
  port: 3306
});

// Middlewares de json y de las rutas
app.use(express.json()); 
app.use(route) 

// Puerto de escucha
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor entonao con el puerto ${PORT}`));