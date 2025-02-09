import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(limit: number, offset: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=${limit}&offset=${offset}`).pipe(
      catchError(error => {
        console.error('Error al obtener pokemons:', error);
        return throwError(() => new Error('No se pudo obtener la lista de pokemons. Por favor, inténtalo de nuevo más tarde.'));
      })
    );
  }
}