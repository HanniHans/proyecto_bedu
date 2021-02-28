/** Clase que representa a un usurario */

class Usuario{
    constructor(id, nombre, apellido, direccion, fotoDeUsuario, contraseña, email, calificacion, comentario, librosEnIntercambio, historialDeIntercambios, telefono){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.fotoDeUsuario = fotoDeUsuario;
        this.contraseña = contraseña;
        this.email = email;
        this.calificacion = calificacion;
        this.comentario = comentario; // Calificación que recibe un usuario de otros usuarios
        this.librosEnIntercambio = librosEnIntercambio; // Libros que posee para intercambio
        this.historialDeIntercambios = historialDeIntercambios; // Historial de intercambios realizados
        this.telefono = telefono;
    }
    

}

module.exports = Usuario;
