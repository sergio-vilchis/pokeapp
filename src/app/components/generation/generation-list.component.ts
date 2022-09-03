import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { GenerationService } from 'src/app/services/generation/generation.service';
import { Generation } from 'src/app/models/generation.model';
import { Pokedex } from 'src/app/models/pokedex.model';

@Component({
  selector: 'generation-list',
  templateUrl: './generation-list.component.html',
  styleUrls: ['./generation-list.component.css'],
  providers: [GenerationService]
})

@Injectable({  providedIn: "root"})
export class GenerationListComponent {

  generations: Generation[] = [];
  @Output() pokedexEvent = new EventEmitter<Pokedex>();

  constructor(
    //Servicios para obtener datos relacionados a las generaciones
    private generationService: GenerationService
  ) {

   }

   async getGenerations(){
    this.generationService.getGenerations()
    .subscribe((response:any) => {

      response.results.forEach((result:any) => {
        this.generationService.getGenerationsDetails(result.url)
        .subscribe((generation:Generation)=>{
          this.generations.push(generation);
          this.generations.sort((a,b)=>a.name.localeCompare(b.name));
        });
      });
    });
   }

   pokedexFetch(pokedex: Pokedex){
    this.pokedexEvent.emit(pokedex);
   }

   changedTab(index: number){
    this.pokedexEvent.emit(undefined);
   }

  ngOnInit(){
    this.getGenerations();
  }
}
