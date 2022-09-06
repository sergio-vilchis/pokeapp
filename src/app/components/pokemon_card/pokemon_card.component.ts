import { Component, Injectable, Input, Inject } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";
import { PokemonEntry } from "src/app/models/pokemon_entry.model";
import { PokemonSpecies } from "src/app/models/pokemon_species.model";
import { PokemonSpeciesVariety } from "src/app/models/pokemon_species_variety.model";
import { PokemonService } from "src/app/services/pokedex/pokemon.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon_card.component.html',
  styleUrls: ['./pokemon_card.component.css'],
  providers: [PokemonService,MatDialog]
})

@Injectable({  providedIn: "root"})
export class PokemonCardComponent{
  @Input() pokemon_entry: PokemonEntry;
  dialogRef: MatDialogRef<PokemonDetailsData>

  pokemon_species: PokemonSpecies;
  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService, public dialog: MatDialog){

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

  showPokemonDetails(){
    if(this.pokemon!==undefined){
      this.dialogRef = this.dialog.open(PokemonDetailsData, {
        data: {
          pokemon: this.pokemon,
          pokemon_species: this.pokemon_species
        },
      });
    }
  }

  ngOnInit(){
    this.getPokemonSpecies();
  }
}
@Component({
  selector: 'pokemon-details',
  templateUrl: '../pokemon-details/pokemon-details.component.html',
  styleUrls: ['../pokemon-details/pokemon-details.component.css'],
  providers: [MatDialog]
})
export class PokemonDetailsData {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

