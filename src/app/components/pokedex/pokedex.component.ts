import { Component, Injectable, Input } from '@angular/core';
import { Pokedex } from 'src/app/models/pokedex.model';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
  providers: [PokedexService]
})

@Injectable({  providedIn: "root"})
export class PokedexComponent {

  @Input() pokedex: Pokedex;

  constructor(
    private pokedexService: PokedexService,
  ) {

   }
}
