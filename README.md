# proyecto_bedu

## Tabla de contenidos
1. [Postwork Sesion 03](#postwork-3)

## Postwork Sesion 03 <a name="postwork-3"></a>

**¿Qué espero que haga el proyecto?**

Una aplicación web en donde se pueda comprar e intercambiar libros.  
- Registro de usuarios  
- Visualizar los libros tanto nuevos como de intercambio  
- Seleccionar un libro  
- Poner libro en intercambio  
- Opción de entrega personal para libros de intercambio  
- Evaluar la propuesta de intercambio  
- Registro de libros nuevos por parte de la librería  
- Stock de los libros  
- Evaluación de libros y usuario  

**¿Qué tipos de usuario tendrá nuestro sistema?**
- Administrador (librería)  
- Usuario (cliente)  

**¿Qué acciones puede realizar cada usuario?**

- Administrador  
    - Registrar y eliminar los libros.  
    - Gestionar el Stock.  
    - Gestionar usuarios.  
    - Gestionar ventas.  
- Usuario
    - Registrase.  
    - Registrar y eliminar libros de intercambio.  
    - Visualizar los libros.  
    - Evaluar libros y usuarios.  
    - Evaluar la propuesta de intercambio . 
    - Mensaje entre usuarios.
    - Comprar o intercambiar libros.  
    - Seleccionar método de envio.  

**¿Qué información se necesita?**

- Libros  
    - Id 
    - Nombre del libro  
    - Edición  
    - Editorial  
    - Autor  
    - Genero  
    - Número de Paginas  
    - Idioma  
    - Tipo de Pasta  
    - ISBN  
    - Sinopsis  
    - Estado del libro  
    - Descripción  
    - Calificación con comentario  
    - Precio  
    - Foto  
    - Stock  
- Administrador  
    - Id  
    - Nombre 
    - Apellido 
    - Email  
    - Contraseña
- Usuario  
    - Id  
    - Nombre  
    - Apellido  
    - Dirección  
    - Foto de usuario  
    - Contraseña  
    - Email  
    - Califacion de usuario con comentario
    - Libros en intercambio (actuales y pasados)  
    - Historial de Intercambios  
    - Telefono  

**¿Cuáles son las principales entidades?** 
- Libro  
- Usuario  
- Administrador

**¿Qué funcionalidades tiene cada entidad?**
- Libro  
    - Ser registrado  
    - Ser intercambiado  
    - Ser vendido  
    - Estar en el stock  
    - Visualizar la información del libro  
- Usuario  
    - Intercambiar libros  
    - Evaluar la propuesta  
    - Evaluar los libros  
    - Evaluar a otros usuarios  
    - Comprar un libro  
    - Registrarse  
    - Registrar sus libros  
- Administrador  
    - Gestionar Usuarios
    - Registrar los libros nuevos
    - Editar stock

## Postwork Sesion 05

### Modelo Relacional
![alt text](https://github.com/HanniHans/proyecto_bedu/blob/main/database/modelo_relacional.png)

### Modelo ER
![alt text](https://github.com/HanniHans/proyecto_bedu/blob/main/database/modelo_ER.png)

### Describe tables

![alt text](https://github.com/HanniHans/proyecto_bedu/blob/main/database/describe_tables/administradores.png)
![alt text](https://github.com/HanniHans/proyecto_bedu/blob/main/database/describe_tables/articulos_compra.png)
![alt text](https://github.com/HanniHans/proyecto_bedu/blob/main/database/describe_tables/autores.png)
![alt text](https://github.com/HanniHans/proyecto_bedu/blob/main/database/describe_tables/compras.png)
![alt text](https://github.com/HanniHans/proyecto_bedu/blob/main/database/describe_tables/editoriales.png)
![alt text](https://github.com/HanniHans/proyecto_bedu/blob/main/database/describe_tables/generos.png)
![alt text](https://github.com/HanniHans/proyecto_bedu/blob/main/database/describe_tables/idiomas.png)
![alt text](https://github.com/HanniHans/proyecto_bedu/blob/main/database/describe_tables/intercambios.png)
![alt text](https://github.com/HanniHans/proyecto_bedu/blob/main/database/describe_tables/libros.png)
![alt text](https://github.com/HanniHans/proyecto_bedu/blob/main/database/describe_tables/usuarios.png)
