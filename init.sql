/*Creacion de la base de datos y la tabla, para que docker la cree solo*/
CREATE DATABASE IF NOT EXISTS gerocrud;
USE gerocrud;

CREATE TABLE IF NOT EXISTS canciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    genero VARCHAR(200) NOT NULL,
    artista VARCHAR(200) NOT NULL,
);