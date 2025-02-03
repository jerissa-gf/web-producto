import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-product-list-component',
  imports: [ProductCardComponent, CommonModule,
            FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule
  ],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})
export class ProductListComponentComponent {
  buscarProducto: string = '';
  productos = [
    {imagen: 'https://icnorteb2c.vteximg.com.br/arquivos/ids/158157-600-600/Leche-Condensada-Pil-397-Gr-1-360.jpg?v=637772457645030000', mensaje: 'LECHE CONDENSADA', precio: 12, descripcion: 'PRODUCTO LÁCTEO'},
    {imagen: 'https://acdn.mitiendanube.com/stores/001/930/794/products/dulce-de-leche-repostero-vacalin-1-kilo-1db60302d0c5c629f517011915416403-480-0.jpg', mensaje: 'DULCE DE LECHE', precio: 16, descripcion: 'PRODUCTO LÁCTEO'},
    {imagen: 'https://farmacorp.com/cdn/shop/files/8445291028050_1200x1200.jpg?v=1723828927', mensaje: 'LECHE EVAPORADA', precio: 11, descripcion: 'PRODUCTO LÁCTEO'},
    {imagen: 'https://icnorteb2c.vteximg.com.br/arquivos/ids/158157-600-600/Leche-Condensada-Pil-397-Gr-1-360.jpg?v=637772457645030000', mensaje: 'LECHE CONDENSADA', precio: 12, descripcion: 'PRODUCTO LÁCTEO'},
    {imagen: 'https://acdn.mitiendanube.com/stores/001/930/794/products/dulce-de-leche-repostero-vacalin-1-kilo-1db60302d0c5c629f517011915416403-480-0.jpg', mensaje: 'DULCE DE LECHE', precio: 16, descripcion: 'PRODUCTO LÁCTEO'},
    {imagen: 'https://farmacorp.com/cdn/shop/files/8445291028050_1200x1200.jpg?v=1723828927', mensaje: 'LECHE EVAPORADA', precio: 11, descripcion: 'PRODUCTO LÁCTEO'},
    {imagen: 'https://icnorteb2c.vteximg.com.br/arquivos/ids/158157-600-600/Leche-Condensada-Pil-397-Gr-1-360.jpg?v=637772457645030000', mensaje: 'LECHE CONDENSADA', precio: 12, descripcion: 'PRODUCTO LÁCTEO'},
    {imagen: 'https://acdn.mitiendanube.com/stores/001/930/794/products/dulce-de-leche-repostero-vacalin-1-kilo-1db60302d0c5c629f517011915416403-480-0.jpg', mensaje: 'DULCE DE LECHE', precio: 16, descripcion: 'PRODUCTO LÁCTEO'},
    {imagen: 'https://farmacorp.com/cdn/shop/files/8445291028050_1200x1200.jpg?v=1723828927', mensaje: 'LECHE EVAPORADA', precio: 11, descripcion: 'PRODUCTO LÁCTEO'},
    {imagen: 'https://icnorteb2c.vteximg.com.br/arquivos/ids/158157-600-600/Leche-Condensada-Pil-397-Gr-1-360.jpg?v=637772457645030000', mensaje: 'LECHE CONDENSADA', precio: 12, descripcion: 'PRODUCTO LÁCTEO'},
    {imagen: 'https://acdn.mitiendanube.com/stores/001/930/794/products/dulce-de-leche-repostero-vacalin-1-kilo-1db60302d0c5c629f517011915416403-480-0.jpg', mensaje: 'DULCE DE LECHE', precio: 16, descripcion: 'PRODUCTO LÁCTEO'},
    {imagen: 'https://farmacorp.com/cdn/shop/files/8445291028050_1200x1200.jpg?v=1723828927', mensaje: 'LECHE EVAPORADA', precio: 11, descripcion: 'PRODUCTO LÁCTEO'}
  ]

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
