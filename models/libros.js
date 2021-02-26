/** Clase que representa un libro en compra (nuevo) o prestamo (usado) */

class Libro{
    constructor(id, nombre, autor, edición, editorial, genero, númeroDePaginas, idioma, tipoDePasta, isbn, sinopsis, estadoDelLibro, descripción, calificaciónComentario, precio, foto, stock){
        this.id = id; // Codigo de identificación
        this.nombre = nombre; // Titulo del libro
        this.autor = autor; 
        this.edición = edición; 
        this.editorial = editorial;
        this.genero = genero; // ej. ciencia ficción, historia, etc.
        this.númeroDePaginas = númeroDePaginas;
        this.idioma = idioma;
        this.tipoDePasta = tipoDePasta; // ej. pasta suave, pasta dura
        this.isbn = isbn;
        this.sinopsis = sinopsis; // Breve descripción del tema-historia del libro
        this.estadoDelLibro = estadoDelLibro; // Nuevo (compra) o Usado (intercambio)
        this.descripción = descripción; // Descripción de las condiciones del libro
        this.calificaciónComentario = calificaciónComentario; // Calificación o comentario sobre el libro
        this.precio = precio;
        this.foto = foto;
        this.stock = stock; // Disponibilidad del libro y cantidad de copias
    }

    registrar(){
        // función para guardar un nuevo registro en la base de datos
    }

    actualizar(){
        // función para actualizar el stock de los libros
    }

    intercambio(){
        // función para generar una vinculo de intercambio (libro usado)
    }

    venta(){
        // función para generar una venta (libro nuevo)
    }
}