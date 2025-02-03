import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductService } from '../services/product.service';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card',
  imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent { //Este componente solo muestra un item

  @Input() producto!: Product;

  estado: string = 'AGREGAR AL CARRITO';

  //@Output() avisarAlPadreMensajeCambiado = new EventEmitter<string>();

  constructor(private productService: ProductService) { }

  agregarAlCarrito() {
    const producto = {
      producto: this.producto
    };
    this.productService.agregarAlCarrito(producto);
    this.estado = 'AGREGADO AL CARRITO';
  }

  cambiarEstado() {
    if (this.estado === 'AGREGAR AL CARRITO') {
      this.agregarAlCarrito();
    } else {
      this.estado = 'AGREGAR AL CARRITO'
    }
    //this.estado = this.estado === 'AGREGAR AL CARRITO' ? 'AGREGADO AL CARRITO' : 'AGREGAR AL CARRITO';
  }

}
