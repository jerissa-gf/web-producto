import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponentComponent } from "./product-list-component/product-list-component.component";

import { ProductService } from './services/product.service'; 

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';


@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductListComponentComponent, MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  cantidadEnCarrito = 0;
  title = 'PRODUCTOS';
  
  constructor(private productService: ProductService) {
    this.productService.carrito$.subscribe(carrito => {
      this.cantidadEnCarrito = carrito.length;
      console.log("Contenido del carrito:", this.cantidadEnCarrito);
    });
  }

}



