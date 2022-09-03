import { Component } from '@angular/core';
import { Pokedex } from './models/pokedex.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Pokéapp';
  pokedex: Pokedex;

  pokedexFetch(pokedex: Pokedex){
    this.pokedex = pokedex;
  }
}
