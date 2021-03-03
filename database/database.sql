CREATE SCHEMA IF NOT EXISTS libreria;
USE libreria;

CREATE TABLE IF NOT EXISTS autores (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  apellido VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS editoriales (
  id INT NOT NULL AUTO_INCREMENT,
  editorial VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)

);

CREATE TABLE IF NOT EXISTS generos (
  id INT NOT NULL AUTO_INCREMENT,
  genero VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS idiomas (
  id INT NOT NULL,
  idioma VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS libros (
  id INT NOT NULL AUTO_INCREMENT,
  autor_id INT NOT NULL,
  editorial_id INT NOT NULL,
  genero_id INT NOT NULL,
  idioma_id INT NOT NULL,
  nombre VARCHAR(45) NOT NULL,
  edicion INT NOT NULL,
  num_paginas INT NOT NULL,
  stock INT NOT NULL,
  isbn CHAR(13) NOT NULL,
  sinopsis VARCHAR(100) NOT NULL,
  descripcion VARCHAR(100) NOT NULL,
  precio FLOAT NOT NULL,
  estado_libro VARCHAR(45) NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_libros_autores1_idx (autor_id ASC),
  INDEX fk_libros_editorial1_idx (editorial_id ASC),
  INDEX fk_libros_genero1_idx (genero_id ASC),
  INDEX fk_libros_idiomas1_idx (idioma_id ASC),
  CONSTRAINT fk_libros_autores1
    FOREIGN KEY (autor_id)
    REFERENCES libreria.autores (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_libros_editorial1
    FOREIGN KEY (editorial_id)
    REFERENCES libreria.editoriales (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_libros_genero1
    FOREIGN KEY (genero_id)
    REFERENCES libreria.generos (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_libros_idiomas1
    FOREIGN KEY (idioma_id)
    REFERENCES libreria.idiomas (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);


CREATE TABLE IF NOT EXISTS usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  apellido VARCHAR(45) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  contraseña CHAR(32) NOT NULL,
  email VARCHAR(175) NOT NULL,
  telefono CHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS libreria.administradores (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  apellido VARCHAR(45) NOT NULL,
  email VARCHAR(175) NOT NULL,
  contrasena CHAR(32) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS intercambios (
  id INT NOT NULL,
  usuario1_id INT NOT NULL,
  usuario2_id INT NOT NULL,
  libro1_id INT NOT NULL,
  libro2_id INT NOT NULL,
  status1 INT NOT NULL,
  status2 INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_intercambios_usuarios_idx (usuario1_id ASC),
  INDEX fk_intercambios_usuarios1_idx (usuario2_id ASC),
  INDEX fk_intercambios_libros1_idx (libro1_id ASC),
  INDEX fk_intercambios_libros2_idx (libro2_id ASC),
  CONSTRAINT fk_intercambios_usuarios
    FOREIGN KEY (usuario1_id)
    REFERENCES libreria.usuarios (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_intercambios_usuarios1
    FOREIGN KEY (usuario2_id)
    REFERENCES libreria.usuarios (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_intercambios_libros1
    FOREIGN KEY (libro1_id)
    REFERENCES libreria.libros (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_intercambios_libros2
    FOREIGN KEY (libro2_id)
    REFERENCES libreria.libros (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS compras (
  id INT NOT NULL,
  usuario_id INT NOT NULL,
  fecha DATETIME NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_compras_usuarios1_idx (usuario_id ASC),
  CONSTRAINT fk_compras_usuarios1
    FOREIGN KEY (usuario_id)
    REFERENCES libreria.usuarios (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS articulos_compra (
  id INT NOT NULL,
  libro_id INT NOT NULL,
  compra_id INT NOT NULL,
  precio_venta FLOAT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_articulos_compra_libros1_idx (libro_id ASC),
  INDEX fk_articulos_compra_compra1_idx (compra_id ASC),
  CONSTRAINT fk_articulos_compra_libros1
    FOREIGN KEY (libro_id)
    REFERENCES libreria.libros (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_articulos_compra_compra1
    FOREIGN KEY (compra_id)
    REFERENCES libreria.compras (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);