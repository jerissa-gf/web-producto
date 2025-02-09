import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'productos', component: ProductListComponentComponent },
  { path: 'detalleProducto/:productId', component: ProductDetailsComponent },
  { path: 'pokemons', component: PokemonListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }