import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productos: Product[] = [
    {id: 1, imagen: 'https://icnorteb2c.vteximg.com.br/arquivos/ids/158157-600-600/Leche-Condensada-Pil-397-Gr-1-360.jpg?v=637772457645030000', mensaje: 'LECHE CONDENSADA', precio: 12, descripcion: 'PRODUCTO LÁCTEO'},
    {id: 2, imagen: 'https://acdn.mitiendanube.com/stores/001/930/794/products/dulce-de-leche-repostero-vacalin-1-kilo-1db60302d0c5c629f517011915416403-480-0.jpg', mensaje: 'DULCE DE LECHE', precio: 16, descripcion: 'PRODUCTO LÁCTEO'},
    {id: 3, imagen: 'https://farmacorp.com/cdn/shop/files/8445291028050_1200x1200.jpg?v=1723828927', mensaje: 'LECHE EVAPORADA', precio: 11, descripcion: 'PRODUCTO LÁCTEO'},
    {id: 4, imagen: 'https://icnorteb2c.vteximg.com.br/arquivos/ids/158157-600-600/Leche-Condensada-Pil-397-Gr-1-360.jpg?v=637772457645030000', mensaje: 'LECHE CONDENSADA', precio: 12, descripcion: 'PRODUCTO LÁCTEO'},
    {id: 5, imagen: 'https://acdn.mitiendanube.com/stores/001/930/794/products/dulce-de-leche-repostero-vacalin-1-kilo-1db60302d0c5c629f517011915416403-480-0.jpg', mensaje: 'DULCE DE LECHE', precio: 16, descripcion: 'PRODUCTO LÁCTEO'},
    {id: 6, imagen: 'https://farmacorp.com/cdn/shop/files/8445291028050_1200x1200.jpg?v=1723828927', mensaje: 'LECHE EVAPORADA', precio: 11, descripcion: 'PRODUCTO LÁCTEO'},
    {id: 7, imagen: 'https://icnorteb2c.vteximg.com.br/arquivos/ids/158157-600-600/Leche-Condensada-Pil-397-Gr-1-360.jpg?v=637772457645030000', mensaje: 'LECHE CONDENSADA', precio: 12, descripcion: 'PRODUCTO LÁCTEO'},
    {id: 8, imagen: 'https://acdn.mitiendanube.com/stores/001/930/794/products/dulce-de-leche-repostero-vacalin-1-kilo-1db60302d0c5c629f517011915416403-480-0.jpg', mensaje: 'DULCE DE LECHE', precio: 16, descripcion: 'PRODUCTO LÁCTEO'},
    {id: 9, imagen: 'https://farmacorp.com/cdn/shop/files/8445291028050_1200x1200.jpg?v=1723828927', mensaje: 'LECHE EVAPORADA', precio: 11, descripcion: 'PRODUCTO LÁCTEO'},
    {id: 10, imagen: 'https://icnorteb2c.vteximg.com.br/arquivos/ids/158157-600-600/Leche-Condensada-Pil-397-Gr-1-360.jpg?v=637772457645030000', mensaje: 'LECHE CONDENSADA', precio: 12, descripcion: 'PRODUCTO LÁCTEO'},
    {id: 11, imagen: 'https://acdn.mitiendanube.com/stores/001/930/794/products/dulce-de-leche-repostero-vacalin-1-kilo-1db60302d0c5c629f517011915416403-480-0.jpg', mensaje: 'DULCE DE LECHE', precio: 16, descripcion: 'PRODUCTO LÁCTEO'},
    {id: 12, imagen: 'https://farmacorp.com/cdn/shop/files/8445291028050_1200x1200.jpg?v=1723828927', mensaje: 'LECHE EVAPORADA', precio: 11, descripcion: 'PRODUCTO LÁCTEO'}
  ];

  private productosSubject = new BehaviorSubject<Product[]>(this.productos);
  productos$ = this.productosSubject.asObservable();
  
  private carrito: any[] = [];
  private carritoSubject = new BehaviorSubject<any[]>(this.carrito);
  carrito$ = this.carritoSubject.asObservable();


  getProductos() {
    return this.productos;
  }

  getProductoPorId(id: number): Product | undefined {
    return this.productos.find(producto => producto.id === id);
  }

  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);
    // Notifica los cambios
    this.carritoSubject.next(this.carrito); 
  }

  getCarrito() {
    // Retorna el observable
    return this.carrito$; 
  }

  getCantidadEnCarrito(){
    return this.carrito.length;
  }
}
