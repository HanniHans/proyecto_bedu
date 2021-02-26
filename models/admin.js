// Clase que representa un Administrador en 

class Administrador{
    constructor(id, nombre, apellido, email, contraseña){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contraseña = contraseña;
    }

    registrar();
    //Registrar un usuario Admin

    editarAdmin();
    //Editar la informacion de un Admin

    editarUsuario();
    // Gestionar la informacion de un usuario

    banearUsuario();
    //banear a un usuariol

    editarStock();
    // Actualizar stock


}