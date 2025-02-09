import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PokeService } from '../services/poke.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  loadPokemons(): void {
    this.pokeService.getPokemons(20, 0).subscribe((data) => {
      const pokemons = data.results.map((pokemon: any) => ({
        name: pokemon.name
      }));
      this.dataSource.data = pokemons;
    });
  }
}