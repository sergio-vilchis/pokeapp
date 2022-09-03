import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Generation } from 'src/app/models/generation.model';
import { Pokedex } from 'src/app/models/pokedex.model';
import { Region } from 'src/app/models/region.model';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';
import { RegionService } from 'src/app/services/region/region.service';

@Component({
  selector: 'generation-details',
  templateUrl: './generation-details.component.html',
  styleUrls: ['./generation-details.component.css'],
  providers: [RegionService, PokedexService]
})

@Injectable({  providedIn: "root"})
export class GenerationDetailsComponent {

  @Input() generation: Generation;
  @Output() pokedexEvent = new EventEmitter<Pokedex>();
  region: Region;
  pokedex: Pokedex;

  constructor(
    private regionService: RegionService,
    private pokedexService: PokedexService,
  ) {

   }

  async getRegion(){
    this.regionService.getRegionDetails(this.generation.main_region.url)
    .subscribe((response:any) => {
      this.region = response;
    });
   }

  async getPokedex(url: string){
    this.pokedexService.getPokedexDetails(url)
    .subscribe((response:any) => {
      this.pokedex = response;
      this.pokedexEvent.emit(this.pokedex);
    });
   }

  ngOnInit(){
    this.getRegion();
  }
}
