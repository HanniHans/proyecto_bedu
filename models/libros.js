/** Clase que representa un libro en compra (nuevo) o prestamo (usado) */

class Libro{
    constructor(id, nombre, autor, edicion, editorial, genero, numeroDePaginas, idioma, tipoDePasta, isbn, sinopsis, estadoDelLibro, descripcion, calificacionComentario, precio, foto, stock){
        this.id = id; // Codigo de identificación
        this.nombre = nombre; // Titulo del libro
        this.autor = autor; 
        this.edicion = edicion; 
        this.editorial = editorial;
        this.genero = genero; // ej. ciencia ficción, historia, etc.
        this.numeroDePaginas = numeroDePaginas;
        this.idioma = idioma;
        this.stock = stock;
        this.tipoDePasta = tipoDePasta; // ej. pasta suave, pasta dura
        this.isbn = isbn;
        this.sinopsis = sinopsis; // Breve descripción del tema-historia del libro
        this.estadoDelLibro = estadoDelLibro; // Nuevo (compra) o Usado (intercambio)
        this.descripcion = descripcion; // Descripción de las condiciones del libro
        this.calificacionComentario = calificacionComentario; // Calificación o comentario sobre el libro
        this.precio = precio;
        this.foto = foto;
        this.stock = stock; // Disponibilidad del libro y cantidad de copias
    }
}

module.export = Libro;