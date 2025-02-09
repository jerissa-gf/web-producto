import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service'; 

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatIconModule, MatBadgeModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  cantidadEnCarrito = 0;
  title = 'PRODUCTOS';
  
  constructor(private productService: ProductService, private router: Router) {
    this.productService.carrito$.subscribe(carrito => {
      this.cantidadEnCarrito = carrito.length;
      console.log("Contenido del carrito:", this.cantidadEnCarrito);
    });
  }

  navigateToPokemons(): void {
    this.router.navigate(['/pokemons']);
  }

  navigateToProducts() {
    this.router.navigate(['/productos']);
  }
}