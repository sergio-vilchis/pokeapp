import { Component, Injectable, Input } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";
import { PokemonEntry } from "src/app/models/pokemon_entry.model";
import { PokemonSpecies } from "src/app/models/pokemon_species.model";
import { PokemonSpeciesVariety } from "src/app/models/pokemon_species_variety.model";
import { PokemonService } from "src/app/services/pokedex/pokemon.service";

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon_card.component.html',
  styleUrls: ['./pokemon_card.component.css'],
  providers: [PokemonService]
})

@Injectable({  providedIn: "root"})
export class PokemonCardComponent{
  @Input() pokemon_entry: PokemonEntry;

  pokemon_species: PokemonSpecies;
  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService){

  }

  getPokemonSpecies(){
    this.pokemonService.getPokemonSpecies(this.pokemon_entry.pokemon_species.url)
    .subscribe((response:any) => {
      this.pokemon_species = response;
      this.pokemon_species.varieties.forEach((result:PokemonSpeciesVariety) => {
        if(result.is_default) {
          this.getPokemon(result.pokemon.url);
        }
      })
    });
  }

  getPokemon(url: string){
    this.pokemonService.getPokemon(url)
    .subscribe((response:any) => {
      this.pokemon=response;
    });
  }

  ngOnInit(){
    this.getPokemonSpecies();
  }
}
