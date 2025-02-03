import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productos = [
  ];

  private carrito: any[] = [];
  private carritoSubject = new BehaviorSubject<any[]>(this.carrito);
  carrito$ = this.carritoSubject.asObservable();


  getProductos() {
    return this.productos;
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
