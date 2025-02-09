import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() producto!: Product;

  estado: string = 'AGREGAR AL CARRITO';

  constructor(private productService: ProductService, private router: Router) { }

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
  }

  verDetalles() {
    this.router.navigate(['/detalleProducto', this.producto.id]);
  }

}
