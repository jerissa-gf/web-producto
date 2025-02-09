import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [ProductCardComponent, CommonModule,
            FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule
  ],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})
export class ProductListComponentComponent {
  buscarProducto: string = '';
  productos: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.productos$.subscribe(productos => {
      this.productos = productos;
    });
  }

  get filtrarProducto() {
    if (!this.buscarProducto) {
      return this.productos;
    }
    return this.productos.filter(product =>
      product.mensaje.toLowerCase().includes(this.buscarProducto.toLowerCase()) ||
      product.descripcion.toLowerCase().includes(this.buscarProducto.toLowerCase())
    );
  }
}
