export class Product{
    id: number;
    mensaje: string; 
    precio: number; 
    imagen: string; 
    descripcion: string

    constructor(){
        this.id = 0;
        this.mensaje = '';
        this.precio = 0;
        this.imagen = '';
        this.descripcion = '';
    }
};