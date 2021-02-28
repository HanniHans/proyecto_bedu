/** Clase que representa a un usurario */

class Usuario{
    constructor(id, nombre, apellido, direccion, fotoDeUsuario, contraseña, email, calificacionUsuarioComentario, librosEnIntercambio, historialDeIntercambios, telefono){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.fotoDeUsuario = fotoDeUsuario;
        this.contraseña = contraseña;
        this.email = email;
        this.calificacionUsuarioComentario = calificacionUsuarioComentario; // Calificación que recibe un usuario de otros usuarios
        this.librosEnIntercambio = librosEnIntercambio; // Libros que posee para intercambio
        this.historialDeIntercambios = historialDeIntercambios; // Historial de intercambios realizados
        this.telefono = telefono;
    }

    registroUsuario(){
        // Función para el registro de usuario en la plataforma
    }

    editarUsuario(){
        
    }

    registroLibros(){
        // función para el registro de libros a intercambiar
    }

    intercambiarLibros(){
        // función para generar comunicación entre usuarios - propuesta de intercambio   
    }

    evaluarPropuestaDeIntercambio(){
        // función para que el usuario pueda decidir en aceptar, rechazar o cancelar un intercambio   
    }

    evaluarUsuarios(){
        // función para que el usuario pueda evaluar el trato o credibilidad de propuesta de otros usuarios
    }

    evaluarLibro(){
        // función para que el usuaurio califique libros
    }

    comprar(){
        // función para comprar un libro
    }

    evaluarCompra(){
        // función para aceptar o declinar compra
    }

    visualizarlibros(){
        // función para ver el catalogo de libros
    }

    

}
