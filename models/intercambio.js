class Intercambio{
    constructor(usuario1, usuario2, libro1, libro2, status1, status2, punto_medio){
        this.usuario1 = usuario1;
        this.usuario2 = usuario2;
        this.libro1 = libro1;
        this.libro2 = libro2;
        this.status1 = status1;
        this.status2 = status2;
        this.status_general = this.status1 && this.status2;
        this.punto_medio = punto_medio;
    }
}

module.export = Intercambio;