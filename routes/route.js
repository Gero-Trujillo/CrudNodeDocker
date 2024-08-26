// iportamos el metodo Router de express y el pool de la conexion
import { Router } from "express";
import { pool } from "../app.js";

// Creamos una instancia de Router
const router = Router();


// Creamos las rutas
router.get("/canciones", async (req, res) => {
    const result = await pool.query("SELECT * FROM canciones")
    res.json(result[0]);
});

router.get("/canciones/:id", async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM canciones WHERE id = ?", [id]);
    res.json(result[0]);
});

router.post("/canciones", async (req, res) => {
    const { nombre, genero, artista } = req.body;
    const result = await pool.query("INSERT INTO canciones (nombre, genero, artista) VALUES (?,?,?)", [nombre, genero, artista]);
    res.json({ message: "Cancion agregada exitosamente" });
});

router.put("/canciones/:id", async (req, res) => {
    const { id } = req.params;
    const { nombre, genero, artista } = req.body;
    const result = await pool.query("UPDATE canciones SET nombre =?, genero =?, artista =? WHERE id =?", [nombre, genero, artista, id]);
    res.json({ message: "Cancion actualizada exitosamente" });
});

router.delete("/canciones/:id", async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM canciones WHERE id =?", [id]);
    res.json({ message: "Cancion eliminada exitosamente" });
});

// Exportamos el router
export default router;