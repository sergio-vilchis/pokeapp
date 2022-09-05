import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Pokedex } from 'src/app/models/pokedex.model';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonSpecies } from 'src/app/models/pokemon_species.model';
import { ServiceUtils } from '../services-utils.model';

@Injectable()
export class PokemonService {
  constructor(
    private http: HttpClient,
    private serviceUtils: ServiceUtils
  ) {}

  getPokemonSpecies(url: string) {
    return this.http.get<PokemonSpecies>(url)
  }

  getPokemon(url: string){
    return this.http.get<Pokemon>(url)
  }

}
